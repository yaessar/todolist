document.addEventListener('DOMContentLoaded', function() {
  // Code placed here will run when the DOM content has loaded.
  var todoList = document.getElementById('todo-list');
  var todoInput = document.getElementById('todo-input');
  var addButton = document.getElementById('add-button');
  var todoCount = 0;
  
  
  var addTodo = function() {
    var todoCol = document.createElement('div');
    todoCol.setAttribute('class', 'col-xs-12 todo');
  
    
    var todoRow = document.createElement('div');
    todoRow.setAttribute('class', 'row');
  
    var removeButton = document.createElement('button');
    removeButton.setAttribute('class','btn btn-danger remove-button');
    removeButton.innerHTML = "REMOVE";
  
    removeButton.onclick = function() {
      var child = this.parentNode.parentNode;
      todoList.removeChild(child);
    };
  
    var h5 = document.createElement('h5');
    h5.setAttribute('class', 'col-xs-8');
    h5.innerHTML = todoInput.value;
  
    todoRow.appendChild(h5);
    todoRow.appendChild(removeButton);
    todoCol.appendChild(todoRow);
    todoList.appendChild(todoCol);
  };
  

  var checkThenAddTodo = function () {
  
    if (todoCount < 10 && todoInput.value !== '') {
      addTodo();
      todoCount++;
      todoInput.value = '';
    }
  }
  
  addButton.addEventListener('click', checkThenAddTodo);
  
  todoInput.addEventListener('keyup', function (event) {
    if (event.key === "Enter") {
      checkThenAddTodo();
    }
  });
});