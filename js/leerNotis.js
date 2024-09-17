
fetch("../js/notis.json")
    .then((response) => {
        return response.json()
    })
    .then((data) =>{

        data.forEach(e => {
            console.log(e);
            document.querySelector(".notifications-container").innerHTML +=` <div class="notification-card">
                         <img src="../img/noti.png" alt="Icono de notificación" class="notification-icon">
                        <div class="notification-content">
                           <div class="notification-date">${e.fecha}</div>
                             <p>${e.comentario}</p>
                        </div>
                    </div>`
        })
    });

