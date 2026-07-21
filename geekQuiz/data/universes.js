import questionsHarryPotter from "./questions-answers/questionsHarryPotter.js";
import {questionsMarvel} from "./questions-answers/questionsMarvel.js";
import {questionsGameOfThrones} from "./questions-answers/questionsGameOfThrones.js";
import {questionsAvatarAang} from "./questions-answers/questionsAvatarAang.js";
import {questionsPirates} from "./questions-answers/questionsPirates.js";


export const universes =
    [
        {
            title:'Гаррі Поттер',
            questions:questionsHarryPotter,
            knowledgeLevel:{
                legend:'🧙Сова вже біля будинку принесла листа з Гоґвортсу. Навіть Дамблдор вражений твоїми знаннями!',
                perfect:'⚡Дуже гідно! До рівня Герміони ще трохи, але ти точно не магл.',
                good:'📚Можливо час перенести осінній перегляд Гаррі Поттера чим пошвидше?',
                bad:'🦉Можливо, ти випадково сів не на той потяг до школи чарів?',
                noob:'🪄Ти впевнений, що знаєш, хто такий Гаррі Поттер?'
            }
        },
        {
            title:'Марвел',
            questions:questionsMarvel,
            knowledgeLevel:{
                legend:'🛡️Avengers, assemble! Нік Ф\'юрі вже записав тебе до команди.',
                perfect:'🦸Ти часом не родич Тоні старка?.',
                good:'💥 Танос клацнув пальцями й стер половину твоїх знань.',
                bad:'🕷️Я так розумію крмі Людини павука ти більше нікого не знаєш з Марвел?',
                noob:'💀Ти випадково не з DC приперся?'
            }
        },
        {
            title:'Гра Престолів',
            questions:questionsGameOfThrones,
            knowledgeLevel:{
                legend:'👑 Ти гідний сидіти на Залізному троні!',
                perfect:'⚔️ Пів Вестеросу вже готові присягнути тобі.',
                good:'🐺 Непогано, але варто ще раз відвідати Сім Королівств.',
                bad:'❄️ Winter is coming... а ти ще не готовий.',
                noob:'🐉 Ти хоча б знаєш, хто такий Джон Сноу?'
            }
        },
        {
            title:'Аватар: Останній захисник',
            questions:questionsAvatarAang,
            knowledgeLevel:{
                legend:'🌍 Знайшовся покровитель усіх чотирьох стихій, який врятує світ',
                perfect:'🔥 Знайди Зуко він допоможе опанувати останню стихію.',
                good:'🌊 Після такого Катара обере Зуко.',
                bad:'🍃 Ти ще навіть повітря не навчився контролювати.',
                noob:'💀 Ти думав тут будуть великі сині чоловічки?'
            }
        },
        {
            title:'Пірати Карибського моря',
            questions:questionsPirates,
            knowledgeLevel:{
                legend:'☠️ Капітан Джек Спарроу із задоволенням взяв би тебе в команду!',
                perfect:'🦜 Чудовий результат! Компас уже показує на тебе.',
                good:'⚓ Ти трохи перебрав Рому.',
                bad:'🌊 Здається, ти трохи заблукав у Карибському морі.',
                noob:'🏴‍☠️НА ШИБЕНИЦЮ ЦЬОГО НЕВІГЛАСА'
            }
        }
        ]