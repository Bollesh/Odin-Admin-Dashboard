let animationCont = document.querySelector('.animationCont');
let cardsInOne = document.querySelectorAll('.one>.card');
let cardsInTwo = document.querySelectorAll('.two>.card');
let cardsInThree = document.querySelectorAll('.three>.card');
let cardsInFour = document.querySelectorAll('.four>.card');
let cardsInFive = document.querySelectorAll('.five>.card');
let oddcards = document.querySelectorAll('.one, .three, .five')
// let windowHeight = innerHeight;
let mainCard = document.querySelector('.main');
let allCards = document.querySelectorAll('.card');

// window.addEventListener('resize', ()=>{
//     windowHeight = innerHeight;
//     animateCards();
// });

window.addEventListener('load', ()=>{
    animateCards()
});

function animateCards(){
    oddCards(cardsInOne);
    evenCards(cardsInTwo);
    oddCards(cardsInThree);
    evenCards(cardsInFour);
    oddCards(cardsInFive);
}

function evenCards(even){
    for(let i = 0; i < even.length; i++){
        even[even.length - 1 - i].style.transform = `translateY(${heightPixel(110)}px)`;
        if(i == 0){
            even[even.length - 1 - i].style.transition = `transform 1s cubic-bezier(.8,0,0.6,1)`;
            even[even.length - 1 - i].style.transform = `translateY(${heightPixel(95)}px)`;
            setTimeout(()=>{
                even[even.length - 1 - i].style.transform = `translateY(${heightPixel(110)}px)`;
                even[even.length - 1 - i].style.transition = `transform 2s`;
            },1000);
        }
        else{
            even[even.length - 1 - i].style.transition = `transform 2s cubic-bezier(.48,0,.69,1.09)`;
            even[even.length - 1 - i].style.transitionDelay = `${150*i}ms`; 
        }
    }
}

function oddCards(odd){
    for(let i = 0; i < odd.length; i++){
        odd[i].style.transform = `translateY(-${heightPixel(100)}px)`;
        if(i == 0){
            odd[i].style.transition = `transform 1s cubic-bezier(.8,0,0.6,1)`;
            odd[i].style.transform = `translateY(-${heightPixel(95)}px)`;
            setTimeout(()=>{
                odd[i].style.transform = `translateY(-${heightPixel(100)}px)`;

                odd[i].style.transition = `transform 1.5s`;
            },1000);
    
        }
        else{
            odd[i].style.transition = `transform 2s cubic-bezier(.48,0,.69,1.09)`;
            odd[i].style.transitionDelay = `${100*i}ms`; 
        }
    }
}

function heightPixel(percentage){
    return percentage / 100 * document.querySelector('.col').offsetHeight;
}

setTimeout(()=>{
    animationCont.style.scale = "4";
},2200)