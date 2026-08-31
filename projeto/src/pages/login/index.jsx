import "./index.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="fundo">

      <section className="fundo-azul">
        <div className="maior">
          <div className="adiv"></div>
          <img className='adiv-img' src='/assets/images/adiv.png' alt='' />
          <div className="texts">
            <h1>Bem vindos de <span className="cor">Volta</span></h1>
            <h2>Faça login para acessar sua conta
              <br />e continuar de onde parou</h2>
          </div>
        <div className="iconis">
          <div className="Escudo">
            <img src="./assets/images/escudo.png" alt="" />
            <h1>Seguro e confiavel</h1>
            <h2>Seus dados protegidos com criptografia de ponta a ponta</h2>
          </div>
          <div className="estastic">
            <img style={{ width: "80px" }} src="./assets/images/Estástitica.png" alt="" />
            <h1>Acesse suas informações</h1>
            <h2>Visualize seu historico de compras, 
              <br/>atividades e muitas coisas</h2>
          </div>
          <div className="raio">
            <img src="./assets/images/raio.png" alt="" />
            <h1>Rápido e fácil</h1>
            <h2>Uma experiecia simples e intuitiva 
              <br/>para o seu dia a dia</h2>
          </div>
        </div>
        </div>
      </section>
      {/* A tela de login inteira é daqui pra baixo */}
      <div className="login">
        <div className="itens">
          <div className="ini">
            <h1>Entrar na sua conta</h1>
            <h2>Digite seus dados para continuar</h2>
          </div>
          <div className="inpp">
            <h2>E-mail</h2>
            <div className="inpeimg">
              <input type="text" placeholder="Digite seu nome/usuario" required />
              <img src="./assets/images/email.png" alt="" className="icone-input  " />
            </div>
          </div>
          <div className="inpp2">
            <h2>Senha</h2>
            <div className="inpeimg">
              <input type="password" placeholder="Senha" required></input>
              <img src="./assets/images/senha.png" alt="" className="icone-input" />
            </div>
            <div className="ultimo">
              <div className="check">
                <input type="checkbox" />
                <p>Lembrar-me</p>
              </div>
              <div className="esqueci">
                <Link className="esqueciLI" to='/semSenha'><p>Esqueceu a senha?</p></Link>
              </div>
            </div>
          </div>
          <a className="bott" href="#">Entra</a>
          <div className="divisor">
            <span className="linha"></span>
            <span className="texto-divisor">ou</span>
            <span className="linha"></span>
          </div>
          <div className="gogui">
            <img src="./assets/images/google.webp" alt="" />
            <p>Entrar com Google</p>
          </div>
          <div className="naotem">
        <h2>Não tem conta?</h2>
        <Link className="esqueciLI" to='/criação'>Clique aqui para se casdastrar</Link>
      </div>
        </div>
      </div>
    </section>
  );
}

export default Login; 