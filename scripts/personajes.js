export class Personajes {
    constructor() {
        this.personajes = JSON.parse(localStorage.getItem("Personajes")) || [];
    }
    recuperarPersonaje(id) {
        const idNum = Number(id);
        return this.personajes.find((pj) => Number(pj.id) === idNum);
    }

    agregarPersonaje(pj) {
        this.personajes.push(pj);
        this.guardarPersonaje();
    }
    eliminarPersonaje(id) {
        const idNum = Number(id);
        this.personajes = this.personajes.filter(
            (pj) => Number(pj.id) !== idNum
        );
        this.guardarPersonaje();
    }
    guardarPersonaje() {
        localStorage.setItem("Personajes", JSON.stringify(this.personajes));
    }
}
