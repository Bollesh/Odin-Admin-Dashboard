let animationCont = document.querySelector('.animationCont');
let mainPage = document.querySelector('.mainPage');
let cardsInOne = document.querySelectorAll('.one>.card');
let cardsInTwo = document.querySelectorAll('.two>.card');
let cardsInThree = document.querySelectorAll('.three>.card');
let cardsInFour = document.querySelectorAll('.four>.card');
let cardsInFive = document.querySelectorAll('.five>.card');
let windowHeight = innerHeight;
let contHeight = document.querySelector('.col').offsetHeight;
let mainCard = document.querySelector('.main');
let mainCardHeight = mainCard.offsetHeight;
let mainCardWidth = mainCard.offsetWidth;
let allCards = document.querySelectorAll('.card');
let root = document.querySelector(':root');


// setTimeout(()=>{
//     animateCards();
// }, 2000);

animateCards();

root.style.setProperty('--scale', `${windowHeight / mainCardHeight * 1.1}`);
root.style.setProperty('--mainCardHeight', `${mainCardHeight * windowHeight / mainCardHeight * 1.1}px`);
root.style.setProperty('--mainCardWidth', `${mainCardWidth * windowHeight / mainCardHeight * 1.1}px`);

function animateCards(){
    oddCards(cardsInOne);
    evenCards(cardsInTwo);
    oddCards(cardsInThree);
    evenCards(cardsInFour);
    oddCards(cardsInFive);
}


function evenCards(even){
    root.style.setProperty('--evenMain', `${heightPixel(92)}px`);
    root.style.setProperty('--evenAll', `${heightPixel(110)}px`);
    for(let i = 1; i < even.length; i++){
        even[even.length - 1 - i].style.animation = `evenAll 2s cubic-bezier(.48,0,.69,1.09) ${500 + 150*i}ms forwards`
    }
}

function oddCards(odd){
    root.style.setProperty('--oddMain', `-${heightPixel(95)}px`);
    root.style.setProperty('--oddAll', `-${heightPixel(100)}px`);
    for(let i = 1; i < odd.length; i++){
        if(odd[i].classList.contains('main')){
            odd[i].style.animation = `oddAll 2s cubic-bezier(.48,0,.69,1.09) ${500 + 200*i}ms forwards, mainGrow 2s var(--scaleDelay) forwards`;
        }
        else{
            odd[i].style.animation = `oddAll 2s cubic-bezier(.48,0,.69,1.09) ${500 + 200*i}ms forwards`;
        }
    }
}

function heightPixel(percentage){
    return Math.ceil(percentage / 100 * contHeight);
}

// mainPage.style.height = `${mainCardHeight }`

setTimeout(()=>{
    animationCont.classList.add('noDisp');
    mainPage.classList.remove('noDisp');
    for(let i = 0; i < 2; i++){
        document.querySelectorAll('.wave, .wave2')[i].style.display = `block`;
    }
}, 5000);

