let num=document.querySelector(".num");
let rbox=document.querySelector(".res");
let comp=Math.floor(Math.random()*100)+1;
num.addEventListener("input",function(){
    let user=Number(num.value);
    if(user===comp) {
        rbox.innerText=`${user} is equal ${comp}`;
        rbox.style.color="green";
    }
    else if(user<comp) {
        rbox.innerText=`Too Low`;
        rbox.style.color="red";
    }
    else {
        rbox.innerText=`Too high`;
        rbox.style.color="red";
    }


})
