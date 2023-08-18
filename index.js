
"use strict";

/*function sayHello() {
    console.log('Bienvenue à vous, cher maître');
    return;
}

window.addEventListener('load', sayHello);

window.addEventListener('load', function () {
    console.log('Bienvenue à vous, maître suprême !');
});

window.addEventListener('load', () => {
    console.log('Bienvenue à vous, Robin vous salue !');
}); */

// Définition de la classe Product
class Product {
    category;
    name;
    price;
    stock;
    constructor(category, name, price, stock) {
        this.category = category;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}


function getProducts(){
    return[
        new Product('Electronics', 'Smartphone', 699.99, 50),
        new Product('Clothing', 'Jeans', 49.99, 100),
        new Product('Beauty', 'Perfume', 29.99, 200),
        new Product('Home', 'Blender', 39.99, 30)
    ];
}


// Filtrer et afficher les produits dont le prix est supérieur à 20

function getPriceOverTwenty(){
    let products = getProducts();
    const result = products.filter((p)=> p.price > 20);
    console.log(result);
    return;
}

/*function getAvailableBooks() {
    const result = getProducts().filter((p) => p.category === "Livre" && p.availableStock > 0);
    console.log("Livres disponibles en stock :");
    console.log(result);
}*/

window.addEventListener('load', () => {
    getPriceOverTwenty();
});






//const expensiveProducts = products.filter(product => product.price > 20);

