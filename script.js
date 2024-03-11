console.log("welcome to tic tac toe")
let music=new Audio("music.mp3")
let turn1=new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3")
let turn="X"
//function to change turn
const changeTurn=()=>{
return turn==="X"?"0":"X"
}

//function to check win
const checkWin=()=>{

}

//game logic
let box=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext =document.querySelector('.boxtext')
})