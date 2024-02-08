'use strict';

class Refrigerator {
    constructor(color, meal, brand, capacity) {
        this.color = color;
        this.meal = meal;
        this.brand = brand;
        this.capacity = capacity;
    }

    showInfo() {
        alert(`Marca: ${this.brand}`);
        alert(`Capacidad: ${this.capacity}`);
        alert(`Calor: ${this.color}`);
        alert(`Productos: ${this.meal}`);
    }

    showProducts() {
        alert(`Productos: ${this.meal}`);
    }

    compras(productos) {

        if (Array.isArray(productos)) {
            this.meal = this.meal.concat(productos);
        } else {
         
            this.meal.push(productos);
        }
    }
}

let refri1 = new Refrigerator('Gris', ['Cerveza', 'Pollo', 'Carne', 'Leche', 'Huevos', 'Yogurt'], 'LG', '500lb');

refri1.showInfo();

refri1.compras(['Manzanas', 'Peras', 'Papas']);

refri1.showProducts();
