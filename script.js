function butaozinho (){
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    alert("Oba, logo nosssas ofertas estarão no seu e-mail!");
    localStorage.setItem("Dados_Nome", nome);
    localStorage.setItem("Dados_Email", email);
  }
  const buttao = document.getElementById("butaozinho");
  buttao.addEventListener("click", butaozinho)