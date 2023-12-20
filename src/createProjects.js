import { container ,rmTskCon,taskContainer} from "./index";
const addProjectBtn = document.querySelector('#addProject');
const projectForm = document.getElementById("addProjectDialog")
const nameBtn = document.getElementById("submitBtn2");
const exitBtn = document.getElementById("exitBtn2");

/*dom selections */
const navBar = document.querySelector(".nav");
const nameInput = document.querySelector('#prjName')
 let i=1;

class createProjects {
    constructor(name){
        if(name == undefined){
            this.name=nameInput.value;
        }
        else{this.name = name}
        this.name = "rocky"+i++
    }
   static addProjectName(){/*adds to nav*/
        alert(nameInput.value)
        const projectName = document.createElement('div');
        projectName.textContent=nameInput.value;
        navBar.append(projectName);
        projectName.onclick=()=>{
            alert('tuh');displayProject();
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
createProjects.addProjectName();


function displayProject(){ 
 
}
export{addProjectBtn,nameBtn}