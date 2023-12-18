/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addEvents.js":
/*!**************************!*\
  !*** ./src/addEvents.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEvents: () => (/* binding */ addEvents)
/* harmony export */ });
/* harmony import */ var _form_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form controls */ "./src/form controls.js");



function addEvents(){ 
    let deletIcons = document.querySelectorAll(".delete");//adding event listeners
     for (let deleteImg of deletIcons){
       deleteImg.onclick = function() {
         (0,_form_controls__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(deleteImg);
       } }
     document.querySelectorAll('.edit').forEach( pen => pen.onclick =  ()=> {
         (0,_form_controls__WEBPACK_IMPORTED_MODULE_0__.editTask)(pen);
         });
      
     
     }
     

/***/ }),

/***/ "./src/createToDo.js":
/*!***************************!*\
  !*** ./src/createToDo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createToDo: () => (/* binding */ createToDo),
/* harmony export */   greet: () => (/* binding */ greet),
/* harmony export */   objTasks: () => (/* binding */ objTasks)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _todoDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoDom */ "./src/todoDom.js");
/* harmony import */ var _form_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form controls */ "./src/form controls.js");
function greet(){
    console.log('arahh arahh')
}

 





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
          
        if(_form_controls__WEBPACK_IMPORTED_MODULE_2__.isThisAEditedTasks == true){//is this a edited task (flag) tackles edited tasks alone 
                                        //value changeEditTaskFlag to true only whn editing tasks
            (0,_todoDom__WEBPACK_IMPORTED_MODULE_1__.makeTaskContainer)(this,_todoDom__WEBPACK_IMPORTED_MODULE_1__.pushIndex)
           console.log('edited',this.isEdited,this)
           ;(0,_form_controls__WEBPACK_IMPORTED_MODULE_2__.changeEditTaskFlag)(this,false) 
    }
     
       else{
        (0,_todoDom__WEBPACK_IMPORTED_MODULE_1__.makeTaskContainer)(this )
        console.log('Not edited',this.isEdited,this)
       }
     
        objTasks.push(this) 
        
        
    }
    
    
    getFormInput(obj){ //to store items name,date,due,priority
       let taskName =  this.title
       let taskDescription = this.des
       let taskDue =  this.date
       let taskPriority =  this.priority
       ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.closeForm)();
        return {taskName,taskDue,taskDescription,taskPriority}
        }

    onFormSubmit(event){
        event.preventDefault(); //prevent form subbmission
        // addToDo(); 
        
        document.getElementById("inputForm").reset();
         taskDetailsDialog.close();
        
        }
    
        

}



/***/ }),

/***/ "./src/form controls.js":
/*!******************************!*\
  !*** ./src/form controls.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeEditTaskFlag: () => (/* binding */ changeEditTaskFlag),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   deleteTaskByIndex: () => (/* binding */ deleteTaskByIndex),
/* harmony export */   editTask: () => (/* binding */ editTask),
/* harmony export */   findClickedTask: () => (/* binding */ findClickedTask),
/* harmony export */   isThisAEditedTasks: () => (/* binding */ isThisAEditedTasks),
/* harmony export */   pushIndex: () => (/* binding */ pushIndex)
/* harmony export */ });
/* harmony import */ var _todoDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoDom */ "./src/todoDom.js");
/* harmony import */ var _createToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createToDo */ "./src/createToDo.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.js");




let pushIndex;let isThisAEditedTasks = false;

 

function findClickedTask(clickedTaskIcon/*domTasks arry*/){
    //note on how it works : just compare   THE DATASETNAME OF TASK CONTAINER
    // AND (PEN OR DUSTBING ) ICON 
    // value can be changeEditTaskFlagd in code maketaskcontainer
    let requiredTask,requiredTaskIndex;
    _todoDom__WEBPACK_IMPORTED_MODULE_0__.domTasks.forEach((task,i) => {  
      if(task.dataset.todoname==clickedTaskIcon.dataset.name) {
         requiredTask = task;
         requiredTaskIndex=i;
      } 
    });
    return {task:requiredTask,index:requiredTaskIndex}
}



  
function deleteTaskByIndex(index){
    pushIndex = index;
    _todoDom__WEBPACK_IMPORTED_MODULE_0__.domTasks.splice(index,1) ; 
     
    (0,_todoDom__WEBPACK_IMPORTED_MODULE_0__.displayTasks)();
}
 

function changeEditTaskFlag(  value) {
  isThisAEditedTasks = value;
  console.log(isThisAEditedTasks,'changeEditTaskFlagfun')
}
function editTask(clickedPen){ 
    isThisAEditedTasks = true;
    const {task,index} =  findClickedTask(clickedPen);
    let objTask = _createToDo__WEBPACK_IMPORTED_MODULE_1__.objTasks[index]; 
    changeEditTaskFlag( true)
    let {taskName,taskDue,taskDescription,taskPriority} = objTask.getFormInput(objTask) 
    document.getElementById('taskName').value   = objTask.title;
    document.getElementById('taskDes').value    = taskDescription 
    document.getElementById('due').value  = taskDue
    document.getElementById('priority').value  = taskPriority ; 
    (0,_index__WEBPACK_IMPORTED_MODULE_2__.openForm)();
    deleteTaskByIndex(index);
    
  }



  function deleteTask(clickedTaskIcon){ 
    const {task,index} =  findClickedTask(clickedTaskIcon,_todoDom__WEBPACK_IMPORTED_MODULE_0__.domTasks);
    _todoDom__WEBPACK_IMPORTED_MODULE_0__.domTasks.splice(index,1)  ; 
    (0,_todoDom__WEBPACK_IMPORTED_MODULE_0__.displayTasks)(); 
 }
  
  

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeForm: () => (/* binding */ closeForm),
/* harmony export */   container: () => (/* binding */ container),
/* harmony export */   openForm: () => (/* binding */ openForm),
/* harmony export */   addTaskBtn: () => (/* binding */ addTaskBtn),
/* harmony export */   taskContainer: () => (/* binding */ taskContainer)
/* harmony export */ });
/* harmony import */ var _createToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDo */ "./src/createToDo.js");
/* harmony import */ var _addEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addEvents */ "./src/addEvents.js");

 
  /* body.onload loads after loading EVERY SINGLE THING IN 
  THE DOCUMENT HENCE ADDING EVENTS ON THIS ACTION IS GREAT */

  // inshort adding click to existing tasks
document.body.onload=()=> { (0,_addEvents__WEBPACK_IMPORTED_MODULE_1__.addEvents)()}

const container  =      document.querySelector('.contentHolder');//right side container to store tasks
let taskContainer =     document.createElement('div');container.appendChild(taskContainer)
const addTaskBtn     =     document.querySelector('.taskbtn');
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
    let  taskName = document.getElementById('taskName');
    let newObj =  new _createToDo__WEBPACK_IMPORTED_MODULE_0__.createToDo();  
    document.getElementById("inputForm").reset();
    taskDetailsDialog.close(); 
    (0,_addEvents__WEBPACK_IMPORTED_MODULE_1__.addEvents)();//to newly created tasks too
   }
   taskDetailsDialog.show();
function creatTask(event){

    }
  let c =new _createToDo__WEBPACK_IMPORTED_MODULE_0__.createToDo('son','descri','24-8-3834','HIGH'); 
  let d = new _createToDo__WEBPACK_IMPORTED_MODULE_0__.createToDo('rag ',"desc2",'','MEDIUM');
  let e = new _createToDo__WEBPACK_IMPORTED_MODULE_0__.createToDo('var',"333",'','MEDIUM')
  console.log(c)


  // opening and closin gforms 
function closeForm(){ 
    taskDetailsDialog.close();  
    }
function openForm(){
    taskDetailsDialog.show()
}



/***/ }),

/***/ "./src/todoDom.js":
/*!************************!*\
  !*** ./src/todoDom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayTasks: () => (/* binding */ displayTasks),
/* harmony export */   domTasks: () => (/* binding */ domTasks),
/* harmony export */   makeTaskContainer: () => (/* binding */ makeTaskContainer),
/* harmony export */   pushIndex: () => (/* reexport safe */ _form_controls__WEBPACK_IMPORTED_MODULE_1__.pushIndex)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _form_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form controls */ "./src/form controls.js");
 



let domTasks =[]; let taskContainer =document.createElement('div')

//determines where to push the edited task(very time saving)
function makeTaskContainer(obj,pushIndex){
        const {taskName,taskDescription,taskDue,taskPriority} = obj.getFormInput();

        const task = document.createElement('div');task.classList.add('task');
        task.innerHTML= ` <div  class="toDoTask ${taskPriority} s"><input type="checkbox" name="completeTask" id="completeTask">
        <div>${taskName}</div><div>${taskDue}</div> <div>${taskDescription}</div>
        <div class="img"><img data-name="${taskName}${taskPriority}${taskDescription}" class=edit src="./images/pen.f143f2542420df9040ba2f60576c01b4.svg" alt="pen">
        <img tooltip=delete  class=delete data-name="${taskName}${taskPriority}${taskDescription}" src="./images/icons8-trash-1-dark.912351d015e21b5e38469d33950ebd1b.svg" alt="bin"> </div>              </div>
        </div>` 
        task.setAttribute('data-todoname',`${taskName}${taskPriority}${taskDescription}`);   
        pushTask(domTasks,task,pushIndex)
        displayTasks(); 
}
function pushTask(arrayName,task,index= arrayName.length ){
    
    arrayName.splice(index,0,task); 
}
  
function displayTasks(){ 
 
     taskContainer.remove();//container to store tasks 
     taskContainer =document.createElement('div');
     _index__WEBPACK_IMPORTED_MODULE_0__.container.append(taskContainer); 

     domTasks.forEach((task)=>{ 
          taskContainer.append(task); 
        }); 
        
}
 
 
 


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDRTtBQUM3QztBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQSxTQUFTLDBEQUFVO0FBQ25CO0FBQ0E7QUFDQSxTQUFTLHdEQUFRO0FBQ2pCLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNvQztBQUNzQjtBQUNnQjtBQUN6QztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOERBQWtCLFVBQVU7QUFDdkM7QUFDQSxZQUFZLDJEQUFpQixNQUFNLCtDQUFTO0FBQzVDO0FBQ0EsV0FBVyxtRUFBa0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBaUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxrREFBUztBQUNoQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25Fb0U7QUFDNUI7QUFDTDtBQUNuQztBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4Q0FBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOENBQVE7QUFDWjtBQUNBLElBQUksc0RBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCLGtCQUFrQixpREFBUTtBQUMxQjtBQUNBLFNBQVMsK0NBQStDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnREFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZLG1DQUFtQyw4Q0FBUTtBQUNsRSxJQUFJLDhDQUFRO0FBQ1osSUFBSSxzREFBWTtBQUNoQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURnRDtBQUNSO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFEQUFTO0FBQ3JDO0FBQ0EsaUVBQWlFO0FBQ2pFLHNEQUFzRDtBQUN0RDtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0Esc0JBQXNCLG1EQUFVO0FBQ2hDO0FBQ0E7QUFDQSxJQUFJLHFEQUFTLEdBQUc7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbURBQVU7QUFDdkIsY0FBYyxtREFBVTtBQUN4QixjQUFjLG1EQUFVO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNxQztBQUNTO0FBQzlDO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrQ0FBK0M7QUFDOUQ7QUFDQSxtREFBbUQ7QUFDbkQsa0RBQWtELGNBQWM7QUFDaEUsZUFBZSxTQUFTLGFBQWEsUUFBUSxjQUFjLGdCQUFnQjtBQUMzRSwyQ0FBMkMsU0FBUyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0I7QUFDckYsdURBQXVELFNBQVMsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCO0FBQ2pHO0FBQ0EsNkNBQTZDLFNBQVMsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsS0FBSyw2Q0FBUztBQUNkO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDdENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2FkZEV2ZW50cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvY3JlYXRlVG9Eby5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvZm9ybSBjb250cm9scy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3RvZG9Eb20uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVkaXRUYXNrIH0gZnJvbSBcIi4vZm9ybSBjb250cm9sc1wiO1xyXG5pbXBvcnQgeyBkZWxldGVUYXNrIH0gZnJvbSBcIi4vZm9ybSBjb250cm9sc1wiO1xyXG5cclxuZnVuY3Rpb24gYWRkRXZlbnRzKCl7IFxyXG4gICAgbGV0IGRlbGV0SWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZVwiKTsvL2FkZGluZyBldmVudCBsaXN0ZW5lcnNcclxuICAgICBmb3IgKGxldCBkZWxldGVJbWcgb2YgZGVsZXRJY29ucyl7XHJcbiAgICAgICBkZWxldGVJbWcub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICBkZWxldGVUYXNrKGRlbGV0ZUltZyk7XHJcbiAgICAgICB9IH1cclxuICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdCcpLmZvckVhY2goIHBlbiA9PiBwZW4ub25jbGljayA9ICAoKT0+IHtcclxuICAgICAgICAgZWRpdFRhc2socGVuKTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgIFxyXG4gICAgIH1cclxuICAgICBleHBvcnR7YWRkRXZlbnRzLH0iLCJmdW5jdGlvbiBncmVldCgpe1xyXG4gICAgY29uc29sZS5sb2coJ2FyYWhoIGFyYWhoJylcclxufVxyXG5pbXBvcnQgeyBjbG9zZUZvcm0gfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgeyAgIG1ha2VUYXNrQ29udGFpbmVyLHB1c2hJbmRleCB9IGZyb20gXCIuL3RvZG9Eb21cIjsgXHJcbmltcG9ydCB7ICAgY2hhbmdlRWRpdFRhc2tGbGFnLGlzVGhpc0FFZGl0ZWRUYXNrcyB9IGZyb20gXCIuL2Zvcm0gY29udHJvbHNcIjtcclxuZXhwb3J0e2dyZWV0LGNyZWF0ZVRvRG8sb2JqVGFza3N9XHJcblxyXG5cclxuXHJcbmNvbnN0IHRhc2tEZXRhaWxzRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dEZvcm1cIik7XHJcblxyXG5sZXQgb2JqVGFza3M9W107XHJcbmNsYXNzIGNyZWF0ZVRvRG97XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXMsZGF0ZSxwcmlvcml0eSl7XHJcbiAgICAgICAgaWYodGl0bGU9PXVuZGVmaW5lZCAvKiYgZGF0ZSA9PSB1bmRlZmluZWQgJiBkZXM9PSB1bmRlZmluZWQqLyl7IFxyXG4gICAgICAgICAgICAvLyBjaGFuZ2VFZGl0VGFza0ZsYWdpc1RoaXNBRWRpdGVkVGFza3NWYWx1ZSgpOy8vIGl0J3MgY2hlY2tzIGZvciBmcmVzaCBuZXcgdGFza3MgdG8gYXBwZW5kIGF0IGxhc3RcclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTmFtZScpLnZhbHVlLFxyXG4gICAgICAgICAgICB0aGlzLmRlcyAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEZXMnKS52YWx1ZSxcclxuICAgICAgICAgICAgdGhpcy5kYXRlICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUnKS52YWx1ZSxcclxuICAgICAgICAgICAgdGhpcy5wcmlvcml0eT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZSAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIH1cclxuICAgICAgICBlbHNleyBcclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlLHRoaXMuZGVzPWRlcyxcclxuICAgICAgICAgICAgdGhpcy5kYXRlPWRhdGUsdGhpcy5wcmlvcml0eT1wcmlvcml0eVxyXG4gICAgICAgIH0gICBcclxuICAgICAgICAgIFxyXG4gICAgICAgIGlmKGlzVGhpc0FFZGl0ZWRUYXNrcyA9PSB0cnVlKXsvL2lzIHRoaXMgYSBlZGl0ZWQgdGFzayAoZmxhZykgdGFja2xlcyBlZGl0ZWQgdGFza3MgYWxvbmUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3ZhbHVlIGNoYW5nZUVkaXRUYXNrRmxhZyB0byB0cnVlIG9ubHkgd2huIGVkaXRpbmcgdGFza3NcclxuICAgICAgICAgICAgbWFrZVRhc2tDb250YWluZXIodGhpcyxwdXNoSW5kZXgpXHJcbiAgICAgICAgICAgY29uc29sZS5sb2coJ2VkaXRlZCcsdGhpcy5pc0VkaXRlZCx0aGlzKVxyXG4gICAgICAgICAgIGNoYW5nZUVkaXRUYXNrRmxhZyh0aGlzLGZhbHNlKSBcclxuICAgIH1cclxuICAgICBcclxuICAgICAgIGVsc2V7XHJcbiAgICAgICAgbWFrZVRhc2tDb250YWluZXIodGhpcyApXHJcbiAgICAgICAgY29uc29sZS5sb2coJ05vdCBlZGl0ZWQnLHRoaXMuaXNFZGl0ZWQsdGhpcylcclxuICAgICAgIH1cclxuICAgICBcclxuICAgICAgICBvYmpUYXNrcy5wdXNoKHRoaXMpIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIGdldEZvcm1JbnB1dChvYmopeyAvL3RvIHN0b3JlIGl0ZW1zIG5hbWUsZGF0ZSxkdWUscHJpb3JpdHlcclxuICAgICAgIGxldCB0YXNrTmFtZSA9ICB0aGlzLnRpdGxlXHJcbiAgICAgICBsZXQgdGFza0Rlc2NyaXB0aW9uID0gdGhpcy5kZXNcclxuICAgICAgIGxldCB0YXNrRHVlID0gIHRoaXMuZGF0ZVxyXG4gICAgICAgbGV0IHRhc2tQcmlvcml0eSA9ICB0aGlzLnByaW9yaXR5XHJcbiAgICAgICBjbG9zZUZvcm0oKTtcclxuICAgICAgICByZXR1cm4ge3Rhc2tOYW1lLHRhc2tEdWUsdGFza0Rlc2NyaXB0aW9uLHRhc2tQcmlvcml0eX1cclxuICAgICAgICB9XHJcblxyXG4gICAgb25Gb3JtU3VibWl0KGV2ZW50KXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvL3ByZXZlbnQgZm9ybSBzdWJibWlzc2lvblxyXG4gICAgICAgIC8vIGFkZFRvRG8oKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dEZvcm1cIikucmVzZXQoKTtcclxuICAgICAgICAgdGFza0RldGFpbHNEaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBcclxuXHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGRvbVRhc2tzLCBkaXNwbGF5VGFza3MsbWFrZVRhc2tDb250YWluZXJ9IGZyb20gXCIuL3RvZG9Eb21cIjtcclxuaW1wb3J0IHsgb2JqVGFza3MgfSBmcm9tIFwiLi9jcmVhdGVUb0RvXCI7XHJcbmltcG9ydCB7IG9wZW5Gb3JtIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbmxldCBwdXNoSW5kZXg7bGV0IGlzVGhpc0FFZGl0ZWRUYXNrcyA9IGZhbHNlO1xyXG5cclxuIFxyXG5cclxuZnVuY3Rpb24gZmluZENsaWNrZWRUYXNrKGNsaWNrZWRUYXNrSWNvbi8qZG9tVGFza3MgYXJyeSovKXtcclxuICAgIC8vbm90ZSBvbiBob3cgaXQgd29ya3MgOiBqdXN0IGNvbXBhcmUgICBUSEUgREFUQVNFVE5BTUUgT0YgVEFTSyBDT05UQUlORVJcclxuICAgIC8vIEFORCAoUEVOIE9SIERVU1RCSU5HICkgSUNPTiBcclxuICAgIC8vIHZhbHVlIGNhbiBiZSBjaGFuZ2VFZGl0VGFza0ZsYWdkIGluIGNvZGUgbWFrZXRhc2tjb250YWluZXJcclxuICAgIGxldCByZXF1aXJlZFRhc2sscmVxdWlyZWRUYXNrSW5kZXg7XHJcbiAgICBkb21UYXNrcy5mb3JFYWNoKCh0YXNrLGkpID0+IHsgIFxyXG4gICAgICBpZih0YXNrLmRhdGFzZXQudG9kb25hbWU9PWNsaWNrZWRUYXNrSWNvbi5kYXRhc2V0Lm5hbWUpIHtcclxuICAgICAgICAgcmVxdWlyZWRUYXNrID0gdGFzaztcclxuICAgICAgICAgcmVxdWlyZWRUYXNrSW5kZXg9aTtcclxuICAgICAgfSBcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHt0YXNrOnJlcXVpcmVkVGFzayxpbmRleDpyZXF1aXJlZFRhc2tJbmRleH1cclxufVxyXG5cclxuXHJcblxyXG4gIFxyXG5mdW5jdGlvbiBkZWxldGVUYXNrQnlJbmRleChpbmRleCl7XHJcbiAgICBwdXNoSW5kZXggPSBpbmRleDtcclxuICAgIGRvbVRhc2tzLnNwbGljZShpbmRleCwxKSA7IFxyXG4gICAgIFxyXG4gICAgZGlzcGxheVRhc2tzKCk7XHJcbn1cclxuIFxyXG5cclxuZnVuY3Rpb24gY2hhbmdlRWRpdFRhc2tGbGFnKCAgdmFsdWUpIHtcclxuICBpc1RoaXNBRWRpdGVkVGFza3MgPSB2YWx1ZTtcclxuICBjb25zb2xlLmxvZyhpc1RoaXNBRWRpdGVkVGFza3MsJ2NoYW5nZUVkaXRUYXNrRmxhZ2Z1bicpXHJcbn1cclxuZnVuY3Rpb24gZWRpdFRhc2soY2xpY2tlZFBlbil7IFxyXG4gICAgaXNUaGlzQUVkaXRlZFRhc2tzID0gdHJ1ZTtcclxuICAgIGNvbnN0IHt0YXNrLGluZGV4fSA9ICBmaW5kQ2xpY2tlZFRhc2soY2xpY2tlZFBlbik7XHJcbiAgICBsZXQgb2JqVGFzayA9IG9ialRhc2tzW2luZGV4XTsgXHJcbiAgICBjaGFuZ2VFZGl0VGFza0ZsYWcoIHRydWUpXHJcbiAgICBsZXQge3Rhc2tOYW1lLHRhc2tEdWUsdGFza0Rlc2NyaXB0aW9uLHRhc2tQcmlvcml0eX0gPSBvYmpUYXNrLmdldEZvcm1JbnB1dChvYmpUYXNrKSBcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTmFtZScpLnZhbHVlICAgPSBvYmpUYXNrLnRpdGxlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEZXMnKS52YWx1ZSAgICA9IHRhc2tEZXNjcmlwdGlvbiBcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUnKS52YWx1ZSAgPSB0YXNrRHVlXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZSAgPSB0YXNrUHJpb3JpdHkgOyBcclxuICAgIG9wZW5Gb3JtKCk7XHJcbiAgICBkZWxldGVUYXNrQnlJbmRleChpbmRleCk7XHJcbiAgICBcclxuICB9XHJcblxyXG5cclxuXHJcbiAgZnVuY3Rpb24gZGVsZXRlVGFzayhjbGlja2VkVGFza0ljb24peyBcclxuICAgIGNvbnN0IHt0YXNrLGluZGV4fSA9ICBmaW5kQ2xpY2tlZFRhc2soY2xpY2tlZFRhc2tJY29uLGRvbVRhc2tzKTtcclxuICAgIGRvbVRhc2tzLnNwbGljZShpbmRleCwxKSAgOyBcclxuICAgIGRpc3BsYXlUYXNrcygpOyBcclxuIH1cclxuICBcclxuICBleHBvcnQge2ZpbmRDbGlja2VkVGFzayxkZWxldGVUYXNrQnlJbmRleCxlZGl0VGFzayxkZWxldGVUYXNrLHB1c2hJbmRleCxcclxuICAgICBpc1RoaXNBRWRpdGVkVGFza3MsIGNoYW5nZUVkaXRUYXNrRmxhZyBcclxuICAgICBcclxuICB9IiwiaW1wb3J0IHsgZ3JlZXQgLGNyZWF0ZVRvRG99IGZyb20gXCIuL2NyZWF0ZVRvRG9cIjtcclxuaW1wb3J0IHsgYWRkRXZlbnRzIH0gZnJvbSBcIi4vYWRkRXZlbnRzXCI7IFxyXG4gIC8qIGJvZHkub25sb2FkIGxvYWRzIGFmdGVyIGxvYWRpbmcgRVZFUlkgU0lOR0xFIFRISU5HIElOIFxyXG4gIFRIRSBET0NVTUVOVCBIRU5DRSBBRERJTkcgRVZFTlRTIE9OIFRISVMgQUNUSU9OIElTIEdSRUFUICovXHJcblxyXG4gIC8vIGluc2hvcnQgYWRkaW5nIGNsaWNrIHRvIGV4aXN0aW5nIHRhc2tzXHJcbmRvY3VtZW50LmJvZHkub25sb2FkPSgpPT4geyBhZGRFdmVudHMoKX1cclxuXHJcbmNvbnN0IGNvbnRhaW5lciAgPSAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50SG9sZGVyJyk7Ly9yaWdodCBzaWRlIGNvbnRhaW5lciB0byBzdG9yZSB0YXNrc1xyXG5sZXQgdGFza0NvbnRhaW5lciA9ICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcilcclxuY29uc3QgdGFza0J0biAgICAgPSAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tidG4nKTtcclxuY29uc3QgdGFza0RldGFpbHNEaWFsb2c9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0RvVGFza0RldGFpbCcpOy8vZGlhbG9nIGJveFxyXG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0QnRuJyk7XHJcbmNvbnN0IGV4aXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXhpdEJ0bicpOyBcclxuZXhpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnRhc2tEZXRhaWxzRGlhbG9nLmNsb3NlKCkgKTtcclxudGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnsgXHJcbiAgICAgb3BlbkZvcm0oKVxyXG59KTtcclxuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxvbkZvcm1TdWJtaXQpXHJcblxyXG5cclxuZnVuY3Rpb24gb25Gb3JtU3VibWl0KGV2ZW50KXtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vcHJldmVudCBmb3JtIHN1YmJtaXNzaW9uXHJcbiAgICBsZXQgIHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tOYW1lJyk7XHJcbiAgICBsZXQgbmV3T2JqID0gIG5ldyBjcmVhdGVUb0RvKCk7ICBcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRGb3JtXCIpLnJlc2V0KCk7XHJcbiAgICB0YXNrRGV0YWlsc0RpYWxvZy5jbG9zZSgpOyBcclxuICAgIGFkZEV2ZW50cygpOy8vdG8gbmV3bHkgY3JlYXRlZCB0YXNrcyB0b29cclxuICAgfVxyXG4gICB0YXNrRGV0YWlsc0RpYWxvZy5zaG93KCk7XHJcbmZ1bmN0aW9uIGNyZWF0VGFzayhldmVudCl7XHJcblxyXG4gICAgfVxyXG4gIGxldCBjID1uZXcgY3JlYXRlVG9Ebygnc29uJywnZGVzY3JpJywnMjQtOC0zODM0JywnSElHSCcpOyBcclxuICBsZXQgZCA9IG5ldyBjcmVhdGVUb0RvKCdyYWcgJyxcImRlc2MyXCIsJycsJ01FRElVTScpO1xyXG4gIGxldCBlID0gbmV3IGNyZWF0ZVRvRG8oJ3ZhcicsXCIzMzNcIiwnJywnTUVESVVNJylcclxuICBjb25zb2xlLmxvZyhjKVxyXG5cclxuXHJcbiAgLy8gb3BlbmluZyBhbmQgY2xvc2luIGdmb3JtcyBcclxuZnVuY3Rpb24gY2xvc2VGb3JtKCl7IFxyXG4gICAgdGFza0RldGFpbHNEaWFsb2cuY2xvc2UoKTsgIFxyXG4gICAgfVxyXG5mdW5jdGlvbiBvcGVuRm9ybSgpe1xyXG4gICAgdGFza0RldGFpbHNEaWFsb2cuc2hvdygpXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBjb250YWluZXIsdGFza0J0bix0YXNrQ29udGFpbmVyLGNsb3NlRm9ybSxvcGVuRm9ybVxyXG59IiwiaW1wb3J0IHsgY29udGFpbmVyICB9IGZyb20gXCIuL2luZGV4XCI7IFxyXG5pbXBvcnQgeyAgcHVzaEluZGV4ICB9IGZyb20gXCIuL2Zvcm0gY29udHJvbHNcIjtcclxuXHJcblxyXG5sZXQgZG9tVGFza3MgPVtdOyBsZXQgdGFza0NvbnRhaW5lciA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHJcbi8vZGV0ZXJtaW5lcyB3aGVyZSB0byBwdXNoIHRoZSBlZGl0ZWQgdGFzayh2ZXJ5IHRpbWUgc2F2aW5nKVxyXG5mdW5jdGlvbiBtYWtlVGFza0NvbnRhaW5lcihvYmoscHVzaEluZGV4KXtcclxuICAgICAgICBjb25zdCB7dGFza05hbWUsdGFza0Rlc2NyaXB0aW9uLHRhc2tEdWUsdGFza1ByaW9yaXR5fSA9IG9iai5nZXRGb3JtSW5wdXQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO3Rhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xyXG4gICAgICAgIHRhc2suaW5uZXJIVE1MPSBgIDxkaXYgIGNsYXNzPVwidG9Eb1Rhc2sgJHt0YXNrUHJpb3JpdHl9IHNcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImNvbXBsZXRlVGFza1wiIGlkPVwiY29tcGxldGVUYXNrXCI+XHJcbiAgICAgICAgPGRpdj4ke3Rhc2tOYW1lfTwvZGl2PjxkaXY+JHt0YXNrRHVlfTwvZGl2PiA8ZGl2PiR7dGFza0Rlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWdcIj48aW1nIGRhdGEtbmFtZT1cIiR7dGFza05hbWV9JHt0YXNrUHJpb3JpdHl9JHt0YXNrRGVzY3JpcHRpb259XCIgY2xhc3M9ZWRpdCBzcmM9XCIuL2ltYWdlcy9wZW4uZjE0M2YyNTQyNDIwZGY5MDQwYmEyZjYwNTc2YzAxYjQuc3ZnXCIgYWx0PVwicGVuXCI+XHJcbiAgICAgICAgPGltZyB0b29sdGlwPWRlbGV0ZSAgY2xhc3M9ZGVsZXRlIGRhdGEtbmFtZT1cIiR7dGFza05hbWV9JHt0YXNrUHJpb3JpdHl9JHt0YXNrRGVzY3JpcHRpb259XCIgc3JjPVwiLi9pbWFnZXMvaWNvbnM4LXRyYXNoLTEtZGFyay45MTIzNTFkMDE1ZTIxYjVlMzg0NjlkMzM5NTBlYmQxYi5zdmdcIiBhbHQ9XCJiaW5cIj4gPC9kaXY+ICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gIFxyXG4gICAgICAgIHRhc2suc2V0QXR0cmlidXRlKCdkYXRhLXRvZG9uYW1lJyxgJHt0YXNrTmFtZX0ke3Rhc2tQcmlvcml0eX0ke3Rhc2tEZXNjcmlwdGlvbn1gKTsgICBcclxuICAgICAgICBwdXNoVGFzayhkb21UYXNrcyx0YXNrLHB1c2hJbmRleClcclxuICAgICAgICBkaXNwbGF5VGFza3MoKTsgXHJcbn1cclxuZnVuY3Rpb24gcHVzaFRhc2soYXJyYXlOYW1lLHRhc2ssaW5kZXg9IGFycmF5TmFtZS5sZW5ndGggKXtcclxuICAgIFxyXG4gICAgYXJyYXlOYW1lLnNwbGljZShpbmRleCwwLHRhc2spOyBcclxufVxyXG4gIFxyXG5mdW5jdGlvbiBkaXNwbGF5VGFza3MoKXsgXHJcbiBcclxuICAgICB0YXNrQ29udGFpbmVyLnJlbW92ZSgpOy8vY29udGFpbmVyIHRvIHN0b3JlIHRhc2tzIFxyXG4gICAgIHRhc2tDb250YWluZXIgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgIGNvbnRhaW5lci5hcHBlbmQodGFza0NvbnRhaW5lcik7IFxyXG5cclxuICAgICBkb21UYXNrcy5mb3JFYWNoKCh0YXNrKT0+eyBcclxuICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kKHRhc2spOyBcclxuICAgICAgICB9KTsgXHJcbiAgICAgICAgXHJcbn1cclxuIFxyXG4gXHJcbiBcclxuZXhwb3J0e2Rpc3BsYXlUYXNrcyxtYWtlVGFza0NvbnRhaW5lciwgcHVzaEluZGV4LGRvbVRhc2tzIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9