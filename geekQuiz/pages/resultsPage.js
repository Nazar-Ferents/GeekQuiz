import {renderQuiz} from "./quizPage.js";
import {renderWelcome} from "./welcomePage.js";
import {renderUniverses} from "./universesPage.js";
import {app} from "../app.js";
import {resetScore} from "../data/state.js";

export function renderResults (scoreResult,universe){
    app.innerHTML = ""
    const level = universe.knowledgeLevel
    const buttonWrapper = document.createElement("div");
    buttonWrapper.classList.add("buttonWrapper");

    const h1 = document.createElement("h1");
    h1.classList.add("universe-title");
    h1.textContent = `${universe.title}`;

    const counting = document.createElement("p");
    counting.classList.add("counting");
    counting.textContent = `${scoreResult}/${universe.questions.length}`;

    const result = (scoreResult * 100)/universe.questions.length;
    console.log(result);
    const resultElement = document.createElement("p");
    resultElement.classList.add("result");
    resultElement.innerText = `${result} %`;
    const message = document.createElement("p");
    message.classList.add("message");
    if (result >= 90 ){
        message.textContent = level.legend
    }
    else if (result >= 80 && result < 90 ){
        message.textContent = level.perfect
    }
    else if (result >= 50 && result < 80 ){
        message.textContent = level.good
    }
    else if (result >= 20 && result < 50 ){
        message.textContent = level.bad
    }
    else if (result <= 19){
        message.textContent = level.noob
    }

    const playAgainButton = document.createElement("button");
    playAgainButton.classList.add("resultPageButton");
    playAgainButton.textContent = 'Грати Знову'
    playAgainButton.addEventListener("click", ()=>{
        resetScore();
        renderQuiz(universe,0)
    })
    const homePageButton = document.createElement("button");
    homePageButton.classList.add("resultPageButton");
    homePageButton.textContent = 'Домашня Сторінка'
    homePageButton.addEventListener("click", ()=>{
        renderWelcome()
    })
    const chooseAnotherButton = document.createElement("button");
    chooseAnotherButton.classList.add("resultPageButton");
    chooseAnotherButton.textContent = 'Вибрати інший всесвіт'
    chooseAnotherButton.addEventListener("click", ()=>{
        renderUniverses()
    })

    buttonWrapper.append(playAgainButton,homePageButton,chooseAnotherButton)
    app.append(h1,counting,resultElement,message,buttonWrapper)

}