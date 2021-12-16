import "./login.css";
import React, { useState } from "react";

//Autenticação Firebase
import firebase from "../../config/firebase";
import "firebase/auth"

function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  function logar() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then((result) => {
        alert("Logou");
      })
      .catch((erro) => {
        alert(erro);
      });
  }

  return (
    <>
      <div className="login-content d-flex align-itens-center">
        <form className="form-signin mx-auto">
          <div className="text-center mb-4">
            <h1 className="h3 mb-3 fw-normal text-white font-weight-bold">
              <strong>Login</strong>
            </h1>
          </div>

          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control my-2"
            id="inputEmail"
            placeholder="Email Address"
          />

          <input
            onChange={(e) => setSenha(e.target.value)}
            type="password"
            className="form-control my-2"
            id="inputPassword"
            placeholder="Password"
          />
          <button
            onClick={logar}
            className="col-12 btn btn-lg btn-login"
            type="button"
          >
            Login
          </button>

          <div className="msg-login text-white text-center my-5">
            <span>
              <strong>Woh!</strong> You Are Connected! &#128526;
            </span>
            <br />
            <span>
              <strong>Ops!</strong> Check if password or email is correct!
              &#128546;
            </span>
          </div>

          <div className="opcoes-login mt-5">
            <a href="#" className="mx-2">
              Esqueci Minha senha?
            </a>
            <span className="text-white">&#9733;</span>
            <a href="#" className="mx-2">
              Quero me Cadastrar
            </a>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
