console.log("Welcome To Tic Tac Toe")
//Selecting Audios
let music=new Audio("/TicTacToe/audios/chill-lofi-song-8444.mp3")
let turnsound=new Audio("/TicTacToe/audios/mech-keyboard-02-102918.mp3")
let gameover=new Audio("/TicTacToe/audios/Game Over.mp3")
let isgameover=false;
// Changing turn function
let turn="X"
const changeTurn= ()=>{
    return turn === "X"?"O":"X"
}
 
//Check win function
const checkWin=()=>{
    music.play()
    let boxtext=document.getElementsByClassName('boxtext');
let wins=[
    [0,1,2,0,5,0],
    [3,4,5,0,15,0],
    [6,7,8,0,25,0],
    [0,3,6,-10,15,90],
    [1,4,7,0,15,90],
    [2,5,8,10,15,90],
    [0,4,8,0,15,45],
    [2,4,6,0,15,135],
]
wins.forEach(e=>{
if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
    document.querySelector('.info').innerText=boxtext[e[0]].innerText+ " Won"
    isgameover=true
    document.querySelector(".line").style.width="30vw"
    document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
}
})
}

//Game logic
let boxes=document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
           turn= changeTurn();
            turnsound.play();
            checkWin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText='Turn for '+turn;
            }
        }
    })
})
reset.addEventListener('click',()=>{
    let boxtext1=document.querySelectorAll('.boxtext');
    Array.from(boxtext1).forEach(element=>{
        element.innerText=""
    });
    turn="X";
    isgameover=false
    document.getElementsByClassName("info")[0].innerText='Turn for '+turn;
    document.querySelector(".line").style.width="0vw"

})