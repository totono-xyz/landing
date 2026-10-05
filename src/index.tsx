import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import { normalizePath } from './routes'

import './assets/styles.css'

// Dev server only: production pages are prerendered and ship without this bundle.
createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App path={normalizePath(window.location.pathname)} />
  </React.StrictMode>,
)
