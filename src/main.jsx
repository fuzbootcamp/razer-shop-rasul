import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';

import { FavoritesContextProvider } from './context/FavoritesContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <BrowserRouter>
      <FavoritesContextProvider>
        <App />
      </FavoritesContextProvider>
    </BrowserRouter>
  </CartProvider>
);
