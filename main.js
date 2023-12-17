/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createToDo.js":
/*!***************************!*\
  !*** ./src/createToDo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function  d (){
    console.log('dfsf');
}
let v = 'sdfsdf';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({d,v});

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDo */ "./src/createToDo.js");
 
const hero =            document.querySelector('.hero');/*getting for bluring purpose only*/
const container  =      document.querySelector('.contentHolder');//right side container to store tasks
let taskContainer =     document.createElement('div');container.appendChild(taskContainer)
const taskBtn =         document.querySelector('.taskbtn');
const taskDetailsDialog= document.getElementById('toDoTaskDetail');//dialog box
let Tasks =[]; 
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
    <img onclick="deleteTask(this)" class=delete data-name=${taskName} src="./images/icons8-trash-1-dark.912351d015e21b5e38469d33950ebd1b.svg" alt="bin"> </div>              </div>
    </div>`
    task.classList.add(taskPriority); 
    task.setAttribute('data-todoname',`${taskName}`);   
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
  
  taskContainer.remove();//container to store tasks 
  taskContainer =document.createElement('div');
  container.append(taskContainer); 
  Tasks.forEach((task)=>{ 
        taskContainer.append(task); 
      }); 
      
}


document.getElementById("inputForm").addEventListener("submit",()=> onFormSubmit(event));

function addEvents(){ 
  deletIcons = document.querySelectorAll(".delete");//adding event listeners
  for (deleteImg of deletIcons){
    deleteImg.onclick = function() {
      deleteTask(this);
    } }
  document.querySelectorAll('.edit').forEach( pen => pen.onclick = ()=> console.log('helo'));
   
  
  }

/*adding edit logic*/

addToDo();addToDo();addToDo();addToDo();
 
console.log( 'sdf')
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsQ0FBQzs7Ozs7O1VDSmhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLHdEQUF3RDtBQUN4RCxpRUFBaUU7QUFDakUsc0RBQXNEO0FBQ3REO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDMkI7QUFDNUI7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFdBQVcsK0NBQStDO0FBQzFEO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0EsV0FBVyxTQUFTLGFBQWEsUUFBUSxjQUFjLGdCQUFnQjtBQUN2RTtBQUNBLDZEQUE2RCxVQUFVO0FBQ3ZFO0FBQ0E7QUFDQSx5Q0FBeUMsU0FBUztBQUNsRDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsWUFBWTtBQUN0QjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxVQUFVLFVBQVU7QUFDOUI7QUFDQSxtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9jcmVhdGVUb0RvLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiAgZCAoKXtcclxuICAgIGNvbnNvbGUubG9nKCdkZnNmJyk7XHJcbn1cclxubGV0IHYgPSAnc2Rmc2RmJztcclxuZXhwb3J0IGRlZmF1bHQge2Qsdn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiBcclxuY29uc3QgaGVybyA9ICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8nKTsvKmdldHRpbmcgZm9yIGJsdXJpbmcgcHVycG9zZSBvbmx5Ki9cclxuY29uc3QgY29udGFpbmVyICA9ICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRIb2xkZXInKTsvL3JpZ2h0IHNpZGUgY29udGFpbmVyIHRvIHN0b3JlIHRhc2tzXHJcbmxldCB0YXNrQ29udGFpbmVyID0gICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO2NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKVxyXG5jb25zdCB0YXNrQnRuID0gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza2J0bicpO1xyXG5jb25zdCB0YXNrRGV0YWlsc0RpYWxvZz0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9UYXNrRGV0YWlsJyk7Ly9kaWFsb2cgYm94XHJcbmxldCBUYXNrcyA9W107IFxyXG5zdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0QnRuJyk7XHJcbmV4aXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXhpdEJ0bicpOyBcclxuZXhpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnRhc2tEZXRhaWxzRGlhbG9nLmNsb3NlKCkgKTtcclxudGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICB0YXNrRGV0YWlsc0RpYWxvZy5zaG93KCk7IFxyXG59KTtcclxuaW1wb3J0IGQgZnJvbSAnLi9jcmVhdGVUb0RvJ1xyXG5cclxuZnVuY3Rpb24gZ2V0Rm9ybUlucHV0KCl7IC8vdG8gc3RvcmUgaXRlbXMgbmFtZSxkYXRlLGR1ZSxwcmlvcml0eVxyXG4gIHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tOYW1lJykudmFsdWUrTWF0aC5yYW5kb20oKSo5OyAgO1xyXG4gIHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRGVzJykudmFsdWU7XHJcbiAgdGFza0R1ZSA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlJykudmFsdWU7XHJcbiAgdGFza1ByaW9yaXR5ID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlO1xyXG4gIHJldHVybiB7dGFza05hbWUsdGFza0R1ZSx0YXNrRGVzY3JpcHRpb24sdGFza1ByaW9yaXR5fVxyXG59XHJcbmZ1bmN0aW9uIG1ha2VUYXNrQ29udGFpbmVyKCl7XHJcbiAgICBjb25zdCB7dGFza05hbWUsdGFza0R1ZSx0YXNrRGVzY3JpcHRpb24sdGFza1ByaW9yaXR5fSA9IGdldEZvcm1JbnB1dCgpO1xyXG5cclxuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTt0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuICAgIHRhc2suaW5uZXJIVE1MPSBgIDxkaXYgICBjbGFzcz1cInRvRG9UYXNrXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJjb21wbGV0ZVRhc2tcIiBpZD1cImNvbXBsZXRlVGFza1wiPlxyXG4gICAgPGRpdj4ke3Rhc2tOYW1lfTwvZGl2PjxkaXY+JHt0YXNrRHVlfTwvZGl2PiA8ZGl2PiR7dGFza0Rlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImltZ1wiPjxpbWcgY2xhc3M9ZWRpdCBzcmM9XCIuL2ltYWdlcy9wZW4uZjE0M2YyNTQyNDIwZGY5MDQwYmEyZjYwNTc2YzAxYjQuc3ZnXCIgYWx0PVwicGVuXCI+XHJcbiAgICA8aW1nIG9uY2xpY2s9XCJkZWxldGVUYXNrKHRoaXMpXCIgY2xhc3M9ZGVsZXRlIGRhdGEtbmFtZT0ke3Rhc2tOYW1lfSBzcmM9XCIuL2ltYWdlcy9pY29uczgtdHJhc2gtMS1kYXJrLjkxMjM1MWQwMTVlMjFiNWUzODQ2OWQzMzk1MGViZDFiLnN2Z1wiIGFsdD1cImJpblwiPiA8L2Rpdj4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YFxyXG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKHRhc2tQcmlvcml0eSk7IFxyXG4gICAgdGFzay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kb25hbWUnLGAke3Rhc2tOYW1lfWApOyAgIFxyXG4gICAgcmV0dXJuIHRhc2s7XHJcbn1cclxubGV0IGRlbGV0SWNvbnM7XHJcbmZ1bmN0aW9uIGFkZFRvRG8oKXsvL2FkZHMgdGFzayBcclxuICAgY29uc3QgdGFzayA9IG1ha2VUYXNrQ29udGFpbmVyKCk7XHJcbiAgIFRhc2tzLnB1c2godGFzayk7ICBcclxuICAgZGlzcGxheVRhc2tzKCkgLy8gdG8gY2FsbCBkYWlzcGxheSBmbiB3aGVuZXZlciB0YXNrIGFkZGVkICBcclxuICAgYWRkRXZlbnRzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uRm9ybVN1Ym1pdChldmVudCl7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy9wcmV2ZW50IGZvcm0gc3ViYm1pc3Npb25cclxuICBhZGRUb0RvKCk7IFxyXG4gIFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRGb3JtXCIpLnJlc2V0KCk7XHJcbiAgdGFza0RldGFpbHNEaWFsb2cuY2xvc2UoKTsgXHJcbiBcclxuIH1cclxuIFxyXG4vL2FkZGluZyBkZWxldGUgZm4gbG9naWNzXHJcbmZ1bmN0aW9uIGZpbmRDbGlja2VkVGFzayhjbGlja2VkVGFza0ljb24pe1xyXG4gIGxldCByZXF1aXJlZFRhc2sscmVxdWlyZWRUYXNrSW5kZXg7XHJcbiAgVGFza3MuZm9yRWFjaCgodGFzayxpKSA9PiB7ICBcclxuICAgIGlmKHRhc2suZGF0YXNldC50b2RvbmFtZT09Y2xpY2tlZFRhc2tJY29uLmRhdGFzZXQubmFtZSkge1xyXG4gICAgICAgcmVxdWlyZWRUYXNrID0gdGFzaztcclxuICAgICAgIHJlcXVpcmVkVGFza0luZGV4PWk7XHJcbiAgICB9IFxyXG4gIH0pO1xyXG4gIHJldHVybiB7dGFzazpyZXF1aXJlZFRhc2ssaW5kZXg6cmVxdWlyZWRUYXNrSW5kZXh9XHJcbn1cclxuIFxyXG4gXHJcbmZ1bmN0aW9uIGRlbGV0ZVRhc2soY2xpY2tlZFRhc2tJY29uKXsgXHJcbiAgIGNvbnN0IHt0YXNrLGluZGV4fSA9ICBmaW5kQ2xpY2tlZFRhc2soY2xpY2tlZFRhc2tJY29uKTtcclxuICAgXHJcbiAgIFRhc2tzLnNwbGljZShpbmRleCwxKSAgO1xyXG4gICBkaXNwbGF5VGFza3MoKTtjb25zb2xlLmxvZygnZGVsJylcclxufVxyXG5mdW5jdGlvbiBkaXNwbGF5VGFza3MoKXsgXHJcbiAgXHJcbiAgdGFza0NvbnRhaW5lci5yZW1vdmUoKTsvL2NvbnRhaW5lciB0byBzdG9yZSB0YXNrcyBcclxuICB0YXNrQ29udGFpbmVyID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWluZXIuYXBwZW5kKHRhc2tDb250YWluZXIpOyBcclxuICBUYXNrcy5mb3JFYWNoKCh0YXNrKT0+eyBcclxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZCh0YXNrKTsgXHJcbiAgICAgIH0pOyBcclxuICAgICAgXHJcbn1cclxuXHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0Rm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsKCk9PiBvbkZvcm1TdWJtaXQoZXZlbnQpKTtcclxuXHJcbmZ1bmN0aW9uIGFkZEV2ZW50cygpeyBcclxuICBkZWxldEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGVcIik7Ly9hZGRpbmcgZXZlbnQgbGlzdGVuZXJzXHJcbiAgZm9yIChkZWxldGVJbWcgb2YgZGVsZXRJY29ucyl7XHJcbiAgICBkZWxldGVJbWcub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBkZWxldGVUYXNrKHRoaXMpO1xyXG4gICAgfSB9XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQnKS5mb3JFYWNoKCBwZW4gPT4gcGVuLm9uY2xpY2sgPSAoKT0+IGNvbnNvbGUubG9nKCdoZWxvJykpO1xyXG4gICBcclxuICBcclxuICB9XHJcblxyXG4vKmFkZGluZyBlZGl0IGxvZ2ljKi9cclxuXHJcbmFkZFRvRG8oKTthZGRUb0RvKCk7YWRkVG9EbygpO2FkZFRvRG8oKTtcclxuIFxyXG5jb25zb2xlLmxvZyggJ3NkZicpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9