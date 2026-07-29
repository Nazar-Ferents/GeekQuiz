import {renderUniverses} from "./universesPage.js";
import {app} from "../app.js";

export function renderWelcome(){

    app.innerHTML = ""

    const welcomeWrapper = document.createElement('div')
    welcomeWrapper.classList.add('welcomeWrapper')

    const h1 = document.createElement("h1");
    h1.classList.add("title");
    h1.innerText = 'GeekQuiz'

    const p = document.createElement("p");
    p.classList.add("greeting");
    p.textntent = 'Перевір свої знання\n' + 'улюблених всесвітів'


    const button = document.createElement("button");
    button.classList.add("start-button");
    button.innerHTML =  `Почати <span>▶</span>`

    button.addEventListener("click", ()=>{
        renderUniverses();
    })

    welcomeWrapper.append(h1,p,button)
    app.appendChild(welcomeWrapper)
}