userScore=0;
compScore=0;
const user_click = document.querySelectorAll(".choice");
let userPara= document.querySelector("#user-score");
let compPara= document.querySelector("#comp-score");
let msg= document.querySelector("#msg");


// tracking the choice of user
user_click.forEach((val)=>{
    val.addEventListener("click",()=>{       
     user_choice = val.getAttribute("id");     
     playGame(user_choice); 
    });   
});

//generating and tracking the random choice of computer
function gen_comp_choice(){
const arr=["rock","paper","scissor"];
   let indx=Math.floor(Math.random()*3);
   return comp_choice=arr[indx];
}

// when game draws (arrow function)
const drawGame= ()=>{
    msg.innerText="game is drawn, play again";
    msg.style.backgroundColor="rgb(1, 2, 24)";
}

// comparing choices and playing game
function playGame(user_choice)
{
const comp_choice=gen_comp_choice();


if(user_choice===comp_choice){
    drawGame();
}
else{
    let userWin=true;
    if(user_choice===rock){      
        userWin= comp_choice==="paper"?false:true;   
    }
    else if(user_choice===paper){
        userWin= comp_choice==="scissor"?false:true;
    }
    else{
        userWin=comp_choice==="rock"?false:true;
    }
showWinner(userWin,comp_choice,user_choice);
} 
}

// updating the score board
const showWinner=(userWin,comp_choice,user_choice)=>{
if(userWin){  
    userScore++;
    userPara.innerText=userScore;
    msg.innerText= `you win! , ${user_choice} beats ${comp_choice}`;
    msg.style.backgroundColor="green";
    
}
else {
    compScore++;
    compPara.innerText=compScore;
    msg.innerText= `you lose , ${comp_choice} beats ${user_choice}`;
    
    msg.style.backgroundColor="red";
}
}