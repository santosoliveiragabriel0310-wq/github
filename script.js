const botoes = document.querySelectorAll("button");

        botoes.forEach(function(botao) {
            botao.addEventListener("click", function() {
                let texto = botao.querySelector("span");
                texto.textContent = parseInt(texto.textContent) + 1;
            });
        });