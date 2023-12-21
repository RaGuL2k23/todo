function greet(){
    console.log('arahh arahh')
}
import { closeForm } from "./index";
import {   makeTaskContainer,pushIndex } from "./todoDom"; 
import {   changeEditTaskFlag,isThisAEditedTasks } from "./form controls";


export{greet,createToDo,objTasks}



const taskDetailsDialog = document.getElementById("inputForm");

let objTasks=[];
class createToDo{
    constructor(title,des,date,priority){
        if(title==undefined /*& date == undefined & des== undefined*/){ 
            // changeEditTaskFlagisThisAEditedTasksValue();// it's checks for fresh new tasks to append at last
            this.title = document.getElementById('taskName').value,
            this.des   = document.getElementById('taskDes').value,
            this.date  = document.getElementById('due').value,
            this.priority=document.getElementById('priority').value  
            
           }
        else{ 
            this.title = title,this.des=des,
            this.date=date,this.priority=priority
        }   
          
        if(isThisAEditedTasks == true){// allows edited tasks to sit in their required index
                                        // 
            makeTaskContainer(this,pushIndex) 
           changeEditTaskFlag(this,false) 
    }
     
       else{
        makeTaskContainer(this ) 
       }
     
        objTasks.push(this) 
        
        
    }
    
    
    getFormInput(obj){ //to store items name,date,due,priority
       let taskName =  this.title
       let taskDescription = this.des
       let taskDue =  this.date
       let taskPriority =  this.priority
       closeForm();
        return {taskName,taskDue,taskDescription,taskPriority}
        }

      

}

