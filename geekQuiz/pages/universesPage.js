import {universes} from "../data/universes.js";
import {renderQuiz} from "./quiz.js";
import {app} from "../app.js";
import {resetScore} from "../data/state.js";


export function renderUniverses (){

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
            resetScore()
            renderQuiz(universe,0);
        })
        wrapper.appendChild(div);
    }

    app.append(h1,wrapper)
}