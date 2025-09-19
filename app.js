(function() {
   emailjs.init("0tXlVPYzdd05PES_1"); // Public Key
})();

document.getElementById("questionarioForm").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_vo4vkdf", "template_hpj29vj", this)
        .then(function() {
            alert("✅ Questionário enviado com sucesso!");
            document.getElementById("questionarioForm").reset();
        }, function(error) {
            alert("❌ Erro ao enviar: " + JSON.stringify(error));
        });
});
