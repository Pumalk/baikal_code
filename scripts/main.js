import { getCardData, getAllCardIds } from './cards-data.js';

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
        initAllModals();
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

    // --- Анимация чисел ---
    const countEls = document.querySelectorAll('.count-animate');
    const numberObserver = new window.IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target, parseInt(entry.target.dataset.to || entry.target.textContent, 10));
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.7 });
    countEls.forEach(el => numberObserver.observe(el));

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
    // определяем направление анимации
    if (item.querySelector('.timeline-content.left')) {
        imageBlock.style.transform = 'translateX(120px)';
    } else if (item.querySelector('.timeline-content.right')) {
        imageBlock.style.transform = 'translateX(-120px)';
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
});

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

// --- Карточки и модалки ---
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
            <a href="#" class="btn btn--accent" data-modal="modal_${cardData.id}">
                <img src="media/icons in body/информация1.png" alt="Подробнее">
            </a>
        </div>
        <figure style="grid-area: img;">
            <img src="${cardData.image}" alt="${cardData.title}" loading="lazy">
        </figure>
    </div>
    `;
    const modalElement = document.createElement('div');
    modalElement.className = 'flower-modal';
    modalElement.id = `modal_${cardData.id}`;
    modalElement.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-container">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <h2>${cardData.title}</h2>
                <div class="modal-names">
                    <span class="buryat-name">${cardData.buryatName}</span>
                    <span class="scientific-name">${cardData.scientificName}</span>
                </div>
            </div>
            <div class="modal-content">
                <div class="modal-media">
                    <div class="media-tabs">
                        <button class="media-tab active" data-tab="3d">3D Модель</button>
                        <button class="media-tab" data-tab="photo">Фото</button>
                    </div>
                    ${cardData.modalContent.sketchfabEmbed}
                    <div class="photo-tab" style="display: none;">
                        <img src="${cardData.image}" alt="${cardData.title}">
                    </div>
                </div>
                <div class="modal-info">
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
                                <div class="fact-value">${cardData.modalContent.facts.height}</div>
                                <div class="fact-label">Высота растения</div>
                            </div>
                            <div class="fact-item">
                                <div class="fact-value">${cardData.modalContent.facts.blooming}</div>
                                <div class="fact-label">Период цветения</div>
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
                </div>
            </div>
        </div>
    `;
    container.appendChild(cardElement);
    document.body.appendChild(modalElement);
}

function initAllModals() {
    document.querySelectorAll('.btn--accent').forEach(btn => {
        const modalId = btn.dataset.modal;
        const modal = document.getElementById(modalId);
        if (!modal) return;
        const closeBtn = modal.querySelector('.modal-close');
        const overlay = modal.querySelector('.modal-overlay');
        const tabs = modal.querySelectorAll('.media-tab');
        const sketchfabEmbed = modal.querySelector('.sketchfab-embed-wrapper');
        const photoTab = modal.querySelector('.photo-tab');
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.classList.add('modal-open');
            modal.style.display = 'block';
            if(sketchfabEmbed) sketchfabEmbed.style.display = 'block';
            if(photoTab) photoTab.style.display = 'none';
        });
        closeBtn.addEventListener('click', () => closeModal(modal));
        overlay.addEventListener('click', () => closeModal(modal));
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                if (tab.dataset.tab === '3d') {
                    if(sketchfabEmbed) sketchfabEmbed.style.display = 'block';
                    if(photoTab) photoTab.style.display = 'none';
                } else {
                    if(sketchfabEmbed) sketchfabEmbed.style.display = 'none';
                    if(photoTab) photoTab.style.display = 'block';
                }
            });
        });
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.flower-modal').forEach(modal => {
                if (modal.style.display === 'block') {
                    closeModal(modal);
                }
            });
        }
    });
}

function closeModal(modal) {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
}