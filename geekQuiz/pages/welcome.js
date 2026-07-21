import {renderUniverses} from "./universesPage.js";
import {app} from "../app.js";

export function renderWelcome(){

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