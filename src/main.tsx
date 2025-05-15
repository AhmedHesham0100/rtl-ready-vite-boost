
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n'; // Import i18n configuration

// Initialize i18n first, then render the app
createRoot(document.getElementById("root")!).render(<App />);
