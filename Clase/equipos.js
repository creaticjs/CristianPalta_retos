class Equipos {
    constructor(nom, dt, py, letter, stadium, stars) {
        this.imagen = new Image();
        this.nombre = nom;
        this.entrenador = dt;
        this.jugadores = py;
        this.resenia = letter;
        this.estadio = stadium;
        this.archivement = stars;

        this.imagen.src = imagenEquipo[this.nombre];

    }

    mostrar(i) {
        
        switch (i) {
            case 0:
                alert("Case1");
                break;
            case 1:
                alert("Case2");
                break;
            case 2:
                alert("Case3");
                break;
        }
    }
}


