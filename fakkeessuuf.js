const expensiveProducts = products.filter(product => product.price > 20);

console.log("Produits coûtant plus de 20 :");
expensiveProducts.forEach(product => {
    console.log(`${product.name} (${product.category}) - Prix : ${product.price}`);
});