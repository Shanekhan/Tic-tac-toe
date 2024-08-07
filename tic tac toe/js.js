console.log("Welcome to my tic tac toe game");
let music=new Audio("game.mp3")
let audioturn=new Audio("pop.mp3")
let gameOver=new Audio("gameover.mp3")
let turn="X"
let isGameOver=false;
// funtion to change the turn
const changeTurn= ()=>{
    return turn === "X"?"0":"X"
}
// function to check for a win
const CheckWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
let win =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
   win.forEach(e=>{
    if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=="")){
        document.querySelector('.Info').innerText = boxtext[e[0]].innerText +"Won"
        isGameOver=true
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px"
        document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        document.querySelector(".line").style.width = "20vw";}
      })}
// game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            music.play()
            audioturn.play();
            CheckWin();
            if(!isGameOver)
            document.getElementsByClassName("Info")[0].innerText="turn for" +turn;
        }
    })
})
// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    gameOver.play()
    isGameOver = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("Info")[0].innerText  = "Turn for" + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})

