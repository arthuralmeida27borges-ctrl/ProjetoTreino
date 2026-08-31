import './App.css'
import { Link } from "react-router-dom";

function App() {
 return (
  <div className='app'>
    <div className='nn'><Link className='lili' to="/login">Tela de login</Link></div>
    <div className='nn'><Link className='lili' to="/semSenha">Esqueceu a senha</Link></div>
    <div className='nn'><Link className='lili' to="/criação">Criação da conta</Link></div>
  </div>
);
}

export default App;