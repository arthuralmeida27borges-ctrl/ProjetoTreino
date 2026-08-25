import "./login.css";

function Login() {
  return (
    <section className="fundo">
      <div className="login">
        <div className="itens">
          <h1>só para testar</h1>
          <div className="inpp">
            <h2>E-mail</h2>
            <div className="inpeimg">
              <input type="text" placeholder="Digite seu nome/usuario" required />
              <img src="/images/email.png" alt="" className="icone-input  " />
            </div>
          </div>
          <div className="inpp2">
            <h2>Senha</h2>
            <div className="inpeimg">
              <input type="password" placeholder="Senha" required></input>
              <img src="/images/senha.png" alt="" className="icone-input" />
            </div>
          </div>
          <a className="bott" href="#">Entra</a>
        </div>
      </div>
    </section>
  );
}

export default Login; 