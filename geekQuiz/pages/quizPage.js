import {app} from "../app.js";
import {score,increaseScore} from "../data/state.js";
import {renderResults} from "./resultsPage.js";


export function renderQuiz(universe,index){


    app.innerHTML = ""

    let currentQuestionIndex = index;

    let answered = false;

    const quizWrapper = document.createElement("div");
    quizWrapper.classList.add("quizWrapper");

    const h1 = document.createElement("h1");
    h1.classList.add("quiz-title");
    h1.textContent = `${universe.title} Quiz`;

    const questionWrapper = document.createElement("div");
    questionWrapper.classList.add("questionWrapper");

    const answerWrapper = document.createElement("div");
    answerWrapper.classList.add("answerWrapper");

    const currentQuestion = universe.questions[currentQuestionIndex]

    const img = document.createElement("img");
    img.classList.add("quizImg");
    img.src = currentQuestion.image



    const h2 = document.createElement("h2");
    h2.classList.add("question");
    h2.textContent = currentQuestion.questionTitle;

    const progressDiv = document.createElement("div");
    progressDiv.classList.add("progressDiv");
    const progressBar = document.createElement("div");
    progressBar.classList.add("progressBar");
    const progressFill = document.createElement("div");
    progressFill.classList.add("progressFill");
    const progressTracker = document.createElement("p");
    progressTracker.classList.add("progress");
    progressTracker.textContent = `${currentQuestionIndex+1}/${universe.questions.length}`
    const progressPercent = ((currentQuestionIndex+1)/ universe.questions.length) * 100;
    progressFill.style.width = `${progressPercent}%`;
    progressBar.appendChild(progressFill);
    progressDiv.append(progressBar,progressTracker);

    let answerElements = []


    for (let i = 0; i < currentQuestion.answers.length; i++){

        const answer = currentQuestion.answers[i];

        let answerElement = document.createElement("p");
        answerElement.textContent = answer;
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


            answerElements.forEach(answer => {
                answer.classList.add("disabled");
            })



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

    }
    questionWrapper.append(h2,answerWrapper)
    quizWrapper.append(h1,progressDiv,img,questionWrapper)
    app.appendChild(quizWrapper)


}