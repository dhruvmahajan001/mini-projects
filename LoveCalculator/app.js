const form=document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const result=Math.floor(Math.random()*101);

    document.querySelector('h2').textContent=`Result:${result}❤️`;
    form.reset();
});