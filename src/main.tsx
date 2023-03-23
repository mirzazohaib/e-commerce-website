import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import App from './App'
import HomePage from './pages/HomePage'

import { StoreProvider } from './redux/Store'
import axios from 'axios'

import ProductPage from './pages/ProductPage'

//import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

axios.defaults.baseURL = 'development' ? 'http://localhost:5173' : '/'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomePage />} />
      <Route path="product/:slug" element={<ProductPage />} />
      {/* <Route path="dashboard" element={<Dashboard />} /> */}
      {/* ... etc. */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>
)
