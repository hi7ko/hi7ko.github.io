const input = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

// addButton.addEventListener('click', () => {
//     const todoText = input.value;
//     if (todoText !== '') {
//         const li = document.createElement('li');
//         li.textContent = todoText;
//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = '削除';
//         deleteButton.addEventListener('click', () => {
//             todoList.removeChild(li);
//         });
//         li.appendChild(deleteButton);
//         todoList.appendChild(li);
//         input.value = '';
//     }
// });

submit.addEventListener('click', (e) => {
    const item = {};

    item.todo = todo.value;
    item.priority = priority.value;
    item.deadline = deadline.value;
    item.done = false; // 完了はひとまずBoolean値で設定

    console.log(item);
})