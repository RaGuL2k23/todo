/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/rag.js ***!
  \********************/

const hero = document.querySelector('.hero');/*getting for bluring purpose only*/
const container  = document.querySelector('.contentHolder');//right side container to store tasks
const taskBtn = document.querySelector('.taskbtn');
const taskDetailsDialog = document.getElementById('toDoTaskDetail');//dialog box
taskDetailsDialog.innerHTML=` 
  <form id="inputForm" method="" action="" >
            <p>
              <label for="taskName">TASKNAME</label>
              <input required minlength=5 maxlength=10 id="taskName" type="text" >
            </p>
            <p>
              <label for="due">DUE DATE</label>
              <input id = "due"   type="date" min="">
            </p>
            <p>
              <label for="taskDes">DESCRIPTION</label>
              <textarea  maxlength=30 rows=5 cols=4 id = "taskDes"  " type="text " ></textarea>
            </p>
            <p>
              <label for="priority">PRIORITY</label>
              <select id="priority" value="option PRIORITY">
                <option name="PRIORITY" id="">LOW</option>
                <option name="PRIORITY" id="">MEDIUM</option>
                <option name="PRIORITY" id="">HIGH</option>
              </select>
            </p>
            <button type="submit" class="submitBtn"  > SUBMIT</button>
            <button type=button class="exitBtn"> EXIT</button>
            </form>
          `
submitBtn = document.querySelector('.submitBtn');
exitBtn = document.querySelector('.exitBtn'); 
exitBtn.addEventListener('click',()=>taskDetailsDialog.close() );
taskBtn.addEventListener('click',()=>{
     taskDetailsDialog.show();
    hero.classList.add('blur');
});

function getFormInput(){ //to store items name,date,due,priority
  taskName = document.getElementById('taskName').value; 
  taskDescription = document.getElementById('taskDes').value;
  taskDue =  document.getElementById('due').value;
  taskPriority =  document.getElementById('priority').value;
  return {taskName,taskDue,taskDescription,taskPriority}
}
function makeTaskContainer(){
  const {taskName,taskDue,taskDescription,taskPriority} = getFormInput();
  task = document.createElement('div');task.classList.add('task');
  task.innerHTML= ` <div class="toDoTask"><input type="checkbox" name="completeTask" id="completeTask">
    <div>${taskName}</div><div>${taskDue}</div> <div>${taskDescription}</div>
    <div><img #edit src="./images/pen.f143f2542420df9040ba2f60576c01b4.svg" alt="pen">
         <img src="./images/icons8-trash-1-dark.912351d015e21b5e38469d33950ebd1b.svg" alt="bin"> </div>
  </div>`
  task.classList.add(taskPriority);
  task.setAttribute(`data-task`,`${taskName}`);//adding data-test attribute for specifi
                                                //accessing of task's 
                                                console.log(task.dataset.task)
  return task;
}
function addToDo(){//adds task 
  task = makeTaskContainer();
  container.append(task)  //appends it
}

function onFormSubmit(event){
  event.preventDefault(); //prevent form subbmission
  addToDo(); 
  
  document.getElementById("inputForm").reset();
  taskDetailsDialog.close(); 
 }
taskDetailsDialog.show()
// function editDialog
document.getElementById("inputForm").addEventListener("submit",()=> onFormSubmit(event));

/******/ })()
;
//# sourceMappingURL=main.js.map