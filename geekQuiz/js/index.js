
import {universes} from "../data/universes.js";
const app = document.getElementById("app");

function renderWelcome(){

    app.innerHTML = ""

    let h1 = document.createElement("h1");
    h1.classList.add("greeting");
    h1.innerText = 'Ласкаво просимо в GeekQuiz'

    let button = document.createElement("button");
    button.classList.add("start-button");
    button.innerText = 'Почнімо?'

    button.addEventListener("click", ()=>{
        renderUniverses();
    })

    app.append(h1,button)
}
renderWelcome()

function renderUniverses (){

    app.innerHTML = ""

    const h1 = document.createElement("h1");
    h1.classList.add("choose-title");
    h1.textContent = 'Вибери Всесвіт'

    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    for (let universe of universes){
        let div = document.createElement("div");
        div.classList.add("universe");
        div.textContent = universe.title;

        div.addEventListener("click", ()=>{
            score=0
            renderQuiz(universe,0);
        })
        wrapper.appendChild(div);
    }

    app.append(h1,wrapper)
}


let score = 0
function renderQuiz(universe,index){


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
                score++
            }
            if (currentQuestionIndex+1 < universe.questions.length){
                currentQuestionIndex++;

                renderQuiz(universe,currentQuestionIndex);
            }
            else{
                renderResults(score)
            }

        })

        answerWrapper.appendChild(answerElement);
        questionWrapper.append(h2,answerWrapper)
    }
    app.append(h1,questionWrapper)


}

function renderResults (score){
    app.innerHTML = ""
    console.log(score)
}