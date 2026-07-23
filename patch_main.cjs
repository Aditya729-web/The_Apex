const fs = require('fs');
let code = fs.readFileSync('src/main.tsx', 'utf8');

code = code.replace(
  `import App from './App.tsx';`,
  `import App from './App.tsx';\nimport { loadInitialDataFromFirestore } from './lib/firebaseSync';`
);

code = code.replace(
  `createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);`,
  `loadInitialDataFromFirestore().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});`
);

fs.writeFileSync('src/main.tsx', code);
