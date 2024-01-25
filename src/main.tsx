import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Paths from 'Router';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <RouterProvider router={Paths()} />
   </React.StrictMode>,
);
