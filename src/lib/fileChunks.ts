import { doc, setDoc, getDoc, getDocs, collection } from 'firebase/firestore';
import { db } from './firebase';

const CHUNK_SIZE = 500000; // ~500KB per chunk to safely fit inside 1MB Firestore doc limit

export async function uploadFileChunks(fileId: string, base64Data: string): Promise<void> {
  try {
    // Also save locally for instant offline access
    try {
      localStorage.setItem(`apex_file_${fileId}`, base64Data);
    } catch (e) {
      console.warn("Could not save file to localStorage (might exceed quota):", e);
    }

    const totalChunks = Math.ceil(base64Data.length / CHUNK_SIZE);
    
    // Set metadata doc
    await setDoc(doc(db, 'fileChunks', fileId), {
      fileId,
      totalChunks,
      createdAt: new Date().toISOString()
    });

    // Upload each chunk
    for (let i = 0; i < totalChunks; i++) {
      const chunk = base64Data.slice(i * CHUNK_SIZE, (i + 1) * CHUNK_SIZE);
      await setDoc(doc(db, `fileChunks/${fileId}/chunks`, String(i)), {
        index: i,
        data: chunk
      });
    }
  } catch (err) {
    console.error(`Error uploading file chunks for ${fileId}:`, err);
  }
}

export async function downloadFileChunks(fileId: string): Promise<string | null> {
  // Check local cache first
  const localData = localStorage.getItem(`apex_file_${fileId}`);
  if (localData) {
    return localData;
  }

  try {
    const chunksSnap = await getDocs(collection(db, `fileChunks/${fileId}/chunks`));
    if (chunksSnap.empty) {
      return null;
    }

    const chunks: { index: number; data: string }[] = [];
    chunksSnap.forEach(d => {
      const val = d.data();
      chunks.push({ index: val.index, data: val.data });
    });

    chunks.sort((a, b) => a.index - b.index);
    const fullBase64 = chunks.map(c => c.data).join('');

    // Cache locally
    try {
      localStorage.setItem(`apex_file_${fileId}`, fullBase64);
    } catch (e) {
      console.warn("Could not cache downloaded file in localStorage:", e);
    }

    return fullBase64;
  } catch (err) {
    console.error(`Error downloading file chunks for ${fileId}:`, err);
    return null;
  }
}
