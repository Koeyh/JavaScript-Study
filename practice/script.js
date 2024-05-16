document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todoForm');
    const todoInput = document.getElementById('todoInput');
    const todoTable = document.getElementById('todoTable').querySelector('tbody');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const todoText = todoInput.value.trim();
        if (todoText) {
            addTodoItem(todoText);
            todoInput.value = '';
        }
    });

    function addTodoItem(text) {
        const tr = document.createElement('tr');

        const tdComplete = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            tr.classList.toggle('completed', checkbox.checked);
        });
        tdComplete.appendChild(checkbox);

        const tdText = document.createElement('td');
        tdText.textContent = text;

        const tdDelete = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '&times;';
        deleteBtn.addEventListener('click', () => {
            todoTable.removeChild(tr);
        });
        tdDelete.appendChild(deleteBtn);

        tr.appendChild(tdComplete);
        tr.appendChild(tdText);
        tr.appendChild(tdDelete);
        todoTable.appendChild(tr);
    }
});
