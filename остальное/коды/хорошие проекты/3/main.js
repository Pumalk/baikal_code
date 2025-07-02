// Основные переменные
let currentQuestionIndex = 0;
let quizScore = 0;
let selectedAnswers = [];
let animatedStats = false;
let currentFilter = 'all';

// Данные растений с категориями
const plantsData = [
  {
    id: 1,
    name: "Родиола розовая",
    latin: "Rhodiola rosea",
    image: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    fact: "Называется «золотой корень» за свои адаптогенные свойства",
    properties: ["Повышает выносливость", "Снижает усталость", "Укрепляет иммунитет"],
    status: "Редкий вид",
    habitat: "Горные районы Бурятии",
    use: "Настойки, экстракты для повышения работоспособности",
    category: ["rare", "medicinal"]
  },
  {
    id: 2,
    name: "Бадан толстолистный",
    latin: "Bergenia crassifolia",
    image: "https://images.pexels.com/photos/1055379/pexels-photo-1055379.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    fact: "Листья используются для приготовления целебного чая",
    properties: ["Противовоспалительное", "Вяжущее", "Антибактериальное"],
    status: "Обычный вид",
    habitat: "Каменистые склоны, леса",
    use: "Чай из перезимовавших листьев, отвары",
    category: ["medicinal"]
  },
  {
    id: 3,
    name: "Левзея сафлоровидная",
    latin: "Rhaponticum carthamoides",
    image: "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    fact: "Известна как «маралий корень» - сибирский женьшень",
    properties: ["Адаптогенное", "Тонизирующее", "Стимулирующее"],
    status: "Редкий вид",
    habitat: "Высокогорные луга",
    use: "Настойки, экстракты, БАДы",
    category: ["rare", "medicinal"]
  },
  {
    id: 4,
    name: "Шлемник байкальский",
    latin: "Scutellaria baicalensis",
    image: "https://images.pexels.com/photos/1029624/pexels-photo-1029624.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    fact: "Корни содержат уникальные флавоноиды",
    properties: ["Противовоспалительное", "Антиоксидантное", "Гепатопротекторное"],
    status: "Охраняемый вид",
    habitat: "Степные склоны Прибайкалья",
    use: "Корневища в традиционной медицине",
    category: ["endemic", "medicinal"]
  },
  {
    id: 5,
    name: "Копеечник забытый",
    latin: "Hedysarum neglectum",
    image: "https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    fact: "Содержит ксантоны - редкие биологически активные вещества",
    properties: ["Иммуномодулирующее", "Антиоксидантное", "Противоопухолевое"],
    status: "Редкий эндемик",
    habitat: "Степи Забайкалья",
    use: "Исследования в онкологии",
    category: ["rare", "endemic", "medicinal"]
  },
  {
    id: 6,
    name: "Астрагал перепончатый",
    latin: "Astragalus membranaceus",
    image: "https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    fact: "Используется в китайской медицине более 2000 лет",
    properties: ["Иммуностимулирующее", "Кардиопротекторное", "Антивозрастное"],
    status: "Культивируемый вид",
    habitat: "Степные районы",
    use: "Корни в составе БАДов",
    category: ["medicinal"]
  },
  {
    id: 7,
    name: "Солодка уральская",
    latin: "Glycyrrhiza uralensis",
    image: "https://images.pexels.com/photos/1292115/pexels-photo-1292115.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    fact: "Корень в 50 раз слаще сахара",
    properties: ["Отхаркивающее", "Противовоспалительное", "Спазмолитическое"],
    status: "Обычный вид",
    habitat: "Степи, солончаки",
    use: "Сиропы, леденцы от кашля",
    category: ["medicinal"]
  },
  {
    id: 8,
    name: "Элеутерококк колючий",
    latin: "Eleutherococcus senticosus",
    image: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    fact: "Называется «сибирским женьшенем»",
    properties: ["Адаптогенное", "Стимулирующее", "Общеукрепляющее"],
    status: "Обычный вид",
    habitat: "Смешанные леса",
    use: "Настойки, экстракты",
    category: ["medicinal"]
  },
  {
    id: 9,
    name: "Пион уклоняющийся",
    latin: "Paeonia anomala",
    image: "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    fact: "Известен как «марьин корень»",
    properties: ["Седативное", "Спазмолитическое", "Противосудорожное"],
    status: "Редкий вид",
    habitat: "Лесные поляны",
    use: "Настойки при неврозах",
    category: ["rare", "medicinal"]
  },
  {
    id: 10,
    name: "Аралия маньчжурская",
    latin: "Aralia mandshurica",
    image: "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    fact: "Дерево с колючими стволами высотой до 5 метров",
    properties: ["Адаптогенное", "Тонизирующее", "Стимулирующее"],
    status: "Редкий вид",
    habitat: "Смешанные леса Приморья",
    use: "Настойки корней",
    category: ["rare", "medicinal"]
  },
  {
    id: 11,
    name: "Лимонник китайский",
    latin: "Schisandra chinensis",
    image: "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    fact: "Ягоды имеют пять вкусов: сладкий, кислый, соленый, горький и острый",
    properties: ["Тонизирующее", "Адаптогенное", "Стимулирующее"],
    status: "Редкий вид",
    habitat: "Смешанные леса",
    use: "Настойки ягод и семян",
    category: ["rare", "medicinal"]
  },
  {
    id: 12,
    name: "Красоднев желтый",
    latin: "Hemerocallis lilioasphodelus",
    image: "https://images.pexels.com/photos/1002740/pexels-photo-1002740.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    fact: "Цветки съедобны и используются в кулинарии",
    properties: ["Мочегонное", "Противовоспалительное", "Жаропонижающее"],
    status: "Обычный вид",
    habitat: "Луга, опушки",
    use: "Отвары корневищ",
    category: ["medicinal"]
  },
  {
    id: 13,
    name: "Кровохлебка лекарственная",
    latin: "Sanguisorba officinalis",
    image: "https://images.pexels.com/photos/1227511/pexels-photo-1227511.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    fact: "Корневища содержат до 20% дубильных веществ",
    properties: ["Кровоостанавливающее", "Вяжущее", "Противовоспалительное"],
    status: "Обычный вид",
    habitat: "Луга, лесные поляны",
    use: "Отвары корневищ",
    category: ["medicinal"]
  },
  {
    id: 14,
    name: "Володушка золотистая",
    latin: "Bupleurum aureum",
    image: "https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    fact: "Эндемик Байкальского региона",
    properties: ["Желчегонное", "Гепатопротекторное", "Противовоспалительное"],
    status: "Эндемичный вид",
    habitat: "Степи Прибайкалья",
    use: "Традиционная бурятская медицина",
    category: ["endemic", "medicinal"]
  },
  {
    id: 15,
    name: "Горечавка крупнолистная",
    latin: "Gentiana macrophylla",
    image: "https://images.pexels.com/photos/1407051/pexels-photo-1407051.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    fact: "Корни горькие даже в разбавлении 1:50000",
    properties: ["Горечь", "Желчегонное", "Аппетитное"],
    status: "Редкий вид",
    habitat: "Высокогорные луга",
    use: "Настойки для улучшения пищеварения",
    category: ["rare", "medicinal"]
  },
  {
    id: 16,
    name: "Чабрец байкальский",
    latin: "Thymus baicalensis",
    image: "https://images.pexels.com/photos/1148046/pexels-photo-1148046.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    fact: "Эндемик Байкальского региона с сильным ароматом",
    properties: ["Антисептическое", "Отхаркивающее", "Спазмолитическое"],
    status: "Эндемичный вид",
    habitat: "Каменистые склоны",
    use: "Эфирное масло, чаи",
    category: ["endemic", "medicinal"]
  },
  {
    id: 17,
    name: "Пустырник пятилопастный",
    latin: "Leonurus quinquelobatus",
    image: "https://images.pexels.com/photos/1302500/pexels-photo-1302500.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    fact: "Успокаивающий эффект сильнее валерианы",
    properties: ["Седативное", "Кардиотоническое", "Спазмолитическое"],
    status: "Обычный вид",
    habitat: "Пустыри, обочины",
    use: "Настойки при стрессе",
    category: ["medicinal"]
  },
  {
    id: 18,
    name: "Ирис русский",
    latin: "Iris ruthenica",
    image: "https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    fact: "Корневища используются в парфюмерии",
    properties: ["Противовоспалительное", "Отхаркивающее", "Мочегонное"],
    status: "Редкий вид",
    habitat: "Степи, луга",
    use: "Корневища для настоев",
    category: ["rare", "medicinal"]
  },
  {
    id: 19,
    name: "Лапчатка белая",
    latin: "Potentilla alba",
    image: "https://images.pexels.com/photos/1407801/pexels-photo-1407801.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    fact: "Редкое растение, эффективное при заболеваниях щитовидной железы",
    properties: ["Тиреотропное", "Адаптогенное", "Иммуномодулирующее"],
    status: "Очень редкий вид",
    habitat: "Светлые леса",
    use: "Корневища при эндокринных нарушениях",
    category: ["rare", "medicinal"]
  },
  {
    id: 20,
    name: "Рапонтикум сафлоровидный",
    latin: "Rhaponticum carthamoides",
    image: "https://images.pexels.com/photos/1300520/pexels-photo-1300520.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    fact: "Содержит уникальные экдистероиды - растительные стероиды",
    properties: ["Анаболическое", "Адаптогенное", "Тонизирующее"],
    status: "Редкий вид",
    habitat: "Альпийские луга",
    use: "Спортивное питание, БАДы",
    category: ["rare", "medicinal"]
  }
];

// Вопросы для викторины
const quizQuestions = [
  {
    question: "Какое растение называют «золотым корнем»?",
    options: ["Родиола розовая", "Левзея сафлоровидная", "Элеутерококк", "Женьшень"],
    correct: 0
  },
  {
    question: "Сколько видов лекарственных растений используется в медицине в Бурятии?",
    options: ["5", "10", "15", "25"],
    correct: 2
  },
  {
    question: "Какой вкус НЕ имеют ягоды лимонника китайского?",
    options: ["Сладкий", "Кислый", "Мятный", "Горький"],
    correct: 2
  },
  {
    question: "Что означает статус «эндемик»?",
    options: ["Очень редкое растение", "Растение, встречающееся только в данном регионе", "Лекарственное растение", "Ядовитое растение"],
    correct: 1
  },
  {
    question: "Какое растение называют «сибирским женьшенем»?",
    options: ["Родиола розовая", "Элеутерококк колючий", "Левзея сафлоровидная", "Все перечисленные"],
    correct: 3
  },
  {
    question: "Сколько видов растений занесено в Красную книгу Бурятии?",
    options: ["15", "20", "25", "30"],
    correct: 2
  },
  {
    question: "Какое свойство НЕ характерно для адаптогенов?",
    options: ["Повышение выносливости", "Снотворное действие", "Укрепление иммунитета", "Антистрессовое действие"],
    correct: 1
  },
  {
    question: "Бадан толстолистный используется для:",
    options: ["Приготовления чая", "Лечения простуды", "Укрепления иммунитета", "Все перечисленное"],
    correct: 3
  },
  {
    question: "Какая часть растения чаще всего используется в лечебных целях у корневищных растений?",
    options: ["Листья", "Цветки", "Корневища", "Плоды"],
    correct: 2
  },
  {
    question: "Что такое фитотерапия?",
    options: ["Лечение животных", "Лечение растениями", "Изучение растений", "Выращивание растений"],
    correct: 1
  }
];

// Результаты персонального теста
const personalTestResults = {
  spring_medicine_calm: {
    plant: "Родиола розовая",
    image: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    description: "Как весенний цветок, вы обладаете мягкой силой. Родиола поможет вам сохранить спокойствие и энергию."
  },
  summer_beauty_energetic: {
    plant: "Лимонник китайский",
    image: "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    description: "Ваша энергичность как летнее солнце! Лимонник подарит вам бодрость и красоту."
  },
  autumn_cooking_wise: {
    plant: "Бадан толстолистный",
    image: "https://images.pexels.com/photos/1055379/pexels-photo-1055379.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    description: "Мудрость осени в вашем характере. Бадан - ваш чай мудрости и здоровья."
  },
  winter_nature_creative: {
    plant: "Пион уклоняющийся",
    image: "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    description: "Творческая натура с зимним спокойствием. Пион поможет раскрыть ваш потенциал."
  },
  default: {
    plant: "Элеутерококк колючий",
    image: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    description: "Вы универсальная личность! Элеутерококк подойдет для поддержания вашей активности."
  }
};

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeScrollEffects();
  initializePlantGallery();
  initializeQuiz();
  initializePersonalTest();
  initializeModals();
  initializeFilters();
  setupLazyLoading();
  animateHeroStats();
});

// Навигация
function initializeNavigation() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav__link');

  // Мобильное меню
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
  }

  // Закрытие меню при клике на ссылку
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });

  // Активная ссылка при скролле
  window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Эффекты при скролле
function initializeScrollEffects() {
  const nav = document.getElementById('nav');
  const progressBar = document.getElementById('progress-bar');
  const scrollTopBtn = document.getElementById('scroll-top');

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrolled / maxScroll) * 100;

    // Навигация
    if (scrolled > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Прогресс бар
    progressBar.style.width = scrollPercent + '%';

    // Кнопка наверх
    if (scrolled > 300) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }

    // Анимация элементов при скролле
    animateOnScroll();
  });

  // Кнопка наверх
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Анимация статистики в Hero
function animateHeroStats() {
  const heroStats = document.querySelectorAll('.hero__stat-number');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animatedStats) {
        animateCounters();
        animatedStats = true;
      }
    });
  });

  if (heroStats.length > 0) {
    observer.observe(heroStats[0]);
  }
}

// Плавный скролл к секции
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const offsetTop = section.offsetTop - 80;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  }
}

// Проверка видимости элемента
function isElementInViewport(el) {
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Анимация элементов при скролле
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
    
    if (isVisible) {
      element.classList.add('visible');
    }
  });
}

// Анимация счетчиков
function animateCounters() {
  const counters = document.querySelectorAll('.hero__stat-number');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const increment = target / 100;
    let current = 0;
    
    const updateCounter = () => {
      if (current < target) {
        current += increment;
        counter.textContent = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    
    updateCounter();
  });
}

// Фильтры растений
function initializeFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Удаляем активный класс у всех кнопок
      filterBtns.forEach(b => b.classList.remove('active'));
      // Добавляем активный класс к нажатой кнопке
      btn.classList.add('active');
      
      // Получаем фильтр
      const filter = btn.getAttribute('data-filter');
      currentFilter = filter;
      
      // Фильтруем растения
      filterPlants(filter);
    });
  });
}

// Фильтрация растений
function filterPlants(filter) {
  const plantCards = document.querySelectorAll('.plant-card');
  
  plantCards.forEach(card => {
    const plantId = parseInt(card.getAttribute('data-id'));
    const plant = plantsData.find(p => p.id === plantId);
    
    if (filter === 'all' || plant.category.includes(filter)) {
      card.style.display = 'block';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 100);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.display = 'none';
      }, 300);
    }
  });
}

// Галерея растений
function initializePlantGallery() {
  const plantsGrid = document.getElementById('plants-grid');
  
  plantsData.forEach(plant => {
    const plantCard = createPlantCard(plant);
    plantsGrid.appendChild(plantCard);
  });
}

function createPlantCard(plant) {
  const card = document.createElement('div');
  card.className = 'plant-card animate-on-scroll';
  card.setAttribute('data-id', plant.id);
  card.onclick = () => openPlantModal(plant);
  
  card.innerHTML = `
    <img src="${plant.image}" alt="${plant.name}" class="plant-card__image" loading="lazy">
    <div class="plant-card__status">${plant.status}</div>
    <div class="plant-card__content">
      <h3 class="plant-card__name">${plant.name}</h3>
      <p class="plant-card__latin">${plant.latin}</p>
      <p class="plant-card__fact">${plant.fact}</p>
    </div>
  `;
  
  return card;
}

// Модальные окна
function initializeModals() {
  const modal = document.getElementById('plant-modal');
  const closeBtn = document.getElementById('modal-close');
  
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

function openPlantModal(plant) {
  const modal = document.getElementById('plant-modal');
  const modalBody = document.getElementById('modal-body');
  
  modalBody.innerHTML = `
    <div class="modal-plant__header">
      <img src="${plant.image}" alt="${plant.name}" class="modal-plant__image">
      <div class="modal-plant__info">
        <h2>${plant.name}</h2>
        <p class="modal-plant__latin">${plant.latin}</p>
        <span class="modal-plant__status">${plant.status}</span>
        <p><strong>Ареал:</strong> ${plant.habitat}</p>
        <p><strong>Применение:</strong> ${plant.use}</p>
      </div>
    </div>
    <div class="modal-plant__properties">
      <h3>Лечебные свойства:</h3>
      <ul>
        ${plant.properties.map(prop => `<li>${prop}</li>`).join('')}
      </ul>
    </div>
    <p><strong>Интересный факт:</strong> ${plant.fact}</p>
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('plant-modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Викторина
function initializeQuiz() {
  loadQuestion();
}

function loadQuestion() {
  if (currentQuestionIndex >= quizQuestions.length) {
    showQuizResults();
    return;
  }
  
  const question = quizQuestions[currentQuestionIndex];
  const questionElement = document.getElementById('quiz-question');
  const optionsElement = document.getElementById('quiz-options');
  const progressBar = document.getElementById('quiz-progress');
  const currentQuestionSpan = document.getElementById('current-question');
  
  questionElement.textContent = question.question;
  currentQuestionSpan.textContent = currentQuestionIndex + 1;
  
  // Обновление прогресс бара
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
  progressBar.style.setProperty('--progress', progress + '%');
  
  optionsElement.innerHTML = '';
  question.options.forEach((option, index) => {
    const optionElement = document.createElement('div');
    optionElement.className = 'quiz-option';
    optionElement.textContent = option;
    optionElement.onclick = () => selectAnswer(index);
    optionsElement.appendChild(optionElement);
  });
}

function selectAnswer(selectedIndex) {
  const question = quizQuestions[currentQuestionIndex];
  const options = document.querySelectorAll('.quiz-option');
  const nextButton = document.getElementById('next-question');
  
  // Удаление предыдущих выборов
  options.forEach(option => {
    option.classList.remove('selected', 'correct', 'incorrect');
  });
  
  // Отметка выбранного ответа
  options[selectedIndex].classList.add('selected');
  
  // Показ правильного ответа
  options[question.correct].classList.add('correct');
  if (selectedIndex !== question.correct) {
    options[selectedIndex].classList.add('incorrect');
  } else {
    quizScore++;
  }
  
  selectedAnswers[currentQuestionIndex] = selectedIndex;
  
  // Отключение кликов
  options.forEach(option => {
    option.style.pointerEvents = 'none';
  });
  
  nextButton.style.display = 'block';
  nextButton.onclick = nextQuestion;
}

function nextQuestion() {
  currentQuestionIndex++;
  const nextButton = document.getElementById('next-question');
  nextButton.style.display = 'none';
  loadQuestion();
}

function showQuizResults() {
  const quizContent = document.getElementById('quiz-content');
  const quizResults = document.getElementById('quiz-results');
  const finalScore = document.getElementById('final-score');
  const scoreMessage = document.getElementById('score-message');
  
  quizContent.style.display = 'none';
  quizResults.style.display = 'block';
  
  finalScore.textContent = `${quizScore} из ${quizQuestions.length}`;
  
  let message = '';
  const percentage = (quizScore / quizQuestions.length) * 100;
  
  if (percentage >= 90) {
    message = 'Отлично! Вы настоящий эксперт по лекарственным растениям Бурятии!';
  } else if (percentage >= 70) {
    message = 'Хорошо! У вас хорошие знания о растениях региона.';
  } else if (percentage >= 50) {
    message = 'Неплохо! Есть над чем поработать, но базовые знания у вас есть.';
  } else {
    message = 'Стоит изучить тему глубже. Природа Бурятии очень богата!';
  }
  
  scoreMessage.textContent = message;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  quizScore = 0;
  selectedAnswers = [];
  
  const quizContent = document.getElementById('quiz-content');
  const quizResults = document.getElementById('quiz-results');
  const progressBar = document.getElementById('quiz-progress');
  
  quizContent.style.display = 'block';
  quizResults.style.display = 'none';
  
  progressBar.style.setProperty('--progress', '0%');
  
  loadQuestion();
}

// Персональный тест
function initializePersonalTest() {
  const form = document.getElementById('personal-test-form');
  form.addEventListener('submit', handlePersonalTest);
}

function handlePersonalTest(e) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const season = formData.get('season');
  const interest = formData.get('interest');
  const character = formData.get('character');
  
  if (!season || !interest || !character) {
    alert('Пожалуйста, ответьте на все вопросы');
    return;
  }
  
  const resultKey = `${season}_${interest}_${character}`;
  const result = personalTestResults[resultKey] || personalTestResults.default;
  
  showPersonalTestResult(result);
}

function showPersonalTestResult(result) {
  const testForm = document.getElementById('personal-test-form');
  const testResult = document.getElementById('test-result');
  const resultContent = document.getElementById('result-content');
  
  resultContent.innerHTML = `
    <img src="${result.image}" alt="${result.plant}" class="result-image">
    <div>
      <h4>${result.plant}</h4>
      <p>${result.description}</p>
    </div>
  `;
  
  testForm.style.display = 'none';
  testResult.style.display = 'block';
}

// Lazy loading для изображений
function setupLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }
}

// Утилиты
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Дополнительные анимации
function addScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// Инициализация всех анимаций
document.addEventListener('DOMContentLoaded', () => {
  addScrollAnimations();
});

// Экспорт функций для глобального использования
window.scrollToSection = scrollToSection;
window.openPlantModal = openPlantModal;
window.restartQuiz = restartQuiz;