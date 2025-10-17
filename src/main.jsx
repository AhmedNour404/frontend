import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'flowbite';
import 'flowbite-react'; 
import { LanguageProvider } from './Components/Context/Context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <LanguageProvider>
      <App />
  </LanguageProvider>
  </StrictMode>,
)
