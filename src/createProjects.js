import { container ,rmTskCon,taskContainer} from "./index";
const addProjectBtn = document.querySelector('#addProject');
const projectForm = document.getElementById("addProjectDialog")
const nameBtn = document.getElementById("submitBtn2");
const exitBtn = document.getElementById("exitBtn2");

/*dom selections */
const navBar = document.querySelector(".nav");
const nameInput = document.querySelector('#prjName')
 let i=1;
let projects=[]
class createProjects {
    constructor(name){
        if(name == undefined){
            this.name=nameInput.value;
        }
        else{this.name = name}
        this.name = "rocky"+i++
    }
   static addProjectName(){/*adds to nav*/
       
        const projectName = document.createElement('div');
        projectName.textContent=nameInput.value+i++;
        navBar.append(projectName,4);
        projectName.onclick=()=>{
            displayProject();
        }

    }
}
addProjectBtn.onclick= ()=>{
    projectForm.show(); 
}
/*prevent form submiting */
nameBtn.onclick=(event)=>{
    event.preventDefault();
    createProjects.addProjectName();
    projectForm.close();
}

/*dom stuff*/
 
let one = new createProjects('project2');
let two = new createProjects('r');
createProjects.addProjectName();
createProjects.addProjectName();


function displayProject(){ 
 
}
export{addProjectBtn,nameBtn,projects}