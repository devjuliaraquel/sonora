// Demonstração de cadastro e login usando o armazenamento do navegador.
// Para um sistema real, não armazene senhas em localStorage: use um backend seguro.

const formCadastro = document.getElementById("formCadastro");

if (formCadastro) {
  formCadastro.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const senha = document.getElementById("senha").value;
    const dataNascimento = document.getElementById("dataNascimento").value;

    // Mantém um único cadastro de demonstração neste navegador.
    localStorage.setItem("nome", nome);
    localStorage.setItem("emailCadastro", email);
    localStorage.setItem("senhaCadastro", senha);
    localStorage.setItem("dataNascimento", dataNascimento);

    alert("Cadastro realizado com sucesso!");
    window.location.href = "pagina_login.html";
  });
}

const formLogin = document.getElementById("formLogin");

if (formLogin) {
  const emailInput = document.getElementById("email");
  const lembrarInput = document.getElementById("salvamento_automatico");

  // Preenche o e-mail apenas se a pessoa tiver marcado "Lembre-se de mim".
  const emailLembrado = localStorage.getItem("emailLembrado");
  if (emailLembrado) {
    emailInput.value = emailLembrado;
    lembrarInput.checked = true;
  }

  formLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailDigitado = emailInput.value.trim().toLowerCase();
    const senhaDigitada = document.getElementById("senha").value;
    const emailCadastrado = localStorage.getItem("emailCadastro");
    const senhaCadastrada = localStorage.getItem("senhaCadastro");
    const mensagem = document.getElementById("mensagemLogin");

    if (emailDigitado === emailCadastrado && senhaDigitada === senhaCadastrada) {
      sessionStorage.setItem("logado", "true");

      if (lembrarInput.checked) {
        localStorage.setItem("emailLembrado", emailDigitado);
      } else {
        localStorage.removeItem("emailLembrado");
      }

      alert("Login realizado com sucesso!");
      // Troque por "dashboard.html" quando a página principal do sistema estiver pronta.
      window.location.href = "pagina_usuario.html";
    } else {
      mensagem.textContent = "E-mail ou senha incorretos. Confira os dados ou faça seu cadastro.";
    }
  });
}
