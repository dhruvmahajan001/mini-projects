const form=document.querySelector('form');
const answer={
    q1:"Sachin Tendulkar",
    q2:"West Indies",
    q3:"Sachin Tendulkar",
    q4:"264",
    q5:"Muttiah Muralitharan"
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const data =new FormData(form);
    let finalscore=0;

    for (let [name,value] of data.entries()){
        if(answer[name]==value)
            finalscore++;
    }

    document.getElementById('out').textContent=`Your Score is ${finalscore}/5`;
    form.reset();
});