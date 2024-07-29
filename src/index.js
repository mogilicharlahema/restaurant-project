// import React from 'react';
// import ReactDOM from 'react-dom';

// import './index.css';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
