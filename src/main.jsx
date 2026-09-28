import React from 'react'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/tokens.css'
import './styles/global.css'
import './styles/angled.css'

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />
  },
  {
    // About is now a section on the home page; keep old links working.
    path: "/about",
    element: <Navigate to="/#about" replace />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
