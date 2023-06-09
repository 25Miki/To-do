function saveTask() {
    // Obtener el texto ingresado en el campo de entrada
    var taskInput = document.getElementById("task");
    var taskText = taskInput.value;
  
    if (taskText.trim() !== "") {
      // Crear un nuevo elemento li
      var listItem = document.createElement("li");
  
      // Crear un nodo de texto con el contenido del campo de entrada
      var taskTextNode = document.createTextNode(taskText);
  
      // Agregar el nodo de texto al elemento li
      listItem.appendChild(taskTextNode);
  
      // Agregar evento onclick al elemento li
      listItem.onclick = function() {
        showButtons(this);
      };
  
      // Crear botones "Move Here"
      var moveButton = document.createElement("button");
      moveButton.className = "move-button move-button1";
      var moveButtonText = document.createTextNode("Done!");
      moveButton.appendChild(moveButtonText);
  
      var moveButton2 = document.createElement("button");
      moveButton2.className = "move-button move-button2";
      var moveButtonText2 = document.createTextNode("Ongoing");
      moveButton2.appendChild(moveButtonText2);
  
      // Agregar evento onclick a los botones
      moveButton.onclick = function() {
        moveTask(listItem);
      };
  
      moveButton2.onclick = function() {
        moveTask2(listItem);
      };
  
      // Agregar los botones al elemento li
      listItem.appendChild(moveButton);
      listItem.appendChild(moveButton2);
  
      // Agregar el elemento li a la lista con el identificador "active"
      var activeList = document.getElementById("active");
      activeList.appendChild(listItem);
  
      // Limpiar el campo de entrada
      taskInput.value = "";
    }
  }
  
  function moveTask(listItem) {
    var doneList = document.getElementById("done");
    doneList.appendChild(listItem);
  
    var buttons = listItem.querySelectorAll(".move-button");
    buttons.forEach(function(button) {
      button.parentNode.removeChild(button);
    });
  }
  
  function moveTask2(listItem) {
    var OGList = document.getElementById("ongoing");
    OGList.appendChild(listItem);
  
    var removeButton2 = listItem.querySelector(".move-button2");
    removeButton2.remove();
  }
  
  function eraseDone() {
    var ul = document.getElementById("done");
  
    if (ul) {
      var li = ul.querySelector("li");
      if (li) {
        ul.removeChild(li);
      }
    }
  }
  
  function showButtons(listItem) {
    var buttons = listItem.querySelectorAll(".move-button");
  
    buttons.forEach(function(button) {
      if (button.style.display === "none") {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    });
  }
  