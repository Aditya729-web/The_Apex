const fs = require('fs');
let code = fs.readFileSync('src/main.tsx', 'utf8');

code = code.replace(
  `loadInitialDataFromFirestore().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});`,
  `loadInitialDataFromFirestore().catch(err => {
  console.error("Failed to load initial data from Firestore:", err);
}).finally(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});`
);

fs.writeFileSync('src/main.tsx', code);
