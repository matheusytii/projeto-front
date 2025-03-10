document.getElementById("buscar").addEventListener("keyup", function() {
    let filtro = this.value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let nomeCarro = card.getAttribute("data-name").toLowerCase();
        if (nomeCarro.includes(filtro)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});