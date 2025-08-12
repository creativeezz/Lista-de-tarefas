document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const taskData = document.getElementById('taskData');
    const adicionarTarefa = document.getElementById('adicionarTarefa');
    const taskList = document.getElementById('taskList');
    const filtroInput = document.getElementById('botoesFiltro');

    function filtrarTarefas() {
        if (botoesFiltro.value === 'concluidas') {
            const tarefasConcluidas = document.querySelectorAll('.list-group-item-success');
        }
    };


    function criarItemTarefa(texto, data) {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center mb-3';
        li.id = 'taskItem';

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

        const inputConcluir = document.createElement('button');
        inputConcluir.className = 'btn btn-success';
        inputConcluir.innerHTML = '<i class="bi bi-check-lg"></i>';
        inputConcluir.title = 'Concluir';

        inputConcluir.onclick = function () {
            li.classList.toggle('list-group-item-success');
            span.classList.toggle('text-decoration-line-through');
            if (li.classList.contains('list-group-item-success')) {
                li.classList.add('anim-concluida');
                setTimeout(() => li.classList.remove('anim-concluida'), 500);
            }
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
        const data = taskData.value;
        if (texto) {
            const li = criarItemTarefa(texto, data);
            taskList.appendChild(li);
            taskInput.value = '';
            taskData.value = '';
            taskInput.focus();
        }
    });
});