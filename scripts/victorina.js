/*ВИКТОРИНА*/
document.addEventListener('DOMContentLoaded', () => {
    const victorinaSection = document.getElementById('victorina');
    if (!victorinaSection) return;

    // Список вопросов и ответов
    const questions = [
    {
        question: "Какое растение содержит байкалин и вогонин — вещества, защищающие мозг и печень?",
        options: [
            "Пион уклоняющийся",
            "Шлемник байкальский",
            "Живокость крупноцветковая",
            "Зопник клубненосный"
        ],
        correctIndex: 1,
        hint: "Шлемник байкальский – «золотой корень» восточной медицины, редкое растение с уникальными веществами."
    },
    {
        question: "Какое растение использовалось как природная щётка благодаря содержанию кремния?",
        options: [
            "Хвощ полевой",
            "Вьюнок полевой",
            "Лилия карликовая",
            "Астра альпийская"
        ],
        correctIndex: 0,
        hint: "Хвощ полевой содержит кремниевую кислоту и даже применялся для полировки посуды."
    },
    {
        question: "Какое из этих растений ядовито и может использоваться только под контролем специалистов?",
        options: [
            "Живокость крупноцветковая",
            "Проломник северный",
            "Тысячелистник обыкновенный",
            "Астра альпийская"
        ],
        correctIndex: 0,
        hint: "Живокость содержит дельфинин, применяемый как обезболивающее и нейротоксин."
    },
    {
        question: "Какое растение имеет клубни, которые в голодные годы использовались в пищу?",
        options: [
            "Хвойник односемянный",
            "Зопник клубненосный",
            "Пион уклоняющийся",
            "Лилия карликовая"
        ],
        correctIndex: 1,
        hint: "Зопник клубненосный – природный источник питания и энергии."
    },
    {
        question: "Какое растение плетётся по земле, способно пробивать асфальт и цветёт всего день?",
        options: [
            "Астра альпийская",
            "Вьюнок полевой",
            "Хвощ полевой",
            "Проломник северный"
        ],
        correctIndex: 1,
        hint: "Вьюнок полевой раскрывается строго с 8 до 14 часов – как по часам!"
    },
    {
        question: "Какое растение использовали шаманы, а его листья пахнут клубникой?",
        options: [
            "Рододендрон Адамса",
            "Живокость крупноцветковая",
            "Пион уклоняющийся",
            "Чистотел большой"
        ],
        correctIndex: 0,
        hint: "Сагаан дали – растение с ароматными листьями и розовыми цветами, используется в обрядах."
    },
    {
        question: "Какое растение может 50 лет ждать, прежде чем зацвести, и пахнет так, что чувствуется за 10 шагов?",
        options: [
            "Тысячелистник обыкновенный",
            "Астра альпийская",
            "Лилия карликовая",
            "Чистотел большой"
        ],
        correctIndex: 2,
        hint: "Лилия карликовая – редкий и охраняемый вид, живущий в горах Бурятии."
    },
    {
        question: "Какое растение останавливает кровь лучше пластыря и используется в военной медицине?",
        options: [
            "Кровохлёбка лекарственная",
            "Живокость крупноцветковая",
            "Зверобой продырявленный",
            "Облепиха крушиновидная"
        ],
        correctIndex: 0,
        hint: "Кровохлёбка имеет тёмно-красные соцветия и славится своими вяжущими свойствами."
    },
    {
        question: "Какое растение называют «золотым корнем» и оно пахнет розой?",
        options: [
            "Родиола розовая",
            "Шлемник байкальский",
            "Пион уклоняющийся",
            "Тимьян байкальский"
        ],
        correctIndex: 0,
        hint: "Родиола розовая – редкое горное растение, обладающее адаптогенными свойствами."
    },
    {
        question: "Какое растение содержит эфирные масла, помогает при кровотечениях и называется в честь Ахилла?",
        options: [
            "Тысячелистник обыкновенный",
            "Проломник северный",
            "Чистотел большой",
            "Панцерина шерстистая"
        ],
        correctIndex: 0,
        hint: "Тысячелистник назван в честь Ахилла, его использовали для лечения ран."
    }
];


    let currentQuestionIndex = 0;
    let score = 0;
    let userAnswers = [];

    function initVictorina() {
        victorinaSection.innerHTML = `
            <h2>Викторина «Проверь свои знания!»</h2>
            <div class="victorina-container">
                <div class="progress">Вопрос <span id="current-question">1</span> из 10</div>
                <div class="question-card">
                    <h3 class="question-text"></h3>
                    <div class="options-container"></div>
                    <p class="hint-text"></p>
                    <button class="next-btn" disabled>Далее</button>
                </div>
            </div>
        `;
        showQuestion(currentQuestionIndex);
    }

    function showQuestion(index) {
    const questionData = questions[index];
    const questionText = victorinaSection.querySelector('.question-text');
    const optionsContainer = victorinaSection.querySelector('.options-container');
    const hintText = victorinaSection.querySelector('.hint-text');
    const nextBtn = victorinaSection.querySelector('.next-btn');
    const currentQuestionSpan = victorinaSection.querySelector('#current-question');

    // Анимация исчезновения
    const card = victorinaSection.querySelector('.question-card');
    card.classList.remove('fade-in');
    card.classList.add('fade-out');
    setTimeout(() => {
        currentQuestionSpan.textContent = index + 1;
        questionText.textContent = questionData.question;
        hintText.textContent = '';
        nextBtn.disabled = true;
        nextBtn.textContent = index === questions.length - 1 ? 'Завершить' : 'Далее';

        optionsContainer.innerHTML = '';
        questionData.options.forEach((option, i) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-btn';
            optionBtn.textContent = option;
            optionBtn.addEventListener('click', () => selectAnswer(i, questionData));
            optionsContainer.appendChild(optionBtn);
        });

        // Удаляем старые обработчики
        const newNextBtn = nextBtn.cloneNode(true);
        nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
        newNextBtn.addEventListener('click', () => {
            if (index === questions.length - 1) {
                showResults();
            } else {
                currentQuestionIndex++;
                showQuestion(currentQuestionIndex);
            }
        });

        // Анимация появления
        card.classList.remove('fade-out');
        card.classList.add('fade-in');
    }, 200);
}
function selectAnswer(selectedIndex, questionData) {
    const optionBtns = victorinaSection.querySelectorAll('.option-btn');
    const hintText = victorinaSection.querySelector('.hint-text');
    const nextBtn = victorinaSection.querySelector('.next-btn');

    optionBtns.forEach((btn, i) => {
        btn.disabled = true;
        if (i === questionData.correctIndex) {
            btn.classList.add('correct');
        } else if (i === selectedIndex && i !== questionData.correctIndex) {
            btn.classList.add('incorrect');
        }
    });

    if (selectedIndex === questionData.correctIndex) {
        score++;
    }

    // Плавное появление подсказки
    hintText.style.opacity = 0;
    hintText.textContent = questionData.hint;
    setTimeout(() => { hintText.style.opacity = 1; }, 50);
    nextBtn.disabled = false;
}

    function showResults() {
    victorinaSection.innerHTML = `
        <h2 class="fade-in">Результаты викторины</h2>
        <div class="results-card fade-in">
            <h3>Вы ответили правильно на ${score} из ${questions.length} вопросов</h3>
            <p class="result-message">${getResultMessage(score)}</p>
            <button class="restart-btn">Попробовать снова</button>
        </div>
    `;
    victorinaSection.querySelector('.restart-btn').addEventListener('click', () => {
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];
        initVictorina();
    });
}

    function getResultMessage(score) {
        if (score === 10) return "Ты настоящий эксперт по растениям Байкала!";
        if (score >= 7) return "Отличный результат! Ты хорошо знаешь флору региона.";
        if (score >= 4) return "Неплохо, но стоит узнать больше о тайнах природы.";
        return "Самое время пройтись по галерее и узнать больше о чудесах Байкала!";
    }

    initVictorina();
});