// タスクを追加するボタンを取得
const addButton = document.getElementById('addButton');
// タスクを入力するテキストボックスを取得
const taskInput = document.getElementById('taskInput');
// タスクを表示するリストを取得
const taskList = document.getElementById('taskList');

// ローカルストレージからタスクを取得する関数
function getTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        createTaskElement(task);
    });
}

// タスクを追加する関数
function addTask() {
    const taskText = taskInput.value;
    if (taskText === '') return;

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    createTaskElement(taskText);
    taskInput.value = '';
}

// タスクを表示するための要素を作成する関数
function createTaskElement(task) {
    const li = document.createElement('li');
    li.textContent = task;

    // 削除ボタンを追加
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    deleteButton.addEventListener('click', () => {
        deleteTask(task);
        li.remove();
    });
    li.appendChild(deleteButton);

    taskList.appendChild(li);
}

// タスクを削除する関数
function deleteTask(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const newTasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
}

// ページロード時にローカルストレージからタスクを取得
getTasksFromLocalStorage();

// ボタンをクリックしたときのイベントリスナー
addButton.addEventListener('click', addTask);