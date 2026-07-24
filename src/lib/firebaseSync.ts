import { collection, doc, setDoc, getDocs, deleteDoc, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';

export async function syncDocToFirestore(collectionName: string, item: any) {
  try {
    if (item && item.id) {
      const cleanItem = JSON.parse(JSON.stringify(item));
      await setDoc(doc(db, collectionName, item.id), cleanItem);
    }
  } catch (err) {
    console.error(`Error syncing single doc ${item?.id} to ${collectionName}:`, err);
  }
}

export async function syncArrayToFirestore(collectionName: string, items: any[]) {
  try {
    for (const item of items) {
      if (item.id) {
        const cleanItem = JSON.parse(JSON.stringify(item));
        await setDoc(doc(db, collectionName, item.id), cleanItem);
      }
    }
  } catch (err) {
    console.error(`Error syncing ${collectionName} to Firestore:`, err);
  }
}

export async function deleteFromFirestore(collectionName: string, id: string) {
  try {
    await deleteDoc(doc(db, collectionName, id));
  } catch (err) {
    console.error(`Error deleting ${id} from ${collectionName}:`, err);
  }
}

export function setupFirestoreListeners() {
  const collectionsToListen = [
    { key: 'doubts', col: 'doubts' },
    { key: 'notifications', col: 'notifications' },
    { key: 'notes', col: 'notes' },
    { key: 'fees', col: 'feeRecords' },
    { key: 'students', col: 'students' },
    { key: 'batches', col: 'batches' },
    { key: 'tests', col: 'tests' }
  ];

  collectionsToListen.forEach(({ key, col }) => {
    try {
      onSnapshot(collection(db, col), (snapshot) => {
        if (!snapshot.empty) {
          const items = snapshot.docs.map(d => d.data());
          localStorage.setItem(`apex_${key}_v2`, JSON.stringify(items));
          if (typeof window !== 'undefined') {
            window.dispatchEvent(new Event('apex_storage_updated'));
          }
        }
      }, (err) => {
        console.debug(`Listener error for ${col}:`, err);
      });
    } catch (e) {
      console.debug(`Failed to attach snapshot listener for ${col}:`, e);
    }
  });
}

export async function loadInitialDataFromFirestore() {
  const collectionsToLoad = [
    { key: 'batches', col: 'batches' },
    { key: 'students', col: 'students' },
    { key: 'fees', col: 'feeRecords' },
    { key: 'notes', col: 'notes' },
    { key: 'doubts', col: 'doubts' },
    { key: 'tests', col: 'tests' },
    { key: 'notifications', col: 'notifications' }
  ];

  let hasData = false;
  
  const timeoutPromise = new Promise((_, reject) => 
    setTimeout(() => reject(new Error('Firestore load timeout')), 3000)
  );

  try {
    const fetchPromises = collectionsToLoad.map(async ({ key, col }) => {
      try {
        const snap = await getDocs(collection(db, col));
        if (!snap.empty) {
          hasData = true;
          const data = snap.docs.map(d => d.data());
          localStorage.setItem(`apex_${key}_v2`, JSON.stringify(data));
        } else {
          localStorage.setItem(`apex_${key}_v2`, JSON.stringify([]));
        }
      } catch (err) {
        // Ignore single collection fetch fail
      }
    });

    await Promise.race([Promise.allSettled(fetchPromises), timeoutPromise]);
  } catch (err) {
    console.debug("Firestore initial sync notice:", err);
  }

  // Start background real-time listeners
  setupFirestoreListeners();

  return hasData;
}
