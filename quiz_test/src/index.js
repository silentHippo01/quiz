let indexQuestion = 0;
const result = {};
const questionsHTML = document.querySelector('.quiz__column-question');
const quizTag = document.querySelector('.quiz');

const questions = [
    {
        id: 1,
        title: 'Для кого вы ищете учебное заведение?',
        answers: ['Себе', 'Родственнику', 'Ребенку', 'Супругу/супруге', 'Коллеге', 'Другое'],
        type: 'standart',
    },
    {
        id: 2,
        title: 'В каком городе планируете поступать?',
        answers: ['Москва', 'Санкт-Перербург', 'Новосибирск', 'Нижний новгород', 'Ростов-на-Дону'],
        type: 'select',
    },
    {
        id: 3,
        title: 'Какое образование уже есть?',
        answers: ['9 классов', '11 классов', 'Училище', 'Колледж/техникум', 'Неоконченное высшее', '11 классов'],
        type: 'standart',
    },
    {
        id: 4,
        title: 'Куда планируете поступать?',
        answers: ['Вуз', 'Колледж/техникум', 'Училище'],
        type: 'standart',
    },
    {
        id: 5,
        title: 'Какую форму обучения предпочитаете?',
        answers: ['Очную', 'Заочную', 'Дистанционную'],
        type: 'standart',
    },
    {
        id: 6,
        title: 'Рассматриваете платное обучение?',
        answers: ['Нет, только бюджет', 'Да, планирую учиться платно', 'Возможны оба варианта'],
        type: 'standart',
    },
    {
        id: 7,
        title: 'Какая специальность интересует?',
        answers: ['Любая', 'Философия', 'Экономика', 'Социология', 'Юриспруденция', 'Менеджмент',],
        type: 'select',
    },
    {
        id: 8,
        title: 'Как скоро планируете поступать?',
        answers: ['Как можно быстрее', 'Квартал', 'Год', 'Месяц', 'Полгода'],
        type: 'standart',
    },
];


function renderQuestion(indexQuestion) {
    const renderAnswers = () => {
        return questions[indexQuestion].answers.map((item) => {
            return `<div class="quiz__answers-item"><input class="radioBtn" type="radio" name=${questions[indexQuestion].id} value=${item}>${item}</div>`
        }).join('');
    }

    if (questions[indexQuestion].type === 'standart') {
        questionsHTML.innerHTML = 
            `
            <div class="quiz__questions-container">
        <div class="quiz__question-title">${questions[indexQuestion]?.title}</div>
        <div class="quiz__column-answers">
            ${renderAnswers(indexQuestion)}
        </div>
        <div class="quiz__indicator">
         Шаг ${indexQuestion + 1}/${questions.length}
        </div>
        <div class="quiz__buttons">
            <button class="quiz__previousBtn">Назад</button>
            <button class="quiz__nextBtn" disabled>Далее</button>
        </div>
        </div>
        
`
    } else if (questions[indexQuestion].type === 'select') {
        questionsHTML.innerHTML = `
        <div class="quiz__questions-container">
        <div class="quiz__question-title">${questions[indexQuestion]?.title}</div>
        <div class="quiz__column-answers">
        <select class="quiz__answers-select">
        ${questions[indexQuestion]?.answers.map((item) => {
            return `<option class="answers" name=${questions[indexQuestion].id} value=${item}>${item}</option>`
        })
            }
        </select>
        </div>
        <div class="quiz__indicator">
            Шаг ${indexQuestion + 1}/${questions.length}
        </div>
            <div class="quiz__buttons">
                <button class="quiz__previousBtn">Назад</button>
                <button class="quiz__nextBtn">Далее</button>
            </div>
        </div>
`;
    }
}

renderQuestion(indexQuestion);
quizTag.addEventListener('change', (e) => {
    result[e.target.name] = e.target.value;
    const nextBtn = document.querySelector('.quiz__nextBtn');
    const previousBtn = document.querySelector('.quiz__previousBtn');
    nextBtn.removeAttribute('disabled');
    console.log(nextBtn);
    console.log(result);
    if(indexQuestion > 0){
        previousBtn.removeAttribute('disabled');
    }
})

function renderForm() {
    questionsHTML.innerHTML = `
        <form class="quiz__form">
            <h3 class="quiz__question-title">Ваша подборка готова! 🥳 Куда нам отправить её?</h3>

            <input class="quiz__form-input" name="user_name" placeholder="Как вас зовут?">
            <input class="quiz__form-input" name="user_phone" placeholder="Номер телефона">
            <input class="quiz__form-input" name="user_email" placeholder="E-mail">
            <button class="quiz__form-button" type="submit">Получить подборку</button>
        </form>
    `;

    const sendForm = document.querySelector('.quiz__form-button');
    sendForm.addEventListener('click', async (e) => {
        e.preventDefault();
        let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(result)
        })

        renderFinish()
    })
}

function renderFinish() {
    questionsHTML.innerHTML = `
        <h1>Отлично, спасибо!</h1>
        <p>
            Мы отправили подборку вам на почту. 
            Если подборка не приходит — проверьте спам, возможно, она попала туда.
        </p>
`;
}

quizTag.addEventListener('click', (e) => {
    if(e.target.classList.contains('quiz__nextBtn')){
        indexQuestion = indexQuestion + 1; 
        console.log('btn'); 
        indexQuestion < questions.length ? renderQuestion(indexQuestion) : renderForm() 
    } else if(e.target.classList.contains('quiz__previousBtn')){
        if(indexQuestion > 0){
            const previousBtn = document.querySelector('.quiz__previousBtn');
            previousBtn.removeAttribute('disabled');
            indexQuestion = indexQuestion - 1;
            renderQuestion(indexQuestion);
        }
    }
})
