/* ВИКТОРИНА */
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
    let animationFrameId = null;

    // Инициализация викторины
    function initVictorina() {
        victorinaSection.innerHTML = `
            <h2>Проверь свои знания!</h2>
            <div class="victorina-container">
                <span class="progress">Вопрос <span id="current-question">1</span> из ${questions.length}</span>
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

    // Показать вопрос
    function showQuestion(index) {
        cancelAnimationFrame(animationFrameId);
        
        const questionData = questions[index];
        const questionText = victorinaSection.querySelector('.question-text');
        const optionsContainer = victorinaSection.querySelector('.options-container');
        const hintText = victorinaSection.querySelector('.hint-text');
        const nextBtn = victorinaSection.querySelector('.next-btn');
        const currentQuestionSpan = victorinaSection.querySelector('#current-question');
        const card = victorinaSection.querySelector('.question-card');

        // Анимация исчезновения
        card.classList.remove('fade-in');
        card.classList.add('fade-out');

        setTimeout(() => {
            currentQuestionSpan.textContent = index + 1;
            questionText.textContent = questionData.question;
            hintText.textContent = '';
            hintText.style.opacity = '0';
            nextBtn.disabled = true;
            nextBtn.textContent = index === questions.length - 1 ? 'Завершить' : 'Далее';

            // Очистка и создание кнопок вариантов
            optionsContainer.innerHTML = '';
            questionData.options.forEach((option, i) => {
                const optionBtn = document.createElement('button');
                optionBtn.className = 'option-btn';
                optionBtn.textContent = option;
                optionBtn.addEventListener('click', () => selectAnswer(i, questionData));
                optionsContainer.appendChild(optionBtn);
            });

            // Обновление кнопки "Далее"
            const newNextBtn = nextBtn.cloneNode(true);
            nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
            newNextBtn.addEventListener('click', handleNextButtonClick);

            // Анимация появления
            card.classList.remove('fade-out');
            card.classList.add('fade-in');
        }, 200);
    }

    // Обработчик кнопки "Далее"
    function handleNextButtonClick() {
        if (currentQuestionIndex === questions.length - 1) {
            showResults();
        } else {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        }
    }

    // Выбор ответа
    function selectAnswer(selectedIndex, questionData) {
        const optionBtns = victorinaSection.querySelectorAll('.option-btn');
        const hintText = victorinaSection.querySelector('.hint-text');
        const nextBtn = victorinaSection.querySelector('.next-btn');

        // Отключаем все кнопки
        optionBtns.forEach(btn => {
            btn.disabled = true;
        });

        // Помечаем правильный и неправильный ответы
        optionBtns.forEach((btn, i) => {
            if (i === questionData.correctIndex) {
                btn.classList.add('correct');
            } else if (i === selectedIndex && i !== questionData.correctIndex) {
                btn.classList.add('incorrect');
            }
        });

        // Обновляем счет
        if (selectedIndex === questionData.correctIndex) {
            score++;
        }

        // Показываем подсказку с анимацией
        hintText.textContent = questionData.hint;
        animationFrameId = requestAnimationFrame(() => {
            hintText.style.opacity = '1';
        });

        // Активируем кнопку "Далее"
        nextBtn.disabled = false;
        userAnswers.push({
            question: questionData.question,
            selected: questionData.options[selectedIndex],
            correct: questionData.options[questionData.correctIndex],
            isCorrect: selectedIndex === questionData.correctIndex
        });
    }

    // Показать результаты
    function showResults() {
        cancelAnimationFrame(animationFrameId);
        
        victorinaSection.innerHTML = `
            <h2 class="fade-in">Результаты викторины</h2>
            <div class="results-card fade-in">
                <h3>Вы ответили правильно на ${score} из ${questions.length} вопросов</h3>
                <p class="result-message">${getResultMessage(score)}</p>
                <div class="detailed-results"></div>
                <button class="restart-btn">Попробовать снова</button>
            </div>
        `;

        // Показываем детальные результаты
        const detailedResults = victorinaSection.querySelector('.detailed-results');
        userAnswers.forEach((answer, i) => {
            const resultItem = document.createElement('div');
            resultItem.className = `result-item ${answer.isCorrect ? 'correct' : 'incorrect'}`;
            resultItem.innerHTML = `
                <p><strong>Вопрос ${i + 1}:</strong> ${answer.question}</p>
                <p>Ваш ответ: <span class="user-answer">${answer.selected}</span></p>
                ${!answer.isCorrect ? `<p>Правильный ответ: <span class="correct-answer">${answer.correct}</span></p>` : ''}
                <hr>
            `;
            detailedResults.appendChild(resultItem);
        });

        // Обработчик кнопки перезапуска
        victorinaSection.querySelector('.restart-btn').addEventListener('click', () => {
            currentQuestionIndex = 0;
            score = 0;
            userAnswers = [];
            initVictorina();
        });
    }

    // Получить сообщение результата
    function getResultMessage(score) {
        const percentage = (score / questions.length) * 100;
        
        if (percentage === 100) return "🎉 Потрясающе! Вы настоящий эксперт по растениям Байкала!";
        if (percentage >= 80) return "👍 Отличный результат! Вы хорошо знаете флору региона.";
        if (percentage >= 60) return "😊 Неплохо! Но есть куда расти в изучении природы Байкала.";
        if (percentage >= 40) return "🤔 Стоит узнать больше о тайнах природы Байкала.";
        return "🌿 Самое время пройтись по галерее и узнать больше о чудесах Байкала!";
    }

    // Запуск викторины
    initVictorina();
});