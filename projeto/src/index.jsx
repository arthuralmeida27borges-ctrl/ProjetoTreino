import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/apps/App.jsx';
import './pages/apps/App.css';
import Login from "./pages/login/index.jsx";
import Senha from "./pages/semSenha/index.jsx";
import Criacao from "./pages/criacao/index.jsx";
import "./pages/semSenha/index.jsx";

import './pages/semSenha/index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<App/>} />
        <Route path="/semSenha" element={<Senha/>} />
        <Route path="/criação" element={<Criacao/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


