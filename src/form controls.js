import { domTasks, displayTasks} from "./todoDom";
import { objTasks } from "./createToDo";
import { openForm } from "./index";
function findClickedTask(clickedTaskIcon/*domTasks arry*/){
    //note on how it works : just compare   THE DATASETNAME OF TASK CONTAINER
    // AND (PEN OR DUSTBING ) ICON 
    // value can be changed in code maketaskcontainer
    let requiredTask,requiredTaskIndex;
    domTasks.forEach((task,i) => {  
      if(task.dataset.todoname==clickedTaskIcon.dataset.name) {
         requiredTask = task;
         requiredTaskIndex=i;
      } 
    });
    return {task:requiredTask,index:requiredTaskIndex}
  }
  let pushIndex;
  function deleteTaskByIndex(index){
    pushIndex = index;
    domTasks.splice(index,1) ; 
    console.log(pushIndex,'nows')
    displayTasks();
}
function editTask(clickedPen){ 
    const {task,index} =  findClickedTask(clickedPen);
    let objTask = objTasks[index]; 
    let {taskName,taskDue,taskDescription,taskPriority} = objTask.getFormInput(objTask)
    console.log(objTasks[index],'teset1') 
    document.getElementById('taskName').value   = objTask.title;
    document.getElementById('taskDes').value    = taskDescription 
    document.getElementById('due').value  = taskDue
    document.getElementById('priority').value  = taskPriority ;
    console.log(objTask,objTask.taskPriority)
    console.log(objTasks[index],'teset1')
    openForm();
    console.log('culprit',objTask);
    console.log(objTasks,domTasks)
    deleteTaskByIndex(index);
    
  }


  export {findClickedTask,deleteTaskByIndex,editTask,pushIndex}