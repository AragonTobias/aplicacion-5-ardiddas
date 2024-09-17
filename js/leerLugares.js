document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.getElementById("cards");
    const searchInput = document.getElementById("searchInput");

    let placesData = [];

    fetch("../js/lugares.json")
        .then(response => response.json())
        .then(data => {
            placesData = data;
            displayCards(placesData);
        })
        .catch(error => console.error('Error al cargar lugares:', error));

    function displayCards(data) {
        cardsContainer.innerHTML = '';
        data.forEach(e => {
            cardsContainer.innerHTML += `
                <div class="card">
                    <div class="fotoCard"><img src="${e.img}" alt="${e.nombre}"/></div>
                    <div class="descCard">
                        <a href="../views/infoLugar.html"><div class="nombreLugar"><h2>${e.nombre}</h2></div></a>
                        <div class="precioLugar"><h4>$${e.precio}</h4></div>
                    </div>
                </div>
            `;
        });
    }

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredData = placesData.filter(place =>
            place.nombre.toLowerCase().includes(searchTerm)
        );
        displayCards(filteredData);
    });
});
