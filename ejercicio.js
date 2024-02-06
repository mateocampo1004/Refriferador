'use strict'

class Refrigerator{

    constructor(color,meal, brand,capacity){

        this.color = color;
        this.meal = meal;
        this.brand = brand;
        this.capacity = capacity;
    }

    showInfo(){

         alert(`Marca: ${this.brand}`);
         alert(`Capacidad: ${this.capacity}`);
         alert(`Calor: ${this.color}`);
         alert(`Productos: ${this.meal}`);
      

    }

        showProducts(){

            alert(`Productos: ${this.meal}`);  
        }


    compras(producto){

        this.meal.push(producto); 

    }
    
        comida(producto){

         let posicion = this.meal.indexOf(producto);
            if(posicion==!-1){
                this.meal.splice(indice,1);
                alert(`${producto} se a eliminado de la refrigeradora`);
            }else{
                alert('Producto agotado')
            }
        
    }

}

let refri1 = new Refrigerator('Gris',['Cerveza','Pollo','Carne','Leche','Huevos','Yogurt'],'LG','500lb');
refri1.showInfo();

refri1.compras('Queso, Jamon');

refri1.showProducts();

refri1.comida('Carne');

refri1.showProducts();
