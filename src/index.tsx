import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './app'
import { normalizePath } from './routes'

import './assets/styles.css'

const root = document.getElementById('root') as HTMLElement
const app = (
  <React.StrictMode>
    <App path={normalizePath(window.location.pathname)} />
  </React.StrictMode>
)

// Production HTML is prerendered at build time; the dev server serves an empty root.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
