import { Personajes } from "./personajes.js";

function CargarDatosPj(contenedorPjs, pjs) {
    // Recorremos las 3 posiciones de personajes
    for (let i = 1; i <= 3; i++) {
        const player = pjs.recuperarPersonaje(i);
        console.log(`Checking slot ${i}:`, player);

        if (player) {
            // Si existe un personaje en esta posición
            const cajaPersonaje = document.createElement("div");
            const cajaDatos = document.createElement("div");
            const esp1 = document.createElement("span");
            const esp2 = document.createElement("span");
            const esp3 = document.createElement("span");
            const nombre = document.createElement("p");
            const separacion = document.createElement("span");
            const nivel = document.createElement("p");
            const btJugar = document.createElement("button");
            const btEliminar = document.createElement("button");
            const imagenBtJ = document.createElement("img");
            const imagenBtE = document.createElement("img");

            cajaPersonaje.className = "cajaPersonaje";
            cajaDatos.className = "cajaDatos";
            nombre.textContent = player.nombre;
            separacion.className = "separacion";
            nivel.textContent = `Lvl: ${player.nivel || 1}`; // Agregamos nivel por defecto si no existe
            btJugar.className = "boton jugar";
            btEliminar.className = "boton eliminar";
            imagenBtJ.src = "../img/jugar.png";
            imagenBtE.src = "../img/basurero.png";
            imagenBtJ.className = "iconoBtJugar";
            imagenBtE.className = "iconoBtEliminar";

            esp1.appendChild(nombre);
            esp2.appendChild(separacion);
            esp3.appendChild(nivel);
            cajaDatos.appendChild(esp1);
            cajaDatos.appendChild(esp2);
            cajaDatos.appendChild(esp3);
            btJugar.appendChild(imagenBtJ);
            btEliminar.appendChild(imagenBtE);
            cajaPersonaje.appendChild(cajaDatos);
            cajaPersonaje.appendChild(btJugar);
            cajaPersonaje.appendChild(btEliminar);
            contenedorPjs.appendChild(cajaPersonaje);

            btEliminar.addEventListener("click", () => {
                pjs.eliminarPersonaje(i);
                location.reload();
            });

            btJugar.addEventListener("click", () => {
                localStorage.setItem("PjSelect", Number(player.id));
                window.location.href = "../vistas/perfil.html";
            });
        } else {
            // Si no existe un personaje en esta posición
            console.log(`Slot ${i} vacío`);
            const cajaPersonaje = document.createElement("div");
            const cajaDato = document.createElement("div");
            const dato = document.createElement("p");
            const crearPj = document.createElement("button");
            const imagenBt = document.createElement("img");

            cajaPersonaje.className = "cajaPersonaje";
            dato.textContent = "No hay jugador";
            cajaDato.className = "cajaDato";
            crearPj.className = "boton crear";
            crearPj.id = "crear";
            imagenBt.src = "../img/mas.png";
            imagenBt.className = "iconoBtMas";

            cajaDato.appendChild(dato);
            crearPj.appendChild(imagenBt);
            cajaPersonaje.appendChild(cajaDato);
            cajaPersonaje.appendChild(crearPj);
            contenedorPjs.appendChild(cajaPersonaje);

            crearPj.addEventListener("click", () => {
                localStorage.setItem("esSeleccionado", i);
                window.location.href = "../vistas/crearPersonaje.html";
            });
        }
    }
}

function inicializarPersonajes() {
    try {
        const pjs = new Personajes();
        const contenedorPjs = document.getElementById("personajes");

        if (!contenedorPjs) {
            throw new Error("No se encontró el contenedor de personajes");
        }

        // Limpiamos el contenedor antes de cargar los personajes
        contenedorPjs.innerHTML = "";

        // Agregamos logging para debug
        console.log("Personajes en localStorage:", pjs.personajes);

        CargarDatosPj(contenedorPjs, pjs);
    } catch (error) {
        console.error("Error al cargar personajes:", error);
    }
}

// Aseguramos que el DOM esté cargado antes de inicializar
document.addEventListener("DOMContentLoaded", inicializarPersonajes);
