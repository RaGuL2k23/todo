(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["homePage"],{

/***/ "./src/rag.js":
/*!********************!*\
  !*** ./src/rag.js ***!
  \********************/
/***/ (() => {


const hero =            document.querySelector('.hero');/*getting for bluring purpose only*/
const container  =      document.querySelector('.contentHolder');//right side container to store tasks
let taskContainer =     document.createElement('div');container.appendChild(taskContainer)
const taskBtn =         document.querySelector('.taskbtn');
const taskDetailsDialog= document.getElementById('toDoTaskDetail');//dialog box
let Tasks =[]; 
submitBtn = document.querySelector('.submitBtn');
exitBtn = document.querySelector('.exitBtn'); 
exitBtn.addEventListener('click',()=>taskDetailsDialog.close() );
taskBtn.addEventListener('click',()=>{
     taskDetailsDialog.show(); 
});


function getFormInput(){ //to store items name,date,due,priority
  taskName = document.getElementById('taskName').value+Math.random()*9;  ;
  taskDescription = document.getElementById('taskDes').value;
  taskDue =  document.getElementById('due').value;
  taskPriority =  document.getElementById('priority').value;
  return {taskName,taskDue,taskDescription,taskPriority}
}
function makeTaskContainer(){
    const {taskName,taskDue,taskDescription,taskPriority} = getFormInput();

    const task = document.createElement('div');task.classList.add('task');
    task.innerHTML= ` <div   class="toDoTask"><input type="checkbox" name="completeTask" id="completeTask">
    <div>${taskName}</div><div>${taskDue}</div> <div>${taskDescription}</div>
    <div class="img"><img class=edit src="./images/pen.f143f2542420df9040ba2f60576c01b4.svg" alt="pen">
    <img onclick="deleteTask(this)" class=delete data-name=${taskName} src="./images/icons8-trash-1-dark.912351d015e21b5e38469d33950ebd1b.svg" alt="bin"> </div>              </div>
    </div>`
    task.classList.add(taskPriority); 
    task.setAttribute('data-todoname',`${taskName}`);   
    return task;
}
let deletIcons;
function addToDo(){//adds task 
   const task = makeTaskContainer();
   Tasks.push(task);  
   displayTasks() // to call daisplay fn whenever task added  
   addEvents();
}

function onFormSubmit(event){
  event.preventDefault(); //prevent form subbmission
  addToDo(); 
  
  document.getElementById("inputForm").reset();
  taskDetailsDialog.close(); 
 
 }
 
//adding delete fn logics
function findClickedTask(clickedTaskIcon){
  let requiredTask,requiredTaskIndex;
  Tasks.forEach((task,i) => {  
    if(task.dataset.todoname==clickedTaskIcon.dataset.name) {
       requiredTask = task;
       requiredTaskIndex=i;
    } 
  });
  return {task:requiredTask,index:requiredTaskIndex}
}
 
 
function deleteTask(clickedTaskIcon){ 
   const {task,index} =  findClickedTask(clickedTaskIcon);
   
   Tasks.splice(index,1)  ;
   displayTasks();console.log('del')
}
function displayTasks(){ 
  
  taskContainer.remove();//container to store tasks 
  taskContainer =document.createElement('div');
  container.append(taskContainer); 
  Tasks.forEach((task)=>{ 
        taskContainer.append(task); 
      }); 
      
}


document.getElementById("inputForm").addEventListener("submit",()=> onFormSubmit(event));

function addEvents(){ 
  deletIcons = document.querySelectorAll(".delete");//adding event listeners
  for (deleteImg of deletIcons){
    deleteImg.onclick = function() {
      deleteTask(this);
    } }
  document.querySelectorAll('.edit').forEach( pen => pen.onclick = ()=> console.log('helo'));
   
  
  }

/*adding edit logic*/

addToDo();addToDo();addToDo();addToDo();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/rag.js"));
/******/ }
]);
//# sourceMappingURL=homePage.js.map