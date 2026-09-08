import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import './pages/apps/App.scss';
import './pages/login/index.scss';
import './pages/semSenha/index.scss';
import './pages/criacao/index.scss';
import AppRoutes from './routes.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);


