import "./index.css";

function Login() {
  return (
    <section className="fundo">

         <section className="fundo-azul">
        <div className="maior">
          <img className="adiv" src='/assets/images/adiv.png' alt=''/>
          <div className="texts">
          <h1>Bem vindos de Volta</h1>
          </div>
      <img className="img-fundo" src="/assets/images/azul.png " alt=""/>
        </div>
      </section>
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
          </div>
          <a className="bott" href="#">Entra</a>
          <div className="divisor">
            <span className="linha"></span>
            <span className="texto-divisor">ou</span>
            <span className="linha"></span>
          </div>
          <div className="gogui">
            <img src="./assets/images/google.webp" alt=""/>
            <p>Entrar com Google</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login; 