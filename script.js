const navSlide = () => {

const toggle = document.querySelector('.burgerIcon');
const navList = document.querySelector('nav');
const navLinks = document.querySelectorAll('li');
/* Create a class 'open' when burger menu clicked */
toggle.addEventListener('click', () => {

    //TOGGLE NAV//
    /* when burgericon clikced, create a class 'open' where menu appears*/
    navList.classList.toggle('open'); 

    //ANIMATION OF LINKS//
    
    /*for each link we get its index so we can animate the delay between each*/
    /*also, we make sure the animation happens each time we open the navigaiton bar*/
    navLinks.forEach((link,index) =>{
        if (link.style.animation){
            link.style.animation =''
        }else {
            /*between brakets we add the delay according to the index of each links*/
            link.style.animation = `linkFade 0.5s ease forwards ${index / 6 + 0.3}s`;

        }
    });
    //BURGER MENU ANIMATION//
    toggle.classList.toggle('switch');
});
}

navSlide();


 


