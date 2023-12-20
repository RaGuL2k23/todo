import { greet ,createToDo} from "./createToDo";
import { addEvents } from "./addEvents";
import { addProjectBtn, nameBtn } from "./createProjects";

  /* body.onload loads after loading EVERY SINGLE THING IN 
  THE DOCUMENT HENCE ADDING EVENTS ON THIS ACTION IS GREAT */

  // inshort adding click to existing tasks
document.body.onload=()=> { addEvents()}

const container  =      document.querySelector('.contentHolder');//right side container to store tasks
let taskContainer =     document.createElement('article');container.appendChild(taskContainer)
const addTaskBtn     =     document.querySelector('#addTask');
const taskDetailsDialog= document.getElementById('toDoTaskDetail');//dialog box
const submitBtn = document.querySelector('.submitBtn');
const exitBtn = document.querySelector('.exitBtn'); 



exitBtn.addEventListener('click',()=>taskDetailsDialog.close() );
addTaskBtn.addEventListener('click',()=>{ 
     openForm()
});
submitBtn.addEventListener('click',onFormSubmit)


function onFormSubmit(event){
    event.preventDefault(); //prevent form subbmission
    document.getElementById('taskName');
    new createToDo();  
    document.getElementById("inputForm").reset();
    taskDetailsDialog.close(); 
    addEvents();//to newly created tasks too
   }
   taskDetailsDialog.show();
function creatTask(event){

    }
  let c =new createToDo('son','descri','24-8-3834','HIGH'); 
  let d = new createToDo('rag ',"desc2",'','MEDIUM');
  let e = new createToDo('var',"333",'','LOW')
  console.log(c)


  // opening and closin gforms 
function closeForm(){ 
    taskDetailsDialog.close();  
    }
function openForm(){
    taskDetailsDialog.show()
}

/**functions for project dom*/
// function rmTskCon(){
//   taskContainer.remove();
//   taskContainer =     document.createElement('article');container.appendChild(taskContainer)

// }


export {
     container,addTaskBtn,taskContainer,closeForm,openForm
}