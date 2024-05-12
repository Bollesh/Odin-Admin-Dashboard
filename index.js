let taskNameInp = document.querySelector('#taskName');
let taskNameLabel = document.querySelector('label[for="taskName"]');
let taskDescInp = document.querySelector('#taskDesc');
let taskDescLabel = document.querySelector('label[for="taskDesc"]');
let dateInp = document.querySelector('input[type="date"]');
let timeInp = document.querySelector('input[type="time"]');
let priorityBtns = document.getElementsByName('priority');
let addBtn = document.querySelector('.add');
let toDoList = document.querySelector('.article')
let toDoCard = document.querySelectorAll('.toDoCard');
let doneBtn = document.querySelectorAll('.done');
let creditsBtn = document.querySelector('.credits');
let creditsPage = document.querySelector('.creditsPage');

addBtnClr();

// mainPage.classList.add('noDisp')

taskNameInp.addEventListener('click', ()=>{
  taskNameInp.style.boxShadow = `inset 0 0 10px white`;
  addBtnClr();``
});
  
taskDescInp.addEventListener('click', ()=>{
  taskDescInp.style.boxShadow = `inset 0 0 10px white`;
  addBtnClr();
});

dateInp.addEventListener('input',()=>{
  addBtnClr();
});

timeInp.addEventListener('input', ()=>{
  addBtnClr();
});

for(let i = 0; i < 3; i++){
  priorityBtns[i].addEventListener('click', ()=>{
    if(priorityBtns[i].checked){
      addBtnClr();
    }
  });
}

function priorityBtnsCheck(){
  for(let i = 0; i < 3; i++){
    if(priorityBtns[i].checked){
      return true;
    }
  }
}

function addBtnClr(){
  if(taskNameInp.value == '' || taskDescInp.value == '' || dateInp.value == '' || timeInp.value == '' || !priorityBtnsCheck()){
    addBtn.disabled = true;
  }
  else{
    addBtn.disabled = false;
    addBtn.style.border = `solid 2px white`;
    addBtn.style.boxShadow = `inset 0 0 10px white`;
  }
}

addBtn.addEventListener('click', ()=>{
  if(!addBtn.disabled){
    let card = document.createElement('div');
    card.classList.add('toDoCard');
    let title = document.createElement('h1');
    title.innerText = taskNameInp.value;
    let desc = document.createElement('p');
    desc.innerText = taskDescInp.value;
    let done = document.createElement('button');
    done.classList.add('done');
    done.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>`;
    done.setAttribute('onclick', 'deleteCard(this)')
    let dueBy = document.createElement('p');
    dueBy.classList.add('dueby');
    dueBy.innerText = 'Due By: ' +  dateInp.value + ' ' + timeInp.value;
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(done);
    card.appendChild(dueBy);
    priorityBtns.forEach(priorityBtn => {
      if(priorityBtn.checked){
        card.classList.add(document.querySelector(`label[for=${priorityBtn.id}]`).innerHTML);
      }
    });
    card.style.opacity = 0;
    let opacity = 0;
    toDoList.appendChild(card);
    function cardOpacity(){
      if(opacity < 1.1){
        opacity += 0.1;
        card.style.opacity = opacity;
        requestAnimationFrame(cardOpacity);
      }
    }
    requestAnimationFrame(cardOpacity);
    toDoCard = document.querySelectorAll('.toDoCard');
    doneBtn = document.querySelectorAll('.done');
    taskNameInp.value = '';
    taskDescInp.value = '';
    dateInp.value = '';
    timeInp.value = '';
    priorityBtns.forEach(priorityBtn => {
      priorityBtn.checked = false;
    });
    taskNameInp.style.boxShadow = `none`;
    taskDescInp.style.boxShadow = 'none';
  }
});

function deleteCard(item){
  let parentcard = item.parentElement;
  let opacity = 1;
  let transform = 0;
  function animate(){
    opacity -= 0.1;
    if(transform < 1.1){
      transform += 0.1;
      parentcard.style.transform = `translateX(${100*transform}px)`;
    }
    parentcard.style.opacity = `${opacity}`;
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
  setTimeout(()=>{
    parentcard.remove();
  },500);
}

creditsBtn.addEventListener('click', ()=>{
  mainPage.style.opacity = '0.1';
  // creditsPage.classList.remove('noDisp');
  creditsPage.style.transform = `translateY(0)`;
  creditsPage.style.opacity = '1';
});
