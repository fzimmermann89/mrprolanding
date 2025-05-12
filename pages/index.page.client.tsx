import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from '../src/App';

export { render };

async function render() {
  hydrateRoot(document.getElementById('root')!, <App />);
}