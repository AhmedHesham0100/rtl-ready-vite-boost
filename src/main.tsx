
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Get stored language or default
const savedLanguage = localStorage.getItem('language') || 'en';
const isRTL = ['ar', 'he', 'fa', 'ur'].includes(savedLanguage);

// Set initial direction and language
document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
document.documentElement.lang = savedLanguage;

createRoot(document.getElementById("root")!).render(<App />);
