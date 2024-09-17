document.addEventListener('DOMContentLoaded', () => {
    const hotelesContainer = document.getElementById("hoteles");
    const searchInput = document.getElementById("searchInput");

    let hotelsData = [];

    fetch("../js/hoteles.json")
        .then(response => response.json())
        .then(data => {
            hotelsData = data;
            displayCards(hotelsData);
        })
        .catch(error => console.error('Error al cargar hoteles:', error));

    function displayCards(data) {
        hotelesContainer.innerHTML = '';
        data.forEach(e => {
            hotelesContainer.innerHTML += `
                <div class="card">
                    <div class="fotoCard"><img src="${e.img}" alt="${e.nombre}"/></div>
                    <div class="descCard">
                        <div class="nombreLugar"><h2>${e.nombre}</h2></div>
                        <div class="precioLugar"><h4>$${e.precio}</h4></div>
                    </div>
                </div>
            `;
        });
    }

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredData = hotelsData.filter(hotel =>
            hotel.nombre.toLowerCase().includes(searchTerm)
        );
        displayCards(filteredData);
    });
});
