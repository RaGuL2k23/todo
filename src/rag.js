require('webpack-jquery-ui');
require('webpack-jquery-ui/css');

const hero = document.querySelector('.hero');/*getting for bluring purpose only*/
const container  = document.querySelector('.contentHolder');
console.log(container)
const taskBtn = document.querySelector('.taskbtn');

const taskDetailsDialog = document.getElementById('toDoTaskDetail');
console.log(taskDetailsDialog);

taskDetailsDialog.innerHTML=` 
  <form id="inputForm" method="" action=" " onsubmit="onFormSubmit(event);">
            <p>
              <label for="taskName">TASKNAME</label>
              <input type="text" >
            </p>
              <p><label for="due">DUE DATE</label>
              <input id = "due" type="datetime-local" min="">
            </p>
            <p>
              <label for="taskName">DESCRIPTION</label>
              <textarea rows=5 cols=4 id = "taskName"  " type="text " ></textarea>
            </p>
            <p>
              <label for="priority">PRIORITY</label>
              <select id="priority" value="option PRIORITY">
                <option name="PRIORITY" id="">LOW</option>
                <option name="PRIORITY" id="">MEDIUM</option>
                <option name="PRIORITY" id="">HIGH</option>
              </select>
            </p>
            <button type=submit class="submitBtn"  > SUBMIT</button>
            <button type=button class="exitBtn"> EXIT</button>
            </form>
          `
submitBtn = document.querySelector('.submitBtn');
exitBtn = document.querySelector('.exitBtn');
// submitBtn.addEventListener('click',)
exitBtn.addEventListener('click',()=>taskDetailsDialog.close() );
taskBtn.addEventListener('click',()=>{
     taskDetailsDialog.show();
    hero.classList.add('blur');
});

  