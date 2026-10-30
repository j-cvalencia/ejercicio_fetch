const boton = document.getElementById("btnCargar");
const lista = document.getElementById("listaUsuarios");

boton.addEventListener("click", function() {

    fetch("./usuarios.json")
        .then(response => response.json())
        .then(datos => {

            lista.innerHTML = "";

            datos.forEach(usuario => {

                lista.innerHTML += `
                    <div class="usuario">
                        <h3>${usuario.nombre}</h3>
                        <p>Edad: ${usuario.edad}</p>
                        <p>Profesión: ${usuario.profesion}</p>
                    </div>
                `;

            });

        })
        .catch(error => {
            console.log("Error al cargar los datos:", error);
        });

});
