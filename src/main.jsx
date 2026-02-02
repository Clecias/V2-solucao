import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { initTracking } from './utils/tracking';
import { initPromoPopup } from './utils/promoPopup';

initTracking();
initPromoPopup();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
