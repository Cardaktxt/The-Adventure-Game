import { Personajes } from "./personajes.js";

function Redirigir() {
    const indice = localStorage.getItem("esSeleccionado");
    if (indice == 0) {
        window.location.href = "../vistas/listaPersonajes.html";
    }
    return;
}

function CargarEstadisticas(Clase) {
    const esClase = Estadisticas(Clase);
    txVida.textContent = esClase["vida"];
    txDaño.textContent = esClase["daño"];
    txMana.textContent = esClase["mana"];
    txAgilidad.textContent = esClase["agilidad"];
    txDefensa.textContent = esClase["defensa"];
    txSuerte.textContent = esClase["suerte"];
}

function BorrarEstadisticas() {
    let text = "N/A";
    txVida.textContent = text;
    txDaño.textContent = text;
    txMana.textContent = text;
    txAgilidad.textContent = text;
    txDefensa.textContent = text;
    txSuerte.textContent = text;
}

function ComprobarClase(clases) {
    let claseS;
    let i = 0;
    clases.forEach((clase) => {
        if (clase.className == "claseSelect") {
            claseS = i;
        }
        i++;
    });
    return claseS;
}

function Estadisticas(clase) {
    const Eclases = [
        {
            clase: "Guerrero",
            vida: 100,
            daño: 30,
            mana: 10,
            agilidad: 20,
            defensa: 50,
            suerte: 1,
        },
        {
            clase: "Mago",
            vida: 70,
            daño: 50,
            mana: 100,
            agilidad: 15,
            defensa: 20,
            suerte: 1,
        },
        {
            clase: "Asesino",
            vida: 70,
            daño: 45,
            mana: 30,
            agilidad: 80,
            defensa: 25,
            suerte: 1.5,
        },
        {
            clase: "Guardián",
            vida: 120,
            daño: 20,
            mana: 40,
            agilidad: 10,
            defensa: 70,
            suerte: 1,
        },
    ];
    return Eclases[clase];
}

Redirigir();

const btClase1 = document.getElementById("cl1");
const btClase2 = document.getElementById("cl2");
const btClase3 = document.getElementById("cl3");
const btClase4 = document.getElementById("cl4");
const btG1 = document.getElementById("M");
const btG2 = document.getElementById("F");
const btG3 = document.getElementById("O");
const btCrear = document.getElementById("btCrear");

const txVida = document.getElementById("es_vida");
const txDaño = document.getElementById("es_daño");
const txMana = document.getElementById("es_mana");
const txAgilidad = document.getElementById("es_agilidad");
const txDefensa = document.getElementById("es_defensa");
const txSuerte = document.getElementById("es_suerte");

const txtNombre = document.getElementById("nombre");

btClase1.addEventListener("click", function () {
    if (btClase1.className == "claseSelect") {
        btClase1.className = "claseNoSelect";
        BorrarEstadisticas();
    } else {
        btClase1.className = "claseSelect";
        btClase2.className = "claseNoSelect";
        btClase3.className = "claseNoSelect";
        btClase4.className = "claseNoSelect";
        CargarEstadisticas(0);
    }
});

btClase2.addEventListener("click", function () {
    if (btClase2.className == "claseSelect") {
        btClase2.className = "claseNoSelect";
        BorrarEstadisticas();
    } else {
        btClase2.className = "claseSelect";
        btClase1.className = "claseNoSelect";
        btClase3.className = "claseNoSelect";
        btClase4.className = "claseNoSelect";
        CargarEstadisticas(1);
    }
});

btClase3.addEventListener("click", function () {
    if (btClase3.className == "claseSelect") {
        btClase3.className = "claseNoSelect";
        BorrarEstadisticas();
    } else {
        btClase3.className = "claseSelect";
        btClase1.className = "claseNoSelect";
        btClase2.className = "claseNoSelect";
        btClase4.className = "claseNoSelect";
        CargarEstadisticas(2);
    }
});
0;
btClase4.addEventListener("click", function () {
    if (btClase4.className == "claseSelect") {
        btClase4.className = "claseNoSelect";
        BorrarEstadisticas();
    } else {
        btClase4.className = "claseSelect";
        btClase1.className = "claseNoSelect";
        btClase2.className = "claseNoSelect";
        btClase3.className = "claseNoSelect";
        CargarEstadisticas(3);
    }
});

btG1.addEventListener("click", () => {
    if (btG1.className == "genero gSelect") {
        btG1.className = "genero";
    } else {
        btG1.className = "genero gSelect";
        btG2.className = "genero";
        btG3.className = "genero";
    }
});
btG2.addEventListener("click", () => {
    if (btG2.className == "genero gSelect") {
        btG2.className = "genero";
    } else {
        btG2.className = "genero gSelect";
        btG1.className = "genero";
        btG3.className = "genero";
    }
});
btG3.addEventListener("click", () => {
    if (btG3.className == "genero gSelect") {
        btG3.className = "genero";
    } else {
        btG3.className = "genero gSelect";
        btG1.className = "genero";
        btG2.className = "genero";
    }
});

btCrear.addEventListener("click", () => {
    const clases = [btClase1, btClase2, btClase3, btClase4];
    const clase = ComprobarClase(clases);
    const nombrePj = txtNombre.value;
    const idPj = localStorage.getItem("esSeleccionado");
    const player = {
        id: idPj,
        nombre: nombrePj,
        ...Estadisticas(clase),
    };
    console.log("Nombre Ingresado: " + nombrePj);
    console.log("Id de la clase: " + clase);
    console.log(player);
    const pjs = new Personajes();
    pjs.agregarPersonaje(player);
    localStorage.setItem("esSeleccionado", 0);
    window.location.href = "../vistas/listaPersonajes.html";
});
