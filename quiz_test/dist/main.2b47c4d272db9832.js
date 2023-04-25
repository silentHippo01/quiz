/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
//============= Роутинг ============= 
document.addEventListener('click', e => {
    if(e.target.tagName === 'A'){
        route(e);
    }

    e.preventDefault();
})


const route = (e) => {
    window.history.pushState({}, '', e.target.href);
    handleLocation();
}

const routers = {
    '/': 'welcome.html',
    '/questions': 'questions.html',
}

const handleLocation = async () => {
    const path = window.location.pathname;
    const html = await fetch(routers[path]).then((data) => data.text());
    document.querySelector('.container').innerHTML = html;
    renderQuestion(0)
}

window.onpopstate = handleLocation;
window.route = route;
handleLocation();

//=============  ============= 

const nextBtn = document.querySelector('.quiz__nextBtn');


const indexQuestion = 0;
// const questionsHTML = document.querySelector('.quiz__questions');
const questions = [
    {
        title: 'В каком городе планируете поступать?',
        answers: ['Москва', 'Санкт-Перербург', 'Новосибирск'],
    },
    {
        title: 'Какое образование уже есть??',
        answers: ['9 классов', '11 классов', 'Училище', 'Колледж/техникум', 'Неоконченное высшее', '11 классов'],
    },
]


function renderQuestion(indexQuestion){
    const questionsHTML = document.querySelector('.quiz__questions');
    questionsHTML.innerHTML = `
    <div class="quiz__column-question">
    <div class="quiz__question-title">${questions[indexQuestion].title}</div>
    <div class="quiz__column-answers">
        ${
            questions[indexQuestion].answers.map((item) => {
                return `<input type="radio" class="answer" name="answers" value=${item}>${item}>`
                // return `<input type="radio" id="contactChoice1" name="contact" value="email">
            })
        }
    </div>
    <div class="quiz__indicator">
        Шаг ${indexQuestion + 1}/${questions.length}
    </div>
        <button class="quiz__previousBtn">Назад</button>
        <button class="quiz__nextBtn">Далее</button>
    </div>
    `;

    const nextBtn = document.querySelector('.quiz__nextBtn');
    const previousBtn = document.querySelector('.quiz__previousBtn');
    nextBtn.addEventListener('click', () => renderQuestion(indexQuestion + 1));
    previousBtn.addEventListener('click', () => renderQuestion(indexQuestion - 1));
}

renderQuestion(indexQuestion);
console.log(questions[indexQuestion].answers);

// setTimeout(() => renderQuestion(), 1000);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yYjQ3YzRkMjcyZGI5ODMyLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsK0JBQStCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLGtGQUFrRixLQUFLLEdBQUcsS0FBSztBQUMvRjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGtCQUFrQixHQUFHO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLz09PT09PT09PT09PT0g0KDQvtGD0YLQuNC90LMgPT09PT09PT09PT09PSBcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgIGlmKGUudGFyZ2V0LnRhZ05hbWUgPT09ICdBJyl7XHJcbiAgICAgICAgcm91dGUoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KVxyXG5cclxuXHJcbmNvbnN0IHJvdXRlID0gKGUpID0+IHtcclxuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIGUudGFyZ2V0LmhyZWYpO1xyXG4gICAgaGFuZGxlTG9jYXRpb24oKTtcclxufVxyXG5cclxuY29uc3Qgcm91dGVycyA9IHtcclxuICAgICcvJzogJ3dlbGNvbWUuaHRtbCcsXHJcbiAgICAnL3F1ZXN0aW9ucyc6ICdxdWVzdGlvbnMuaHRtbCcsXHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZUxvY2F0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIGNvbnN0IGh0bWwgPSBhd2FpdCBmZXRjaChyb3V0ZXJzW3BhdGhdKS50aGVuKChkYXRhKSA9PiBkYXRhLnRleHQoKSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgIHJlbmRlclF1ZXN0aW9uKDApXHJcbn1cclxuXHJcbndpbmRvdy5vbnBvcHN0YXRlID0gaGFuZGxlTG9jYXRpb247XHJcbndpbmRvdy5yb3V0ZSA9IHJvdXRlO1xyXG5oYW5kbGVMb2NhdGlvbigpO1xyXG5cclxuLy89PT09PT09PT09PT09ICA9PT09PT09PT09PT09IFxyXG5cclxuY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWl6X19uZXh0QnRuJyk7XHJcblxyXG5cclxuY29uc3QgaW5kZXhRdWVzdGlvbiA9IDA7XHJcbi8vIGNvbnN0IHF1ZXN0aW9uc0hUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVpel9fcXVlc3Rpb25zJyk7XHJcbmNvbnN0IHF1ZXN0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ9CSINC60LDQutC+0Lwg0LPQvtGA0L7QtNC1INC/0LvQsNC90LjRgNGD0LXRgtC1INC/0L7RgdGC0YPQv9Cw0YLRjD8nLFxyXG4gICAgICAgIGFuc3dlcnM6IFsn0JzQvtGB0LrQstCwJywgJ9Ch0LDQvdC60YIt0J/QtdGA0LXRgNCx0YPRgNCzJywgJ9Cd0L7QstC+0YHQuNCx0LjRgNGB0LonXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICfQmtCw0LrQvtC1INC+0LHRgNCw0LfQvtCy0LDQvdC40LUg0YPQttC1INC10YHRgtGMPz8nLFxyXG4gICAgICAgIGFuc3dlcnM6IFsnOSDQutC70LDRgdGB0L7QsicsICcxMSDQutC70LDRgdGB0L7QsicsICfQo9GH0LjQu9C40YnQtScsICfQmtC+0LvQu9C10LTQti/RgtC10YXQvdC40LrRg9C8JywgJ9Cd0LXQvtC60L7QvdGH0LXQvdC90L7QtSDQstGL0YHRiNC10LUnLCAnMTEg0LrQu9Cw0YHRgdC+0LInXSxcclxuICAgIH0sXHJcbl1cclxuXHJcblxyXG5mdW5jdGlvbiByZW5kZXJRdWVzdGlvbihpbmRleFF1ZXN0aW9uKXtcclxuICAgIGNvbnN0IHF1ZXN0aW9uc0hUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVpel9fcXVlc3Rpb25zJyk7XHJcbiAgICBxdWVzdGlvbnNIVE1MLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJxdWl6X19jb2x1bW4tcXVlc3Rpb25cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJxdWl6X19xdWVzdGlvbi10aXRsZVwiPiR7cXVlc3Rpb25zW2luZGV4UXVlc3Rpb25dLnRpdGxlfTwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInF1aXpfX2NvbHVtbi1hbnN3ZXJzXCI+XHJcbiAgICAgICAgJHtcclxuICAgICAgICAgICAgcXVlc3Rpb25zW2luZGV4UXVlc3Rpb25dLmFuc3dlcnMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzcz1cImFuc3dlclwiIG5hbWU9XCJhbnN3ZXJzXCIgdmFsdWU9JHtpdGVtfT4ke2l0ZW19PmBcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiBgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiY29udGFjdENob2ljZTFcIiBuYW1lPVwiY29udGFjdFwiIHZhbHVlPVwiZW1haWxcIj5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJxdWl6X19pbmRpY2F0b3JcIj5cclxuICAgICAgICDQqNCw0LMgJHtpbmRleFF1ZXN0aW9uICsgMX0vJHtxdWVzdGlvbnMubGVuZ3RofVxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInF1aXpfX3ByZXZpb3VzQnRuXCI+0J3QsNC30LDQtDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJxdWl6X19uZXh0QnRuXCI+0JTQsNC70LXQtTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVpel9fbmV4dEJ0bicpO1xyXG4gICAgY29uc3QgcHJldmlvdXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVpel9fcHJldmlvdXNCdG4nKTtcclxuICAgIG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJRdWVzdGlvbihpbmRleFF1ZXN0aW9uICsgMSkpO1xyXG4gICAgcHJldmlvdXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJRdWVzdGlvbihpbmRleFF1ZXN0aW9uIC0gMSkpO1xyXG59XHJcblxyXG5yZW5kZXJRdWVzdGlvbihpbmRleFF1ZXN0aW9uKTtcclxuY29uc29sZS5sb2cocXVlc3Rpb25zW2luZGV4UXVlc3Rpb25dLmFuc3dlcnMpO1xyXG5cclxuLy8gc2V0VGltZW91dCgoKSA9PiByZW5kZXJRdWVzdGlvbigpLCAxMDAwKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9