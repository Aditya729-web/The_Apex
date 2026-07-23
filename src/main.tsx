import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { loadInitialDataFromFirestore } from './lib/firebaseSync';
import './index.css';

// Render App immediately so screen is never blank
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Load data in background
loadInitialDataFromFirestore().catch(err => {
  console.warn("Background load from Firestore skipped or delayed:", err);
});

