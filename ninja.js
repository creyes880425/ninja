class Ninja {
    constructor(nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3
    }

    sayName(){
        console.log(`El nombre del Ninja es: ${this.nombre}`);
    }

    showStats() {
        console.log(`El nombre del Ninja es ${this.nombre}, la fuerza ${this.fuerza}, la velocidad ${this.velocidad} y la salud del Ninja ${this.salud}.`)
    }

    drinkSake () {
        this.salud += 10;
        console.log(`La salud actual del Ninja es ${this.salud}`);
    }
}

const ninja = new Ninja('Carlos Reyes', 10);
ninja.sayName();
ninja.showStats();
ninja.drinkSake();