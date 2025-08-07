console.log('JavaScript carregado!');

document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskData');
    const adicionarTarefa = document.getElementById('adicionarTarefa');
    const taskList = document.getElementById('taskList');

    function criarItemTarefa(texto, data) {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';

        const span = document.createElement('span');
        span.textContent = texto;

        if (data) {
            const small = document.createElement('small');
            small.className = 'text-muted ms-2';
            small.textContent = `(${data.split('-').reverse().join('/')})`;
            span.appendChild(small);
        }

        const btnGroup = document.createElement('div');
        btnGroup.className = 'btn-group btn-group-sm';

        const inputConcluir = document.createElement('input');
        inputConcluir.type = 'checkbox';
        inputConcluir.className = 'form-check-input me-1';
        inputConcluir.title = 'Concluir';
        inputConcluir.onclick = function () {
            li.classList.toggle('list-group-item-success');
            span.classList.toggle('text-decoration-line-through');
        };

        const btnRemover = document.createElement('button');
        btnRemover.className = 'btn btn-danger';
        btnRemover.innerHTML = '<i class="bi bi-trash"></i>';
        btnRemover.title = 'Remover';
        btnRemover.onclick = function () {
            li.remove();
        };

        btnGroup.appendChild(inputConcluir);
        btnGroup.appendChild(btnRemover);

        li.appendChild(span);
        li.appendChild(btnGroup);

        return li;
    }

    adicionarTarefa.addEventListener('click', function () {
        const texto = taskInput.value.trim();
        const data = taskDate.value;
        if (texto) {
            const li = criarItemTarefa(texto, data);
            taskList.appendChild(li);
            taskInput.value = '';
            taskDate.value = '';
            taskInput.focus();
        }
    });

    taskInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            adicionarTarefa.click();
        }
    });
});