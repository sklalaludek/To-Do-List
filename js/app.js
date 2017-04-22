document.addEventListener("DOMContentLoaded", function() {
    var addTaskButton = document.getElementById('addTaskButton');
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    var removeFinishedTasksButton = document.getElementById('removeFinishedTasksButton');
    var counter = 0;
    var taskCounter = document.getElementById('taskCounter');


    addTaskButton.addEventListener('click', function() {
        this.classList.add('adding');

        if (validateInput(taskInput.value) === false) {
            return console.log('min 5 letters');
        }

        var taskListLi = document.createElement('li');
        var taskListH2 = document.createElement('h2');
        var buttonDelete = document.createElement('button');
        var buttonComplete = document.createElement('button');

        taskList.appendChild(taskListLi);
        taskListLi.appendChild(taskListH2);
        taskListLi.appendChild(buttonDelete);
        taskListLi.appendChild(buttonComplete);

        counter++;
        taskCounter.innerText = counter;

        taskListH2.innerHTML = taskInput.value;
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
        });
    }

    function removeListElement(buttonDelete, taskListLi) {
        buttonDelete.addEventListener('click', function() {
            taskListLi.parentElement.removeChild(taskListLi);
            counter--;
            taskCounter.innerText = counter;
        });
    }


    removeFinishedTasksButton.addEventListener('click', function() {
        var allElementsWithClassDone = taskList.querySelectorAll('.done');

        for (var i = 0; i < allElementsWithClassDone.length; i++) {
            allElementsWithClassDone[i].parentElement.removeChild(allElementsWithClassDone[i]);
            counter--;
            taskCounter.innerText =  counter;
        }
    });


    function validateInput(value) {
        if (value.length > 5 && value.length < 100) {
            return true;
        } else {
            return false;
        }
    }

    /*add animation*/
    addTaskButton.addEventListener('transitionend', removeTransition);
    function removeTransition(event){
        if (event.propertyName == 'transform') {
            this.classList.remove('adding');
        } else {
            return;
        }
    }



});
