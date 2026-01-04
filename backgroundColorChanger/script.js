const main=document.querySelector('main');
const button=document.querySelector('.button');

button.addEventListener('click',(e)=>{
    main.style.backgroundColor=e.target.textContent.toLowerCase();
})
// const btn1=document.getElementById('btn1');
// const btn2=document.getElementById('btn2');
// const btn3=document.getElementById('btn3');
// const btn4=document.getElementById('btn4');
// const btn5=document.getElementById('btn5');

// btn1.addEventListener('click',()=>{
//     main.style.backgroundColor="green";
// });
// btn2.addEventListener('click',()=>{
//     main.style.backgroundColor="red";
// });
// btn3.addEventListener('click',()=>{
//     main.style.backgroundColor="blue";
// });
// btn4.addEventListener('click',()=>{
//     main.style.backgroundColor="orange";
// });
// btn5.addEventListener('click',()=>{
//     main.style.backgroundColor="pink";
// });