(function() {
  emailjs.init("0tXlVPYzdd05PES_1"); // Public Key
})();

document.getElementById("questionario").addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.sendForm("service_vo4vkdf", "template_hpj29vj", this)
    .then(function() {
      alert("✅ Questionário enviado com sucesso!");
    }, function(error) {
      alert("❌ Erro ao enviar. Verifique a configuração do EmailJS.");
      console.error(error);
    });
});