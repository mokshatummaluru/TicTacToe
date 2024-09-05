let boxes=document.querySelectorAll(".box");
let rstbtn=document.querySelector(".rt");
let newgamebtn=document.querySelector(".nt");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");

let turn=true;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
cnt='0';
boxes.forEach(boxx =>{
    boxx.onclick=function (){
            if(turn==true){
                boxx.innerText='X';
                turn=false;
                cnt++;
            }
            else{
                boxx.innerText='O';
                turn=true;
                cnt++;
            }
            boxx.disabled=true;
            checkwinners(cnt);
        }
        
});
const resetGame=()=>{
    cnt='0';
    turn=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, the winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const checkwinners=()=>{
    for(let pattern of winPatterns){
        let posVal1=boxes[pattern[0]].innerText;
        let posVal2=boxes[pattern[1]].innerText;
        let posVal3=boxes[pattern[2]].innerText;

        if(posVal1!="" && posVal2!="" && posVal3!=""){
            if(posVal1==posVal2 && posVal2==posVal3){
                showWinner(posVal1);
            }
        }
    }
    if(cnt=='9'){
        msgcontainer.classList.remove('hide');
        msg.innerText='DRAW';
    }
}
newgamebtn.addEventListener("click",resetGame);
rstbtn.addEventListener("click",resetGame);

