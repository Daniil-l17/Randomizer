import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './style/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="max-w-[1400px] w-full m-auto px-2 py-3">
      <App />
    </div>
  </React.StrictMode>,
);
