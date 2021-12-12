
function cal(){
    let pr = document.getElementById("principal").value;
let ti = document.getElementById ("years").value;
let ra = document.getElementById ("rate").value;
let text= document.getElementById("result");

if(pr==0 && ti==0 && ra ==0){
    text.innerHTML="Try input number in the field"
}
else{  
    let si = (pr*ti*ra/100);
    let time;
    text.innerHTML =`If u deposit ${pr}, at an interest rate of ${ra}%. You will receive an amount of ${si},in the year ${time}`;
}
}
        