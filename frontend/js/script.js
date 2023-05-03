const tbody = document.querySelector('tbody');

const fetchTasks = async () => {

    const response = await fetch('http://localhost:3333/tasks');

    const tasks = await response.json();

    return tasks;
};

const createElement = (tag, innerText = '', innerHTML = '') => {

    const element = document.createElement(tag);

    if ( innerText ) {
        element.innerText = innerText;
    }

    if ( innerHTML ) {
        element.innerHTML = innerHTML;
    }

    return element;
};

const createSelect = (value) => {
    
    const options = '<option value="pendente">Pendente</option><option value="em andamento">Em Andamento</option><option value="concluida">Concluída</option>';

    const select = createElement('select', '', options);

    select.value = value;

    return select;
};

const createRow = (task) => {

    const { id, title, created_at, status } = task;

    const tr = createElement('tr');
    const tdTitle = createElement('td', title);
    const tdCreatedAt = createElement('td', created_at);
    const tdStatus = createElement('td');
    const tdActions = createElement('td');

    const select = createSelect(status);

    const editButton = createElement('button', '', '<span class="material-symbols-outlined">edit</span>');
    const deleteButton = createElement('button', '', '<span class="material-symbols-outlined">delete</span>');

    editButton.classList.add('btn-action');
    deleteButton.classList.add('btn-action');

    tdActions.appendChild(editButton);
    tdActions.appendChild(deleteButton);

    tdStatus.appendChild(select);

    tr.appendChild(tdTitle);
    tr.appendChild(tdCreatedAt);
    tr.appendChild(tdStatus);
    tr.appendChild(tdActions);

    return tr;

};