const toDo = document.querySelector("#toDo");
const backLog = document.querySelector("#backlog");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
const newTaskBtn = document.querySelector(".footer button");
const tasks = document.querySelectorAll(".task");
const newTaskModal = document.querySelector(".add-task-page");
const newTaskForm = document.querySelector(".add-task-page form");
const backBtn = document.querySelector(".add-task-page .back-btn");
const inputTask = document.querySelector(".add-task-page form input ");
const taskDetail = document.querySelector(".add-task-page form textarea ");
const formBtn = document.querySelector(".add-task-page form button");
const deletBtn = document.querySelector(".card .task button");

let draggedItem = null;
let toDoArr = [];
let backLogArr = [];
let progressArr = [];
let doneArr = [];

const saveToArray = (col) => {
  if (col === toDo) {
  }
};

const saveTaskToLocalStorage = (arrr, key) => {
  const actualData = JSON.stringify(arrr);
  localStorage.setItem(key, actualData);
};

const dragEventsOnColumn = (col) => {
  col.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  col.addEventListener("drop", (e) => {
    e.preventDefault();

    if (draggedItem) {
      const parentCol = draggedItem.parentElement;

      if (parentCol !== col) {
        const title = draggedItem.querySelector("h5").textContent;
        const info = draggedItem.querySelector("p").textContent;
        const taskData = { taskTitle: title, taskInfo: info };

        // Remove from source array
        if (parentCol === toDo) {
          toDoArr = toDoArr.filter(
            (task) => task.taskTitle !== title || task.taskInfo !== info
          );
          saveTaskToLocalStorage(toDoArr, "toDo");
        } else if (parentCol === backLog) {
          backLogArr = backLogArr.filter(
            (task) => task.taskTitle !== title || task.taskInfo !== info
          );
          saveTaskToLocalStorage(backLogArr, "backLog");
        } else if (parentCol === progress) {
          progressArr = progressArr.filter(
            (task) => task.taskTitle !== title || task.taskInfo !== info
          );
          saveTaskToLocalStorage(progressArr, "progress");
        } else if (parentCol === done) {
          doneArr = doneArr.filter(
            (task) => task.taskTitle !== title || task.taskInfo !== info
          );
          saveTaskToLocalStorage(doneArr, "done");
        }

        // Add to destination array
        if (col === toDo) {
          toDoArr.push(taskData);
          saveTaskToLocalStorage(toDoArr, "toDo");
        } else if (col === backLog) {
          backLogArr.push(taskData);
          saveTaskToLocalStorage(backLogArr, "backLog");
        } else if (col === progress) {
          progressArr.push(taskData);
          saveTaskToLocalStorage(progressArr, "progress");
        } else if (col === done) {
          doneArr.push(taskData);
          saveTaskToLocalStorage(doneArr, "done");
        }
      }
    }

    col.appendChild(draggedItem);
    countTasks();
  });
};

// Function to add drag listeners to a task element
const addDragListeners = (taskElement) => {
  taskElement.addEventListener("dragstart", () => {
    draggedItem = taskElement;
  });
};

// Function to add delete listener to a task element
const addDeleteListener = (taskElement) => {
  const deleteBtn = taskElement.querySelector("button");
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent event bubbling

    const taskDiv = e.currentTarget.parentElement;
    const parentCol = taskDiv.parentElement;
    const title = taskDiv.querySelector("h5").textContent;
    const info = taskDiv.querySelector("p").textContent;

    // Remove from appropriate array based on parent column
    if (parentCol === toDo) {
      toDoArr = toDoArr.filter(
        (task) => task.taskTitle !== title || task.taskInfo !== info
      );
      saveTaskToLocalStorage(toDoArr, "toDo");
    } else if (parentCol === backLog) {
      backLogArr = backLogArr.filter(
        (task) => task.taskTitle !== title || task.taskInfo !== info
      );
      saveTaskToLocalStorage(backLogArr, "backLog");
    } else if (parentCol === progress) {
      progressArr = progressArr.filter(
        (task) => task.taskTitle !== title || task.taskInfo !== info
      );
      saveTaskToLocalStorage(progressArr, "progress");
    } else if (parentCol === done) {
      doneArr = doneArr.filter(
        (task) => task.taskTitle !== title || task.taskInfo !== info
      );
      saveTaskToLocalStorage(doneArr, "done");
    }

    // Remove task from DOM
    taskDiv.remove();
    countTasks();
  });
};

const makeToDoTask = (a, b) => {
  let div = document.createElement("div");
  div.draggable = true;
  div.classList.add("task");
  div.innerHTML = `
            <h5>${a}</h5>
            <p>${b}</p>
            <button>Delete</button>
  `;
  addDragListeners(div);
  addDeleteListener(div);
  toDo.appendChild(div);
  countTasks();
};

const countTasks = () => {
  [toDo, backLog, progress, done].forEach((col) => {
    let numOfTask = col.querySelectorAll(".task");
    let count = col.querySelector(".card-header p");
    count.textContent = numOfTask.length;
  });
};

const makeTaskCard = (col) => {
  if (col === "toDo") {
    toDoArr.forEach((task) => {
      let div = document.createElement("div");
      div.innerHTML = `
            <h5>${task.taskTitle}</h5>
            <p>${task.taskInfo}</p>
            <button>Delete</button>
            `;
      div.draggable = true;
      div.classList.add("task");
      addDragListeners(div);
      addDeleteListener(div);
      toDo.appendChild(div);
    });
  } else if (col === "backLog") {
    backLogArr.forEach((task) => {
      let div = document.createElement("div");
      div.innerHTML = `
            <h5>${task.taskTitle}</h5>
            <p>${task.taskInfo}</p>
            <button>Delete</button>
            `;
      div.draggable = true;
      div.classList.add("task");
      addDragListeners(div);
      addDeleteListener(div);
      backLog.appendChild(div);
    });
  } else if (col === "progress") {
    progressArr.forEach((task) => {
      let div = document.createElement("div");
      div.innerHTML = `
            <h5>${task.taskTitle}</h5>
            <p>${task.taskInfo}</p>
            <button>Delete</button>
            `;
      div.draggable = true;
      div.classList.add("task");
      addDragListeners(div);
      addDeleteListener(div);
      progress.appendChild(div);
    });
  } else {
    doneArr.forEach((task) => {
      let div = document.createElement("div");
      div.innerHTML = `
            <h5>${task.taskTitle}</h5>
            <p>${task.taskInfo}</p>
            <button>Delete</button>
            `;
      div.draggable = true;
      div.classList.add("task");
      addDragListeners(div);
      addDeleteListener(div);
      done.appendChild(div);
    });
  }
};

const getLocalData = () => {
  const toDoData = localStorage.getItem("toDo");
  if (toDoData) {
    toDoArr = JSON.parse(toDoData);
    makeTaskCard("toDo");
  }
  const backLogData = localStorage.getItem("backLog");
  if (backLogData) {
    backLogArr = JSON.parse(localStorage.getItem("backLog"));
    makeTaskCard("backLog");
  }

  const doneTaskData = localStorage.getItem("done");
  if (doneTaskData) {
    doneArr = JSON.parse(localStorage.getItem("done"));
    makeTaskCard("done");
  }

  const inProgressTask = localStorage.getItem("progress");
  if (inProgressTask) {
    progressArr = JSON.parse(inProgressTask);
    makeTaskCard("progress");
  }
};

const deleteTask = () => {};

getLocalData();
countTasks();

// Add drag listeners to initial tasks in HTML
tasks.forEach((task) => {
  addDragListeners(task);
});

dragEventsOnColumn(toDo);
dragEventsOnColumn(backLog);
dragEventsOnColumn(progress);
dragEventsOnColumn(done);

newTaskBtn.addEventListener("click", () => {
  newTaskModal.classList.add("hidden");
});

newTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

formBtn.addEventListener("click", () => {
  let taskTitle = inputTask.value;
  let taskInfo = taskDetail.value;
  toDoArr.push({ taskTitle, taskInfo });
  saveTaskToLocalStorage(toDoArr, "toDo");
  makeToDoTask(taskTitle, taskInfo);
  inputTask.value = "";
  taskDetail.value = "";
  newTaskModal.classList.remove("hidden");
});

backBtn.addEventListener("click", () => {
  newTaskModal.classList.remove("hidden");
});
