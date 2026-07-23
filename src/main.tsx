import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { loadInitialDataFromFirestore } from './lib/firebaseSync';
import './index.css';

loadInitialDataFromFirestore().catch(err => {
  console.error("Failed to load initial data from Firestore:", err);
}).finally(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
