import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App_96 from './App_96';
import { AppProvider_96 } from './context_96';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider_96>
      <App_96 />
    </AppProvider_96>
  </React.StrictMode>
);
