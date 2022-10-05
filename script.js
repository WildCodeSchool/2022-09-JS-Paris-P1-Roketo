/*FAQ*/

const faqButton = () => {

const toggleBtn = document.querySelectorAll('.faqCard__b');

toggleBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.nextElementSibling.classList.toggle('open')
    })
})


toggleBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active')
    })
})

}

faqButton()

/*Burger*/

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

/* animation background */

const bubblesContainer = document.querySelector("#bubbles");
// Generate 100 bubbles with random duration style
for (let i = 0; i < 100; i++){
    // Generate a random number between 5 and 15 included for duration style
    const bubbleDuration = Math.random() * (15 - 5) + 5;
    const bubble = document.createElement("span");
    bubble.style.animationDuration = `${bubbleDuration}s`;
    bubblesContainer.appendChild(bubble);
};

/* *FIN animation background */

