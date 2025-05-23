import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import { AuthProvider } from '../components/AuthContext/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
  <BrowserRouter>
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
  </BrowserRouter>
  </Provider>
)
