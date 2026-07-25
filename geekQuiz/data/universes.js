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
            image:'https://wallpapercave.com/wp/wp10458826.png',
            knowledgeLevel:{
                legend:'🧙Сова вже біля будинку принесла листа з Гоґвортсу. Навіть Дамблдор вражений твоїми знаннями!',
                perfect:'⚡Дуже гідно! До рівня Герміони ще трохи, але ти точно не магл.',
                good:'📚Можливо час перенести осінній перегляд Гаррі Поттера чим пошвидше?',
                bad:'🦉Можливо, ти випадково сів не на той потяг до школи чарів?',
                noob:'🪄Ти впевнений, що знаєш, хто такий Гаррі Поттер?'
            },
            shadow:'purple'
        },
        {
            title:'Марвел',
            questions:questionsMarvel,
            image:'https://wallpaperaccess.com/full/200285.jpg',
            knowledgeLevel:{
                legend:'🛡️Avengers, assemble! Нік Ф\'юрі вже записав тебе до команди.',
                perfect:'🦸Ти часом не родич Тоні старка?.',
                good:'💥 Танос клацнув пальцями й стер половину твоїх знань.',
                bad:'🕷️Я так розумію окрмі Людини павука ти більше нікого не знаєш з Марвел?',
                noob:'💀Ти випадково не з DC приперся?'
            },
            shadow:'blue'
        },
        {
            title:'Гра Престолів',
            questions:questionsGameOfThrones,
            image:'https://wallpaperaccess.com/full/515926.jpg',
            knowledgeLevel:{
                legend:'👑 Ти гідний сидіти на Залізному троні!',
                perfect:'⚔️ Пів Вестеросу вже готові присягнути тобі.',
                good:'🐺 Непогано, але варто ще раз відвідати Сім Королівств.',
                bad:'❄️ Winter is coming... а ти ще не готовий.',
                noob:'🐉 Ти хоча б знаєш, хто такий Джон Сноу?'
            },
            shadow:'orange'
        },
        {
            title:'Аватар: Останній захисник',
            questions:questionsAvatarAang,
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR710R8g32Gvnoz90qqraPX3qF1UpAy0RbCnH8ICH5AmsPx7GaIs64WoBs&s=10',
            knowledgeLevel:{
                legend:'🌍 Знайшовся покровитель усіх чотирьох стихій, який врятує світ',
                perfect:'🔥 Знайди Зуко він допоможе опанувати останню стихію.',
                good:'🌊 Якщо б тобі випала доля бути аватаром то Катара б обрала Зуко.',
                bad:'🍃 Ти ще навіть повітря не навчився контролювати.',
                noob:'💀 Ти думав тут будуть великі сині чоловічки?'
            },
            shadow:'ice'
        },
        {
            title:'Пірати Карибського моря',
            questions:questionsPirates,
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmQ8OLzrr_RMddn1fEbO2XrPvulQZwSBVq-VRYxuSC9zDptRc8SO_t4TA&s=10',
            knowledgeLevel:{
                legend:'☠️ Капітан Джек Спарроу із задоволенням взяв би тебе в команду!',
                perfect:'🦜 Чудовий результат! Компас уже показує на тебе.',
                good:'⚓ Ти трохи перебрав Рому.',
                bad:'🌊 Здається, ти трохи заблукав у Карибському морі.',
                noob:'🏴‍☠️НА ШИБЕНИЦЮ ЦЬОГО НЕВІГЛАСА'
            },
            shadow:'red'
        }
        ]