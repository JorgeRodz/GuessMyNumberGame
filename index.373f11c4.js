"use strict";var body=document.querySelector("body"),btnAgain=document.querySelector(".again"),divDisplayNumber=document.querySelector(".number"),inputGuess=document.querySelector(".guess"),btnCheck=document.querySelector(".check"),lblMsg=document.querySelector(".message"),spanScore=document.querySelector(".score"),spanHighscore=document.querySelector(".highscore"),highscore=0,nGuess=0,lowLimitNumber=0,hightLimitNumber=50,score=hightLimitNumber,secretNumber=getRandomIntInclusive(lowLimitNumber,hightLimitNumber);function getRandomIntInclusive(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1)+e)}spanScore.textContent=score,console.log(secretNumber);var displayScore=function(){if(score--,spanScore.textContent=score,score<=0)return lblMsg.textContent="You lost the game 💥",lblMsg.style.backgroundColor="#fff",lblMsg.style.color="black",void(body.style.backgroundColor="#c40000")},checkIfWin=function(){if(nGuess=""===inputGuess.value||+inputGuess.value,console.log(nGuess),!0!==nGuess)if(nGuess<lowLimitNumber||nGuess>hightLimitNumber)lblMsg.textContent="Type a number above ".concat(lowLimitNumber," and below ").concat(hightLimitNumber);else{if(nGuess===secretNumber)return lblMsg.textContent="Correct! you won!🎉",lblMsg.style.backgroundColor="#fff",lblMsg.style.color="black",body.style.backgroundColor="#087829",divDisplayNumber.style.width="30rem",divDisplayNumber.textContent=secretNumber,inputGuess.disabled=!0,btnCheck.disabled=!0,void(score>highscore&&(highscore=score,spanHighscore.textContent=highscore));nGuess>secretNumber&&(lblMsg.textContent="📈 Too high!",displayScore()),nGuess<secretNumber&&(lblMsg.textContent="📉 Too low!",displayScore())}else lblMsg.textContent="!Type a number 🤓¡"},resetElements=function(){secretNumber=getRandomIntInclusive(lowLimitNumber,hightLimitNumber),score=hightLimitNumber,body.style.backgroundColor="#222",divDisplayNumber.style.width="15rem",divDisplayNumber.textContent="?",lblMsg.textContent="Start guessing...",lblMsg.style.backgroundColor="#222",lblMsg.style.color="#7ecaff",spanScore.textContent=score,inputGuess.value="",inputGuess.disabled=!1,btnCheck.disabled=!1};btnCheck.addEventListener("click",checkIfWin),btnAgain.addEventListener("click",resetElements);
//# sourceMappingURL=index.373f11c4.js.map