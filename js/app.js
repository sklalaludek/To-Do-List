document.addEventListener("DOMContentLoaded", function() {
    var addTaskButton = document.getElementById('addTaskButton');
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    var removeFinishedTasksButton = document.getElementById('removeFinishedTasksButton');
    var counter = 0;
    var taskCounter = document.createElement('span');
    taskCounter.style.cssText = 'display:block;width:100px;height:50px;margin:20px;';
    document.body.insertBefore(taskCounter, taskList);


    addTaskButton.addEventListener('click', function() {

        if (validateInput(taskInput.value) === false) {
            return;
        }
 
        var taskListLi = document.createElement('li');
        var taskListH1 = document.createElement('h1');
        var buttonDelete = document.createElement('button');
        var buttonComplete = document.createElement('button');
  
        taskList.appendChild(taskListLi);
        taskListLi.appendChild(taskListH1);
        taskListLi.appendChild(buttonDelete);
        taskListLi.appendChild(buttonComplete);

        counter++;
        taskCounter.innerText = 'Tasks to finish: ' + counter;

        taskListH1.innerHTML = taskInput.value;
        buttonDelete.innerHTML = 'Delete';
        buttonComplete.innerHTML = 'Complete';

        addCompleteClass(buttonComplete);
        removeListElement(buttonDelete, taskListLi);

        taskInput.value = ' ';
        taskInput.value = taskInput.defaultValue;

    });

   
    function addCompleteClass(button) {
        button.addEventListener('click', function() {
            this.parentElement.classList.toggle('done');
            return;
        })
    };
  
    function removeListElement(buttonDelete, taskListLi) {
        buttonDelete.addEventListener('click', function() {
            taskListLi.parentElement.removeChild(taskListLi);
            counter--;
            taskCounter.innerText = 'Tasks to finish: ' + counter;
        })
    };


    removeFinishedTasksButton.addEventListener('click', function() {
        var allElementsWithClassDone = taskList.querySelectorAll('.done');

        for (var i = 0; i < allElementsWithClassDone.length; i++) {
            allElementsWithClassDone[i].parentElement.removeChild(allElementsWithClassDone[i]);
            counter--;
            taskCounter.innerText = 'Tasks to finish: ' + counter;
        }
    });

  
    function validateInput(value) {
        if (value.length > 5 && value.length < 100) {
            return true;
        } else {
            return false;
        }
    };

});
