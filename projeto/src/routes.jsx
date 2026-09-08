import { Routes, Route } from "react-router-dom";
import App from "./pages/apps/App.jsx";
import Login from "./pages/login/index.jsx";
import Senha from "./pages/semSenha/index.jsx";
import Criacao from "./pages/criacao/index.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/semSenha" element={<Senha />} />
      <Route path="/criaçao" element={<Criacao />} />
    </Routes>
  );
}

export default AppRoutes;