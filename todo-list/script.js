const form = document.querySelector('form');
const alltask = document.querySelector('#alltask');
const input = document.querySelector('#task');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = input.value.trim();
    if (text === "") return;

    const parent = document.createElement('div');

    const task = document.createElement('span');
    task.textContent = text;

    const doneButton = document.createElement('button');
    doneButton.textContent = "Done";

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";

    parent.append(task, doneButton, deleteButton);
    alltask.append(parent);

    doneButton.addEventListener('click', () => {
        task.classList.toggle('completed');
    });

    deleteButton.addEventListener('click', () => {
        parent.remove();
    });

    form.reset();
});
