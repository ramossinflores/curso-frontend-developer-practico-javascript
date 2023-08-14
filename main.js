const menuEmail =document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');
const menuHamburgerIcon=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');
const menuCartIcon=document.querySelector('.navbar-shopping-cart');
const aside=document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburgerIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click',toggleCartList);

function toggleDesktopMenu (){
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}
function toggleCartList(){
    const isMobileMenuClosed=mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed=desktopMenu.classList.contains('inactive');
    if(!isMobileMenuClosed){
            mobileMenu.classList.add('inactive');}
            aside.classList.toggle('inactive');    
            
    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
        aside.classList.toggle('inactive');

    }
}
