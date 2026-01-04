setInterval(()=>{
    const result=document.getElementById('result');
    const current=Date.now();
    const olympictime=new Date(2028,6,14).getTime();
    let timer=olympictime-current;

    const day=Math.floor((timer)/(1000*60*60*24));
    timer%=1000*60*60*24;
    const hour=Math.floor((timer)/(1000*60*60));
    timer%=1000*60*60;
    const minute=Math.floor((timer)/(1000*60));
    timer%=1000*60;
    const second=Math.floor((timer)/(1000));
    timer%=1000;
    result.textContent=`${day}:Day  ${hour}:Hour  ${minute}:Minutes  ${second}:Seconds`;
},1000)    
