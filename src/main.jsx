import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import AppRoutes from './router/routes.jsx'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <Toaster position="top-right"/>
    <AppRoutes />
  </StrictMode>
  </BrowserRouter>,
)
