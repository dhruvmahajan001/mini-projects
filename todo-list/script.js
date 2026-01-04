const form=document.querySelector('form');
const alltask=document.querySelector('#alltask');
const input=document.querySelector('input');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const text=input.value.trim();

    if(text=="")
        return;

    const parent=document.createElement('div');

    const task=document.createElement('span');
    task.textContent=text;

    const doneButton=document.createElement('button');
    doneButton.textContent="Done";
    doneButton.style.marginRight="10px";
    doneButton.style.width="50px"

    const deleteButton=document.createElement('button');
    deleteButton.textContent="Delete";
    deleteButton.style.width="50px";
    parent.append(task, doneButton, deleteButton);
    alltask.append(parent);

    deleteButton.addEventListener('click',()=>{
        parent.remove();
    })

    doneButton.addEventListener('click',()=>{
        task.style.textDecoration='line-through';
        task.style.color='grey';
    })

    form.reset();
})