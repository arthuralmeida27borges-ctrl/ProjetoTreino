import "./index.css";

function Login() {
  return (
    <section className="fundo">
<<<<<<< HEAD
      <div>
      <img src="./assets/images/adiv.png" alt="" className="adiv-png"/>
       <h1 className="bem-vindo">BEM VINDOS</h1>
      </div>
=======

         <section className="fundo-azul">
        <div className="maior">
          <div className="adiv"></div>
          <img className='adiv-img' src='/assets/images/adiv.png' alt=''/>
          <div className="texts">
          <h1>Bem vindos de <span className="cor">Volta</span></h1>
          </div>
        </div>
      </section>
>>>>>>> 48b7fbd342974217571261083e85a599692cf14b
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
                <input type="checkbox"/>
                <p>Lembrar-me</p>
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
            <img src="./assets/images/google.webp" alt=""/>
            <p>Entrar com Google</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login; 