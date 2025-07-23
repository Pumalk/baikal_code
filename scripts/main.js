import { getCardData, getAllCardIds } from './cards-data.js';

// Создаем универсальную модалку
const universalModal = document.createElement('div');
universalModal.className = 'flower-modal';
universalModal.style.display = 'none';
universalModal.innerHTML = `
<div class="modal-overlay"></div>
<div class="modal-container">
    <button class="modal-close"><p>&times;</p></button>
    <div class="modal-header">
        <h2 id="modal-title"></h2>
        <div class="modal-names">
            <span class="buryat-name" id="modal-buryat"></span>
            <span class="scientific-name" id="modal-scientific"></span>
        </div>
    </div>
    <div class="modal-content">
        <div class="modal-media">
            <div class="media-tabs">
                <button class="media-tab active" data-tab="3d">3D Модель/Зарисовка</button>
                <button class="media-tab" data-tab="photo">Фото</button>
            </div>
            <div class="sketchfab-embed-wrapper" id="sketchfab-container"></div>
            <div class="photo-tab" style="display: none;">
                <img id="modal-photo" alt="" loading="lazy" decoding="async">
            </div>
        </div>
        <div class="modal-info" id="modal-info"></div>
    </div>
</div>`;
document.body.appendChild(universalModal);

document.addEventListener('DOMContentLoaded', () => {
    // --- Карточки ---
    const cardsContainer = document.getElementById('cards');
    if (cardsContainer) {
        const cardIds = getAllCardIds();
        document.documentElement.style.setProperty('--numcards', cardIds.length);
        cardIds.forEach(cardId => {
            const cardData = getCardData(cardId);
            createCard(cardData, cardsContainer);
        });
        initModalHandlers();
    }

    // --- Плавный скролл якорей ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- Анимация появления элементов ---
    const animatedEls = document.querySelectorAll('.animate-on-scroll');
    const observer = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.2 });
    animatedEls.forEach(el => observer.observe(el));

    // --- Анимация чисел и иконок статистики(инфографики) одновременно ---
const statItems = document.querySelectorAll('#graph .stat-item');
statItems.forEach((item, i) => {
    const icon = item.querySelector('.stat-icon');
    const count = item.querySelector('.count-animate');
    if (icon) {
        if (i % 2 === 0) {
            icon.style.transform = 'translateX(8rem)';
        } else {
            icon.style.transform = 'translateX(-8rem)';
        }
        icon.style.opacity = '0';
    }
    if (count) {
        count.textContent = '0';
    }
});
const statItemObserver = new window.IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        const icon = entry.target.querySelector('.stat-icon');
        const count = entry.target.querySelector('.count-animate');
        if (entry.isIntersecting) {
            if (icon) {
                icon.style.transition = 'opacity 0.8s, transform 0.8s';
                icon.style.opacity = '1';
                icon.style.transform = 'translateX(0)';
                icon.style.display = 'block'; // фиксируем видимость
            }
            if (count) {
                animateNumber(count, parseInt(count.dataset.to || count.textContent, 10));
            }
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.7 });
statItems.forEach(item => statItemObserver.observe(item));

    // --- Анимация тегов статистики ---
    const statTags = document.querySelectorAll('.stat-tag');
    const tagObserver = new window.IntersectionObserver((entries, obs) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('tag-animated');
                }, i * 150);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.7 });
    statTags.forEach(tag => tagObserver.observe(tag));

    // --- Анимация появления картинок в таймлайне ---
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        const imageBlock = item.querySelector('.timeline-image-block');
        if (!imageBlock) return;
        if (item.querySelector('.timeline-content.left')) {
            imageBlock.style.transform = 'translateX(12rem)';
        } else if (item.querySelector('.timeline-content.right')) {
            imageBlock.style.transform = 'translateX(-12rem)';
        }
        imageBlock.style.opacity = '0';
    });
    const timelineObserver = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const imageBlock = entry.target.querySelector('.timeline-image-block');
                if (imageBlock) {
                    imageBlock.style.transition = 'opacity 0.8s, transform 0.8s';
                    imageBlock.style.opacity = '1';
                    imageBlock.style.transform = 'translateX(0)';
                }
            }
        });
    }, { threshold: 0.3 });
    timelineItems.forEach(item => timelineObserver.observe(item));

    // --- Анимация появления секции about ---
    const about = document.getElementById('about');
    if (about) {
        const intro = about.querySelector('.about-intro');
        const text = about.querySelector('.about-text');
        const text2 = about.querySelector('.about-text2');
        if (intro && text && text2) {
            intro.style.animationPlayState = 'paused';
            text.style.animationPlayState = 'paused';
            text2.style.animationPlayState = 'paused';
            const aboutObserver = new window.IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        intro.style.animationPlayState = 'running';
                        text.style.animationPlayState = 'running';
                        text2.style.animationPlayState = 'running';
                        obs.disconnect();
                    }
                });
            }, { threshold: 0.3 });
            aboutObserver.observe(intro);
        }
    }
});

function createCard(cardData, container) {
    const cardElement = document.createElement('li');
    cardElement.className = 'card animate-on-scroll';
    cardElement.id = cardData.id;
    cardElement.innerHTML = `
    <div class="card__content">
        <div class="card_text" style="grid-area: text;">
            <h3>${cardData.title}</h3>
            <h4>Интересный факт:</h4>
            <p>${cardData.fact}</p>
            <a href="#" class="btn btn--accent" data-card-id="${cardData.id}">
                <img src="media/icons in body/информация1.webp" alt="Подробнее" loading="lazy" decoding="async">
            </a>
        </div>
        <figure style="grid-area: img;">
            <img src="${cardData.image}" alt="${cardData.title}" loading="lazy" decoding="async">
        </figure>
    </div>`;
    container.appendChild(cardElement);
}

function initModalHandlers() {
    // Обработчик открытия модалки
    document.querySelectorAll('.btn--accent').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const cardId = btn.dataset.cardId;
            const cardData = getCardData(cardId);
            openModal(cardData);
        });
    });

    // Обработчик закрытия модалки
    universalModal.querySelector('.modal-close').addEventListener('click', closeModal);
    universalModal.querySelector('.modal-overlay').addEventListener('click', closeModal);

    // Обработчик клавиши ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && universalModal.style.display === 'block') {
            closeModal();
        }
    });

    // Обработчики вкладок
    universalModal.querySelectorAll('.media-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabType = this.dataset.tab;
            const sketchfab = universalModal.querySelector('#sketchfab-container');
            const photo = universalModal.querySelector('.photo-tab');
            
            universalModal.querySelectorAll('.media-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            if (tabType === '3d') {
                sketchfab.style.display = 'block';
                photo.style.display = 'none';
            } else {
                sketchfab.style.display = 'none';
                photo.style.display = 'block';
            }
        });
    });
}

function openModal(cardData) {
    // Заполнение заголовка
    document.getElementById('modal-title').textContent = cardData.title;
    document.getElementById('modal-buryat').textContent = cardData.buryatName;
    document.getElementById('modal-scientific').textContent = cardData.scientificName;
    
    // Заполнение фото
    document.getElementById('modal-photo').src = cardData.image;
    document.getElementById('modal-photo').alt = cardData.title;
    
    // Заполнение контента
    document.getElementById('modal-info').innerHTML = `
        <div class="info-section">
            <h3>Полное описание</h3>
            <p>${cardData.modalContent.fullDescription}</p>
        </div>
        <div class="info-section">
            <h3>Где растёт</h3>
            <p>${cardData.modalContent.habitat}</p>
        </div>
        <div class="info-section">
            <h3>Свойства и применение</h3>
            <ul>
                ${cardData.modalContent.properties.map(prop => `<li>${prop}</li>`).join('')}
            </ul>
        </div>
        <div class="info-section">
            <h3>Факты и цифры</h3>
            <div class="facts-grid">
                <div class="fact-item">
                    <div class="fact-value"><p>${cardData.modalContent.facts.height}</p></div>
                    <div class="fact-label"><p>Высота растения</p></div>
                </div>
                <div class="fact-item">
                    <div class="fact-value"><p>${cardData.modalContent.facts.blooming}</p></div>
                    <div class="fact-label"><p>Период цветения</p></div>
                </div>
            </div>
        </div>
        <div class="info-section status-section">
            <h3>Охранный статус</h3>
            <p class="status">${cardData.modalContent.status}</p>
            ${cardData.modalContent.herbariumLink ? `
            <div class="herbarium-link">
                <a href="${cardData.modalContent.herbariumLink}" target="_blank" class="btn btn--herbarium">
                    Посмотреть в цифровом гербарии
                </a>
            </div>
            ` : ''}
        </div>
    `;
    
    // Загрузка 3D модели/зарисовки
    const sketchfabContainer = document.getElementById('sketchfab-container');
    sketchfabContainer.innerHTML = cardData.modalContent.sketchfabEmbed;
    
    // Сброс состояния вкладок
    universalModal.querySelector('.media-tab.active').classList.remove('active');
    universalModal.querySelector('[data-tab="3d"]').classList.add('active');
    sketchfabContainer.style.display = 'block';
    universalModal.querySelector('.photo-tab').style.display = 'none';
    
    // Показ модалки
    document.body.classList.add('modal-open');
    universalModal.style.display = 'block';
}

function closeModal() {
    universalModal.style.display = 'none';
    document.body.classList.remove('modal-open');
    
    // Очистка тяжелого контента для экономии памяти
    const sketchfabContainer = document.getElementById('sketchfab-container');
    sketchfabContainer.innerHTML = '';
}

function animateNumber(el, to, duration = 1500) {
    let start = 0;
    const step = (timestamp, startTime) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        el.textContent = Math.floor(progress * (to - start) + start);
        if (progress < 1) {
            requestAnimationFrame(ts => step(ts, startTime));
        } else {
            el.textContent = to;
        }
    };
    requestAnimationFrame(ts => step(ts));
}