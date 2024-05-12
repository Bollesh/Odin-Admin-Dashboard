
// for(let i = 0; i < 4; i++){
//     allCards[i].style.backgroundImage = `url(images/image${i+1}-min.jpg)`;
// }

// for(let i = 4; i < 8; i++){
//     allCards[i].style.backgroundImage = `url(images/image${i+1}-min.jpg)`;
    
// }
// for(let i = 8; i < 12; i++){
//     allCards[i].style.backgroundImage = `url(images/image${i+1}-min.jpg)`;
// }

// for(let i = 12; i < 16; i++){
//     if(!allCards[i].classList.contains('main')){
//         allCards[i].style.backgroundImage = `url(images/image${i+1}-min.jpg)`;
//     }
// }

// for(let i = 16; i < 20; i++){
//     allCards[i].style.backgroundImage = `url(images/image${i+1}-min.jpg)`;
//     // allCards[i].style.background = `linear-gradient(${randomNum()}deg, rgb(${randomNum()}, ${randomNum()}, ${randomNum()}) 0%, rgb(${randomNum()}, ${randomNum()}, ${randomNum()}) 100%)`;
// }
// for(let i = 20; i < 23; i++){
//     allCards[i].style.backgroundImage = `url(images/image${i+1}-min.jpg)`;
// }

// for(let i = 0; i < 24; i++){
//     if(!allCards[i].classList.contains('main')){
//         if(i % 2 == 0){
//             allCards[i].style.backgroundImage = `url(images/image${i+1}-min.jpg)`;
//         }
//         else{
//             allCards[i].style.background = `linear-gradient(${randomNum()}deg, rgb(${randomNum()}, ${randomNum()}, ${randomNum()}) 0%, rgb(${randomNum()}, ${randomNum()}, ${randomNum()}) 100%)`;
//         }
//     }
// }

function randomNum(){
    return Math.floor(Math.random() * 201);
}



// setTimeout(()=>{
//     for(let i = 12; i < 16; i++){
//         if(!allCards[i].classList.contains('main')){
//             allCards[i].style.backgroundImage = `url(images/image${i+1}-min.jpg)`;
//         }
//     }
//     for(let i = 16; i < 20; i++){
//         allCards[i].style.backgroundImage = `url(images/image${i+1}-min.jpg)`;
//     }
//     for(let i = 20; i < 24; i++){
//         allCards[i].style.backgroundImage = `url(images/image${i+1}-min.jpg)`;    
//     }
// },200);
