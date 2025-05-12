import React from 'react';
import { renderToString } from 'react-dom/server';
import { dangerouslySkipEscape, escapeInject } from 'vite-plugin-ssr/server';
import App from '../src/App';

export { render };

async function render() {
  const pageHtml = renderToString(<App />);

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="MRpro is a Python package for MR image reconstruction and processing, specifically developed for PyTorch." />
        <title>MRpro - PyTorch-based MRI Reconstruction</title>
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}