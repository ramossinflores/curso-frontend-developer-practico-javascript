const menuEmail =document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');
const menuHamburgerIcon=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');
const menuCartIcon=document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer=document.querySelector('#shoppingCartContainer');
const productDetailContainer=document.querySelector('#productDetail');
const cardsContainer=document.querySelector('.cards-container');
const productDetailCloseIcon=document.querySelector('.product-detail-close');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburgerIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click',toggleCartList);



function toggleDesktopMenu (){
    desktopMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

}
function toggleCartList(){
    const isMobileMenuClosed=mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed=desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
            mobileMenu.classList.add('inactive');}
            shoppingCartContainer.classList.toggle('inactive');    
            
    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
        shoppingCartContainer.classList.toggle('inactive');

    }
    const isProductDetailClose=productDetailContainer.classList.contains('inactive');
    if (!isProductDetailClose){
        productDetailContainer.classList.add('inactive');
        shoppingCartContainer.classList.remove('inactive'); }

    
}

function openProductDetailAside (){
    productDetailContainer.classList.remove('inactive');
    shoppingCartContainer.classList.add('inactive'); 
    desktopMenu.classList.add('inactive');


}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Roller Skates',
    price: 100,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Skateboard',
    price: 110,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Roller Skates',
    price: 100,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Skateboard',
    price: 110,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> */

function renderProducts (arrayProducts){
    for (product of arrayProducts){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
      
    
    const productInfo  = document.createElement('div');
    productInfo.classList.add('product-info');
    
    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    const productName = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    productName.innerText = product.name;
    
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName); 
    
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productInfoFigure.appendChild(productImgCart);
    
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);    
    cardsContainer.appendChild(productCard);
    cardsContainer.addEventListener('click',openProductDetailAside);

}
}

renderProducts(productList);