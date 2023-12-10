
const hero = document.querySelector('.hero');/*getting for bluring purpose only*/
const container  = document.querySelector('.contentHolder');//right side container to store tasks
let taskContainer =document.createElement('div');
container.appendChild(taskContainer)
const taskBtn = document.querySelector('.taskbtn');
const taskDetailsDialog = document.getElementById('toDoTaskDetail');//dialog box
let Tasks =[];
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
           </div>
  </div>`
  task.classList.add(taskPriority); 
  task.setAttribute('data-todoname',`${taskName}`);  
 
const deleteImg = document.createElement('img');
deleteImg.setAttribute('data-name', taskName);
deleteImg.src = './images/icons8-trash-1-dark.912351d015e21b5e38469d33950ebd1b.svg';
deleteImg.alt = 'bin';
deleteImg.onclick = function() {
  deleteTask(this);
};   
task.lastChild.append(deleteImg)
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
  
  taskContainer.remove();
  taskContainer =document.createElement('div');
  container.append(taskContainer);
  console.log(Tasks.length)
  Tasks.forEach((task)=>{
        console.log(Tasks)
        taskContainer.append(task); 
      }); 
      
}


document.getElementById("inputForm").addEventListener("submit",()=> onFormSubmit(event));
function addEvents(){j=0; 
  deletIcons = document.querySelectorAll(".delete");//adding event listeners
  // for (let icn of deletIcons){
  //   icn.addEventListener('click',()=> deleteTask(icn))
  // }
  //  return '';
}

addToDo();addToDo();addToDo();addToDo();