const products = [
    { id: 1, name: 'walton phone', price: 19000 },
    { id: 2, name: 'Xaomi phone one night', price: 32000 },
    { id: 3, name: 'ipnone 13pro max', price: 120000 },
    { id: 4, name: 'macBook air laptop', price: 200000 },
    { id: 5, name: 'lenovo yoga laptop', price: 75000 },
    { id: 6, name: 'dell inspiron laptop', price: 35000 },
    { id: 7, name: 'samsung phone', price: 78000 },
    { id: 8, name: 'Phone one', price: 90000 }
];


function getMatchProducts(products, search) {
    let matchProducts = [];
    for (let product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase()) === true) {
            matchProducts.push(product.name);

        }
    }
    return matchProducts;
}

const getProducts = getMatchProducts(products, 'Phone');
console.log(getProducts)