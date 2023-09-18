import React from 'react';
import ReactDOM from 'react-dom'; // Fixed the import path
import App from './App'; // Removed the .tsx extension

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
