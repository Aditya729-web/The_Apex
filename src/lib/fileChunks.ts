import { doc, setDoc, getDocs, collection } from 'firebase/firestore';
import { db } from './firebase';
import { setFileIDB, getFileIDB } from './idbStorage';

const CHUNK_SIZE = 500000; // ~500KB per chunk to safely fit inside 1MB Firestore doc limit

export async function uploadFileChunks(fileId: string, base64Data: string): Promise<void> {
  try {
    // Save to IndexedDB for high-capacity offline storage (no 5MB quota limit)
    await setFileIDB(`apex_file_${fileId}`, base64Data);

    // Clean up legacy localStorage key if present
    try {
      localStorage.removeItem(`apex_file_${fileId}`);
    } catch (e) {
      // Ignore
    }

    const totalChunks = Math.ceil(base64Data.length / CHUNK_SIZE);
    
    // Attempt Firestore sync in background if permissions allow
    try {
      await setDoc(doc(db, 'fileChunks', fileId), {
        fileId,
        totalChunks,
        createdAt: new Date().toISOString()
      });

      for (let i = 0; i < totalChunks; i++) {
        const chunk = base64Data.slice(i * CHUNK_SIZE, (i + 1) * CHUNK_SIZE);
        await setDoc(doc(db, `fileChunks/${fileId}/chunks`, String(i)), {
          index: i,
          data: chunk
        });
      }
    } catch (err) {
      // Quiet fail if offline or permissions restricted
      console.debug("Firestore chunk sync notice:", err);
    }
  } catch (err) {
    console.debug("Local chunk storage notice:", err);
  }
}

export async function downloadFileChunks(fileId: string): Promise<string | null> {
  // Check IndexedDB cache first
  try {
    const localData = await getFileIDB(`apex_file_${fileId}`);
    if (localData) {
      return localData;
    }
  } catch (e) {
    // Ignore IndexedDB read errors
  }

  // Check legacy localStorage
  try {
    const legacyData = localStorage.getItem(`apex_file_${fileId}`);
    if (legacyData) {
      // Move to IndexedDB and delete from localStorage
      setFileIDB(`apex_file_${fileId}`, legacyData);
      localStorage.removeItem(`apex_file_${fileId}`);
      return legacyData;
    }
  } catch (e) {
    // Ignore localStorage errors
  }

  // Fallback to Firestore
  try {
    const chunksSnap = await getDocs(collection(db, `fileChunks/${fileId}/chunks`));
    if (chunksSnap.empty) {
      return null;
    }

    const chunks: { index: number; data: string }[] = [];
    chunksSnap.forEach(d => {
      const val = d.data();
      if (val && typeof val.data === 'string') {
        chunks.push({ index: val.index, data: val.data });
      }
    });

    if (chunks.length === 0) return null;

    chunks.sort((a, b) => a.index - b.index);
    const fullBase64 = chunks.map(c => c.data).join('');

    // Cache in IndexedDB for instant offline access
    setFileIDB(`apex_file_${fileId}`, fullBase64);

    return fullBase64;
  } catch (err) {
    console.debug("Firestore file chunk download notice:", err);
    return null;
  }
}


