import {universes} from "../data/universes.js";
import {renderQuiz} from "./quizPage.js";
import {app} from "../app.js";
import {resetScore} from "../data/state.js";


export function renderUniverses (){

    app.innerHTML = ""

    const h1 = document.createElement("h1");
    h1.classList.add("choose-title");
    h1.textContent = 'Обери Всесвіт'

    const h3 = document.createElement("h3");
    h3.classList.add("choose-subtitle");
    h3.textContent = 'Перевір, чи знаєш його краще за інших.'



    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    for (let universe of universes){
        let universeTitle = document.createElement("p");
        universeTitle.classList.add("universeTitle");
        universeTitle.textContent = universe.title;

        const universeDiv = document.createElement("div");
        universeDiv.classList.add("universeDiv");
        universeDiv.classList.add(universe.shadow);

        const overlay = document.createElement("div");
        overlay.classList.add("overlay");

        const img = document.createElement("img");
        img.classList.add("img");
        img.src=universe.image;

        universeDiv.addEventListener("click", ()=>{
            resetScore()
            setTimeout(()=>{renderQuiz(universe,0);},200)

        })
        overlay.appendChild(universeTitle)
        universeDiv.append(img,overlay);
        wrapper.appendChild(universeDiv);
    }

    app.append(h1,h3,wrapper)
}