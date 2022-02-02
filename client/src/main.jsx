import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { TransactionContextProvider } from './context/TransactionContext';

ReactDOM.render(
  <TransactionContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionContextProvider>,
  document.getElementById('root')
);
