function greet(){
    console.log('arahh arahh')
}
import { resetForm } from "./index";
import { displayTasks,makeTaskContainer,pushIndex } from "./todoDom";
export{greet,createToDo,objTasks}
const taskDetailsDialog = document.getElementById("inputForm");

let objTasks=[];
class createToDo{
    constructor(title,des,date,priority){
        if(title==undefined /*& date == undefined & des== undefined*/){
             
            this.title = document.getElementById('taskName').value,
            this.des   = document.getElementById('taskDes').value,
            this.date  = document.getElementById('due').value,
            this.priority=document.getElementById('priority').value 
           }
        else{
            console.log('no')
            this.title = title,this.des=des,
            this.date=date,this.priority=priority
        }    
        // this.getFormInput();
        objTasks.push(this) 
        makeTaskContainer(this,pushIndex)// make task container for created obj
        console.log(pushIndex,"pushIndex")

    }
    
    
    getFormInput(obj){ //to store items name,date,due,priority
       let taskName =  this.title
       let taskDescription = this.des
       let taskDue =  this.date
       let taskPriority =  this.priority
       console.log(obj,"obj")
        resetForm();console.log('formInput')
        return {taskName,taskDue,taskDescription,taskPriority}
        }

    onFormSubmit(event){
        event.preventDefault(); //prevent form subbmission
        // addToDo(); 
        
        document.getElementById("inputForm").reset();
         taskDetailsDialog.close();
        
        }
    
        

}

