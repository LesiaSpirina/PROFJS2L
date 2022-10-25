const products = [
    { id: 1, img: src='img/item3.png', title: 'Jacket',price: 2000,},
    { id: 2, img: src="img/3.jpg", title: 'Sweater', price: 200},
    { id: 3, img: scr="img/4.jpg", title: 'T-Shirt', price: 20},
    { id: 4, img: scr="img/5.jpg", title: 'Blazer', price: 50},
];

const renderProduct = (obj) => {
    return `<div class = 'product-item'>
                 <img class="img" src="${obj.img}">
                 <h3 class='name'> ${obj.title}</h3>
                 <p>Цена ${obj.price}</p>
                 <button class="buy-btn">Купить</button>
            </div>`
};

const renderPage = list => {
    const productsList = list.map (item => renderProduct(item));
    document.querySelector('.products').innerHTML = productsList.join('');
   
};
renderPage(products);