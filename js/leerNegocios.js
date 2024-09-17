document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("centrosNegocios");

    fetch("../js/centrosNegocios.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(e => {
                contenedor.innerHTML += `
                    <div class="card">
                        <div class="fotoCard"><img src="${e.img}" alt="${e.nombre}"/></div>
                        <div class="descCard">
                            <div class="nombreLugar"><h2>${e.nombre}</h2></div>
                            <div class="descripcionLugar"><p>${e.descripcion}</p></div>
                            <div class="precioLugar"><h4>$${e.precio}/hora</h4></div>
                        </div>
                    </div>
                `;
            });
        })
        .catch(error => console.error("Error al cargar los centros de negocios:", error));

  
    const searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            const name = card.querySelector(".nombreLugar h2").textContent.toLowerCase();
            const description = card.querySelector(".descripcionLugar p").textContent.toLowerCase();
            if (name.includes(query) || description.includes(query)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
