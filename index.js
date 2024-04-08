setTimeout(()=>{
    console.log('pp');
    let head = document.getElementsByTagName('head')[0];
let animationScript = document.createElement('script');
animationScript.src = "animation.js";
head.appendChild(animationScript);
},5000)


// let head = document.getElementsByTagName('head')[0];
// let animationScript = document.createElement('script');
// animationScript.src = "animation.js";
// head.appendChild(animationScript);