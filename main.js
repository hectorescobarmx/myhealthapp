const app = document.getElementById("app");

function renderLogin() {
  app.innerHTML = `
    <h2>Login</h2>
    <button id="loginBtn">Entrar</button>
  `;

  document.getElementById("loginBtn").addEventListener("click", renderApp);
}

function renderApp() {
  app.innerHTML = `
    <h1>My Health App</h1>
    <p>Dashboard</p>
  `;
}


