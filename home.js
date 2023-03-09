// Nav Menu bar 
const bar = document.getElementById('bar');
const close = document.getElementById('close')
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    });
}

if (nav) {
    nav.addEventListener('click', () => {
        nav .classList.remove('active');
    });
}

// Cart Page 
const data = [
    {
        id: 0,
        img : 'img/blue.png',
        name: 'Ladie s Fashion Hang-Top',
        price: 100,
        itemInCart: false
    },
    {
        id: 1,
        img : 'img/show-back.png',
        name: 'Show sexy back',
        price: 100,
        itemInCart: false
    },
    {
        id: 2,
        img : 'img/slim.png',
        name: 'Black Organza Strapless',
        price: 100,
        itemInCart: false
    },
    {
        id: 3,
        img: 'img/class.png',
        name: 'Black',
        price: 100,
        itemInCart: false
    }
]

let cartList = []; //array to store cart lists

var i; 

var details = document.getElementsByClassName ('pro');
var detailsImg = document.getElementById('MainImg');
var detailsTitle = document.getElementById('detail-title');
var detailsPrice = document.getElementById('detail-price');
var detailsPage = document.getElementById('pro-details');
var addToCart = document.querySelectorAll('.add-to-cart')

//click events to add items to cart from details page
carts.addEventListener('click',()=>addToCart(getId));

var home = document.getElementById('logo');
//click event to hide cart page and return to home page
home.addEventListener('click',hideCart);

//events on dynamically created element to remove items from list
document.addEventListener('click',function (e){
    if(e.target.id=='remove'){
        var itemId = e.target.parentNode.id
        removeFromCart(itemId)
    }
})

function hideCart(){
    document.getElementById('main').style.display = "block";
    document.getElementById('cart-container').style.display = "none";
}