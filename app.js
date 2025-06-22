let gameSeq = [];
let userseq = [];
let btns = ["red","green","blue","yellow"];
let started = false;
let level = 0 ; 

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
     if ( started == false ) {
        console.log("game is started");
        started = true;

        levelup();
     }
});

 function gameflash(btn) {
    if (!btn) return;
    btn.classList.add("flash");
    setTimeout(() => btn.classList.remove("flash"), 250);
}


function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    },300);

}

function levelup() { 
    userseq = []; 
    level ++;
    h2.innerText = `level ${level}` ;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
     gameSeq.push(randColor);
     console.log(gameSeq);
    gameflash(randBtn);

}

function checkAns(idx){
   // console.log("curr level: ", level);;
   
   if (userseq[idx] === gameSeq[idx]){
     if (userseq.length === gameSeq.length){
        setTimeout(levelup,1000);

     }

    console.log("same Value");
   }  else{ 
    h2.innerHTML = `💥 Game over! Your Score was <b>${level}</b> <br> Press any key to start again 🔄  `;
    document.querySelector("body").style.backgroundColor= "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor= "white";
    },200);
    reset();
   }
}

function btnPress() {
    console.log(this)
      let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns ) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    started =  false ;
    gameSeq = [];
    userseq = [];
    level = 0 ;
}