const navSlide = () => {
    const toggle = document.querySelector('.burgerIcon');
    const navMenu = document.querySelector('.menu');
    const navItems = document.querySelectorAll('.menu__item');
/* Create a class 'open' when burger menu clicked */
toggle.addEventListener('click', () => {

    //TOGGLE NAV//
    /* when burgericon clikced, create a class 'open' where menu appears*/
    navMenu.classList.toggle('open'); 

    //ANIMATION OF LINKS//
    
    /*for each link we get its index so we can animate the delay between each*/
    /*also, we make sure the animation happens each time we open the navigaiton bar*/
    navItems.forEach((link,index) =>{
        if (link.style.animation){
            link.style.animation =''
        }else {
            /*between brakets we add the delay according to the index of each links*/
            link.style.animation = `linkFade 0.5s ease forwards ${index / 6 + 0.3}s`;

        }
    });
    //BURGER MENU ANIMATION//
    toggle.classList.toggle('switch');

    //ACTIVE PAGE//

});
}
navSlide();

const activePage = () => {
    const navLinks = document.querySelectorAll('.menu__link');

navLinks.forEach(link => {
    if(link.href === window.location.href){
        link.setAttribute('aria-current', 'page')
    }
});
}
activePage();




 


