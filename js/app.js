class Item{
    constructor(nombre, precio, imagen){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

const luffy = new Item("Muñeco de Luffy", 200, "cartelluffy.webp");
const zoro = new Item("Muñeco de Zoro", 150, "cartelzoro.webp");
const sanji = new Item("Muñeco de Sanji", 100, "cartelsanji.webp");

const inventario = [];

let dinero = 1000;


const eldinero = document.querySelector("#dinero span");
eldinero.innerText = dinero;
const elinventario = document.getElementById("inventario");



function comprar(item){
if (dinero - item.precio >= 0){
    inventario.push(item);
    dinero = dinero - item.precio;
    actualizarhtml();
 } else{
    alert("No tienes el dinero suficiente para comprar " + item.nombre + ".");
}
}

function actualizarhtml() {
   
   elinventario.innerHTML="";
    for (const item of inventario) {
        const li = `
        <li>
         <img src="imagenes/${item.imagen}" alt="${item.imagen}"/>
        </li>
        `;
        elinventario.innerHTML += li;
}
eldinero.innerText = dinero;
}