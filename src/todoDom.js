import { container,taskBtn, openForm, resetForm } from "./index";
import { objTasks } from "./createToDo";
import { findClickedTask,editTask,deleteTaskByIndex,pushIndex } from "./form controls";
let domTasks =[]; 
//determines where to push the edited task(very time saving)
function makeTaskContainer(obj,pushIndex){
    const {taskName,taskDescription,taskDue,taskPriority} = obj.getFormInput();

    const task = document.createElement('div');task.classList.add('task');
    task.innerHTML= ` <div  class="toDoTask ${taskPriority} s"><input type="checkbox" name="completeTask" id="completeTask">
    <div>${taskName}</div><div>${taskDue}</div> <div>${taskDescription}</div>
    <div class="img"><img data-name="${taskName}${taskPriority}" class=edit src="./images/pen.f143f2542420df9040ba2f60576c01b4.svg" alt="pen">
    <img tooltip=delete  class=delete data-name="${taskName}${taskPriority}" src="./images/icons8-trash-1-dark.912351d015e21b5e38469d33950ebd1b.svg" alt="bin"> </div>              </div>
    </div>` 
    task.setAttribute('data-todoname',`${taskName}${taskPriority}`);   
    pushTask(domTasks,task,pushIndex)
    displayTasks(); console.log(pushIndex,'pushpa')
}
function pushTask(arrayName,task,index= arrayName.length ,deletCount){
  if(index <= arrayName.length-1){index = pushIndex}
    arrayName.splice(index,0,task);
    console.log(arrayName)
}
  let taskContainer =document.createElement('div')
function displayTasks(){ 
 
    taskContainer.remove();//container to store tasks 
     taskContainer =document.createElement('div');
    container.append(taskContainer); 
    domTasks.forEach((task)=>{ 
          taskContainer.append(task); 
        }); 
        
}
 //adding delete fn logics
function deleteTask(clickedTaskIcon){ 
    const {task,index} =  findClickedTask(clickedTaskIcon,domTasks);
    domTasks.splice(index,1)  ;
    console.log(task,index)
    displayTasks(); 
 }
// function deleteTaskByIndex(index){
//     pushIndex = index;
//     domTasks.splice(index,1) ;
//     objTasks.splice(index,1)
//     displayTasks();
// }

   


 function addEvents(){ 
   let deletIcons = document.querySelectorAll(".delete");//adding event listeners
    for (let deleteImg of deletIcons){
      deleteImg.onclick = function() {
        deleteTask(deleteImg);
      } }
    document.querySelectorAll('.edit').forEach( pen => pen.onclick =  ()=> {
        editTask(pen);
        });
     
    
    }
export{displayTasks,makeTaskContainer,addEvents,pushIndex,domTasks}