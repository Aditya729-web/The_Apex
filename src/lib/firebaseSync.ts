import { collection, doc, setDoc, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';

export async function syncArrayToFirestore(collectionName: string, items: any[]) {
  try {
    // Basic sync: just write each item to Firestore
    for (const item of items) {
      if (item.id) {
        await setDoc(doc(db, collectionName, item.id), item);
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
        }
      } catch (err) {
        // Ignore single collection fetch fail
      }
    });

    await Promise.race([Promise.allSettled(fetchPromises), timeoutPromise]);
  } catch (err) {
    console.debug("Firestore initial sync notice:", err);
  }

  return hasData;
}
