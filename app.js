let gameseq=[];
let userseq=[];

let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(started==false){
        console.log("Game is started");
        started=true;
        levelup();
    }
});
function gameFlash(btn){
  btn.classList.add("flash");
  //we have to flash 
  setTimeout(function(){
   btn.classList.remove("flash");
  },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    //we have to flash 
    setTimeout(function(){
     btn.classList.remove("userFlash");
    },250);
  }
function levelup(){
    userseq=[];
   level++;
   //level ko update
   h2.innerText=`Level ${level}`;
   //before doing flash we have to choose randomly any button
  let randidx=Math.floor(Math.random() * 3);
  let randColor=btns[randidx];
  let randbtn=document.querySelector(`.${randColor}`);
  gameseq.push(randColor);
  console.log(gameseq);
   //button ko flash
   gameFlash(randbtn);
}
function checkAns(idx){
 // let idx=level-1; fixed index
  if(userseq[idx]==gameseq[idx]){
  if(userseq.length==gameseq.length){
    setTimeout(levelup,1000);
  }
    
  }else{
    h2.innerHTML=`Game Over! Your Score was <b>${level}</b> <br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function (){
        document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
  }
}
function btnpress () {
    console.log(this);
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
   btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}

