const body=document.querySelector('body');

body.addEventListener('click',(e)=>{

    const circleElement=document.createElement('div');
    circleElement.classList.add('circle');

    const color=['red','blue','green','orange','pink','purple'];
    circleElement.style.backgroundColor=color[Math.floor(Math.random()*6)];

    circleElement.style.top=`${e.clientY-25}px`;
    circleElement.style.left=`${e.clientX-25}px`;
    circleElement.textContent=`Hi`;

    body.append(circleElement);

    setTimeout(()=>{
        circleElement.remove();
    },3000);
});