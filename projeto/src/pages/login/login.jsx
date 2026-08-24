import "./login.css";

function Login() {
  return (
    <section className="fundo">
    <div className="login">
      <div className="itens">
        <h1>só para testar</h1>
        <input type="text" placeholder="Digite seu nome/usuario" required/>
        <input type="password" placeholder="Senha" required></input>
        <p>clique aqui</p>
        </div>
    </div>
    </section>
  );
}

export default Login;