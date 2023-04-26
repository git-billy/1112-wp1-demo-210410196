import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App_96 from './App_96';

// import { DemoProvider_xx } from './context/DemoContext_xx';
import { Provider_96 } from './context/Context_96';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider_96>
      <App_96 />
    </Provider_96>
  </React.StrictMode>
);

