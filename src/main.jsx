import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

import { Provider } from 'react-redux';
import { store } from './app/store.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Not Found</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
