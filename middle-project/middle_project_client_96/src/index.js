import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App_96 from './App_96';

// import { DemoProvider_96 } from './context/DemoContext_96';
import { ServerProvider_96 } from './context/ServerContext_96';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ServerProvider_96>
      <App_96 />
    </ServerProvider_96>
  </React.StrictMode>
);

