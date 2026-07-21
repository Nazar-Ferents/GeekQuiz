import {app} from "../app.js";
import {score,increaseScore} from "../data/state.js";
import {renderResults} from "./results.js";


export function renderQuiz(universe,index){


    app.innerHTML = ""

    let currentQuestionIndex = index;


    const h1 = document.createElement("h1");
    h1.classList.add("quiz-title");
    h1.textContent = `${universe.title} Quiz`;
    const questionWrapper = document.createElement("div");
    questionWrapper.classList.add("questionWrapper");
    const answerWrapper = document.createElement("div");
    answerWrapper.classList.add("answerWrapper");

    let currentQuestion = universe.questions[currentQuestionIndex]



    let h2 = document.createElement("h2");
    h2.classList.add("question");
    h2.textContent = currentQuestion.questionTitle;

    for (let i = 0; i < currentQuestion.answers.length; i++){

        let answer = currentQuestion.answers[i];

        let answerElement = document.createElement("p");
        answerElement.innerText = answer;
        answerElement.addEventListener("click", (ev)=>{
            ev.preventDefault();

            if(i === currentQuestion.correct ){
                increaseScore()

            }
            if (currentQuestionIndex+1 < universe.questions.length){
                currentQuestionIndex++;

                renderQuiz(universe,currentQuestionIndex);
            }
            else{
                renderResults(score,universe)
            }

        })

        answerWrapper.appendChild(answerElement);
        questionWrapper.append(h2,answerWrapper)
    }
    app.append(h1,questionWrapper)


}