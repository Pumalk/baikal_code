/*ВИКТОРИНА*/
document.addEventListener('DOMContentLoaded', () => {
    const victorinaSection = document.getElementById('victorina');
    if (!victorinaSection) return;

    // Список вопросов и ответов
    const questions = [
        {
            question: "Какое растение содержит до 15-20% флавоноидов в корне и используется как гепатопротекторное средство?",
            options: [
                "Пион уклоняющийся",
                "Шлемник байкальский",
                "Живокость крупноцветковая",
                "Зопник клубненосный"
            ],
            correctIndex: 1,
            hint: "Шлемник байкальский богат флавоноидами и применяется для защиты печени."
        },
        {
            question: "Какое растение официально входит в Государственную фармакопею РФ и известно высоким содержанием кремниевой кислоты?",
            options: [
                "Хвощ полевой",
                "Вьюнок полевой",
                "Лилия карликовая",
                "Астра альпийская"
            ],
            correctIndex: 0,
            hint: "Хвощ полевой применяют как мочегонное средство и источник кремния."
        },
        {
            question: "Какое из этих растений является ядовитым и требует осторожности при использовании?",
            options: [
                "Живокость крупноцветковая",
                "Проломник северный",
                "Тысячелистник обыкновенный",
                "Астра альпийская"
            ],
            correctIndex: 0,
            hint: "Живокость крупноцветковая содержит опасные алкалоиды."
        },
        {
            question: "Какое растение считается «пищей на случай голода» благодаря съедобным луковицам?",
            options: [
                "Хвойник односемянный",
                "Лилия карликовая",
                "Пион уклоняющийся",
                "Шлемник байкальский"
            ],
            correctIndex: 1,
            hint: "Луковицы лилии карликовой использовали в пищу."
        },
        {
            question: "Какое растение известно как «растение с ползучими стеблями» и иногда считается сорняком?",
            options: [
                "Астра альпийская",
                "Вьюнок полевой",
                "Хвощ полевой",
                "Проломник северный"
            ],
            correctIndex: 1,
            hint: "Вьюнок полевой способен оплетать другие растения."
        },
        {
            question: "Какое растение применяется в народной медицине при анемии и истощении?",
            options: [
                "Зопник клубненосный",
                "Астра альпийская",
                "Вьюнок полевой",
                "Шлемник байкальский"
            ],
            correctIndex: 0,
            hint: "Зопник клубненосный содержит питательные вещества в клубнях."
        },
        {
            question: "Какое растение используется для лечения неврозов и входит в Красную книгу?",
            options: [
                "Пион уклоняющийся",
                "Хвощ полевой",
                "Проломник северный",
                "Лилия карликовая"
            ],
            correctIndex: 0,
            hint: "Пион уклоняющийся обладает седативным действием."
        },
        {
            question: "Какое растение служит индикатором чистоты горных местообитаний?",
            options: [
                "Астра альпийская",
                "Проломник северный",
                "Хвощ полевой",
                "Живокость крупноцветковая"
            ],
            correctIndex: 1,
            hint: "Проломник северный растёт в высокогорьях."
        },
        {
            question: "Какое растение используется как бронхорасширяющее и содержит алкалоиды эфедрин и псевдоэфедрин?",
            options: [
                "Хвойник односемянный",
                "Тысячелистник обыкновенный",
                "Пион уклоняющийся",
                "Лилия карликовая"
            ],
            correctIndex: 0,
            hint: "Хвойник односемянный применяют при астме и бронхитах."
        },
        {
            question: "Какое растение содержит эфирные масла, широко используется при гастрите и кровотечениях?",
            options: [
                "Тысячелистник обыкновенный",
                "Вьюнок полевой",
                "Проломник северный",
                "Живокость крупноцветковая"
            ],
            correctIndex: 0,
            hint: "Тысячелистник обыкновенный — известное кровоостанавливающее средство."
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

    userAnswers[currentQuestionIndex] = selectedIndex;

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

function selectAnswer(selectedIndex, questionData) {
    const optionBtns = victorinaSection.querySelectorAll('.option-btn');
    const hintText = victorinaSection.querySelector('.hint-text');
    const nextBtn = victorinaSection.querySelector('.next-btn');

    userAnswers[currentQuestionIndex] = selectedIndex;

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