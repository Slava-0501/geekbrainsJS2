const goods = [
    { title: 'Shirt', price: 150, img: 'img/Shirt.jpg' },
    { title: 'Socks', price: 50, img: 'img/Socks.jpg'},
    { title: 'Jacket', price: 350, img: 'img/Jacket.jpg' },
    { title: 'Shoes', price: 250, img: 'img/Shoes.jpg' },
];

const renderGoodsItem = (obj) => {
    return `<div class="goods-item">
              <img class="img" src="${obj.img}" alt="image">
              <h3 class="title">${obj.title}</h3>
              <p class="text">${obj.price}</p>
            </div>`;
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
};

renderGoodsList(goods);