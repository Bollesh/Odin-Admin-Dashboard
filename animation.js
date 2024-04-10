let animationCont = document.querySelector('.animationCont');
let cardsInOne = document.querySelectorAll('.one>.card');
let cardsInTwo = document.querySelectorAll('.two>.card');
let cardsInThree = document.querySelectorAll('.three>.card');
let cardsInFour = document.querySelectorAll('.four>.card');
let cardsInFive = document.querySelectorAll('.five>.card');
let evencards = document.querySelectorAll('.two, .four');
let oddcards = document.querySelectorAll('.one, .three, .five')
let windowHeight = innerHeight;
let contHeight = document.querySelector('.col').offsetHeight;
let mainCard = document.querySelector('.main');
let mainCardHeight = mainCard.offsetHeight;
let allCards = document.querySelectorAll('.card');

console.log(`${contHeight}, ${windowHeight}`)
console.log(contHeight / mainCardHeight)

setTimeout(()=>{
    animateCards();
}, 2000);

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
    return percentage / 100 * contHeight;
}

setTimeout(()=>{
    animationCont.style.scale = `${windowHeight / mainCardHeight * 1.1}`;
},3900)
