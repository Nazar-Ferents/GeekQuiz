import {app} from "../app.js";
import {score,increaseScore} from "../data/state.js";
import {renderResults} from "./resultsPage.js";


export function renderQuiz(universe,index){


    app.innerHTML = ""

    let currentQuestionIndex = index;

    let answered = false;


    const h1 = document.createElement("h1");
    h1.classList.add("quiz-title");
    h1.textContent = `${universe.title} Quiz`;
    const questionWrapper = document.createElement("div");
    questionWrapper.classList.add("questionWrapper");
    const answerWrapper = document.createElement("div");
    answerWrapper.classList.add("answerWrapper");

    let currentQuestion = universe.questions[currentQuestionIndex]

    const img = document.createElement("img");
    img.classList.add("quizImg");
    img.src = currentQuestion.image



    let h2 = document.createElement("h2");
    h2.classList.add("question");
    h2.textContent = currentQuestion.questionTitle;

    let progressTracker = document.createElement("p");
    progressTracker.classList.add("progress");
    progressTracker.textContent = `${currentQuestionIndex+1}/${universe.questions.length}`

    let answerElements = []

    for (let i = 0; i < currentQuestion.answers.length; i++){

        let answer = currentQuestion.answers[i];

        let answerElement = document.createElement("p");
        answerElement.innerText = answer;
        answerElement.classList.add("answer");
        answerElements.push(answerElement);
        answerElement.addEventListener("click", (ev)=>{

            if (answered){
                return
            }
                ev.preventDefault();


                answerElements[currentQuestion.correct].classList.add("correct");

                if (i !== currentQuestion.correct){
                    answerElement.classList.add("wrong");
                }
                else {
                    increaseScore()
                }

                answered = true;



                    setTimeout(()=>{
                        if (currentQuestionIndex+1 < universe.questions.length){
                            currentQuestionIndex++;

                            renderQuiz(universe,currentQuestionIndex);
                        }
                        else{
                            renderResults(score,universe)
                        }
                    },1000)






        })

        answerWrapper.appendChild(answerElement);
        questionWrapper.append(h2,progressTracker,answerWrapper)
    }
    app.append(h1,img,questionWrapper)


}