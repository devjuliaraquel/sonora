// Dados do perfil e navegação da área do usuário.
const nomeSalvo = localStorage.getItem("nome") || "Usuário";
const emailSalvo = localStorage.getItem("emailCadastro") || localStorage.getItem("email") || "";

document.getElementById("nomeUsuario").textContent = nomeSalvo;
document.getElementById("emailUsuario").textContent = emailSalvo || "E-mail não informado";
document.getElementById("nomeBoasVindas").textContent = nomeSalvo.split(" ")[0];

document.getElementById("perfilNome").value = nomeSalvo === "Usuário" ? "" : nomeSalvo;
document.getElementById("perfilEmail").value = emailSalvo;
document.getElementById("perfilNascimento").value = localStorage.getItem("dataNascimento") || "";

document.getElementById("menuVoltar").addEventListener("click", function () {
  document.getElementById("menuLateral").classList.toggle("recolhido");
});

document.querySelectorAll(".item-menu").forEach(function (item) {
  item.addEventListener("click", function () {
    document.querySelectorAll(".item-menu").forEach(function (link) {
      link.classList.remove("ativo");
    });
    item.classList.add("ativo");
  });
});

document.getElementById("formPerfil").addEventListener("submit", function (event) {
  event.preventDefault();
  const nome = document.getElementById("perfilNome").value.trim();
  const email = document.getElementById("perfilEmail").value.trim().toLowerCase();
  const nascimento = document.getElementById("perfilNascimento").value;

  localStorage.setItem("nome", nome || "Usuário");
  localStorage.setItem("emailCadastro", email);
  localStorage.setItem("dataNascimento", nascimento);

  document.getElementById("nomeUsuario").textContent = nome || "Usuário";
  document.getElementById("emailUsuario").textContent = email || "E-mail não informado";
  document.getElementById("nomeBoasVindas").textContent = (nome || "usuário").split(" ")[0];
  document.getElementById("mensagemPerfil").textContent = "Dados atualizados neste navegador.";
});

document.getElementById("sairBtn").addEventListener("click", function () {
  sessionStorage.removeItem("logado");
  window.location.href = "pagina_login.html";
});

document.getElementById("altoContraste").addEventListener("change", function (event) {
  document.body.classList.toggle("contraste-reforcado", event.target.checked);
});
