    // Скрипт для добавления карточек
const cardsData = {
  card_1: {
    id: "card_1",
    title: "Самый первый цветочек",
    buryatName: "Хубуун",
    scientificName: "Flos prima",
    image: "https://avatars.mds.yandex.net/i?id=6471c66f819533161e13fc0e7bb0b420_l-10532251-images-thumbs&n=13",
    fact: "Самые мелкие цветки растений семейства Рясковые имеют в диаметре всего около 1 мм.",
    modalContent: {
      fullDescription: "Цвето́к (множ. цветки́, лат. flos, -oris, др.-греч. ἄνθος, -ου) — система органов семенного размножения цветковых (покрытосеменных) растений...",
      sketchfabEmbed: `<div class="sketchfab-embed-wrapper">
  <iframe title="Пример цветка" 
          frameborder="0"
          allowfullscreen 
          mozallowfullscreen="true" 
          webkitallowfullscreen="true"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          xr-spatial-tracking 
          execution-while-out-of-viewport 
          execution-while-not-rendered 
          web-share 
          src="https://sketchfab.com/models/b8a2279c5af74b2586bdad3a4cc08bee/embed?autospin=1&autostart=1">
  </iframe>
</div>`,
      herbariumLink: "https://elib.bgsha.ru/index.php?option=com_content&view=article&id=12&Itemid=549",
      habitat: "Встречается в предгорьях Восточных Саян...",
      properties: ["Противовоспалительное средство", "Источник витамина C"],
      facts: {
        height: "15-30 см",
        blooming: "Май-Июнь"
      },
      status: "Не охраняется (LC)"
    }
  },
  // Добавьте остальные карточки по аналогии
  card_2: {
    id: "card_2",
    title: "Второй цветок",
    buryatName: "Цэцэг",
    scientificName: "Flos secundus",
    image: "https://example.com/image2.jpg",
    fact: "Интересный факт о втором цветке.",
    modalContent: {
      fullDescription: "Описание второго цветка...",
      sketchfabEmbed: `<div class="sketchfab-embed-wrapper">...</div>`,
      habitat: "Место обитания...",
      properties: ["Свойство 1", "Свойство 2"],
      facts: {
        height: "20-40 см",
        blooming: "Июнь-Июль"
      },
      status: "Редкий вид"
    }
  }
};

// Функции для работы с данными
export function getCardData(cardId) {
  return cardsData[cardId];
}

export function getAllCardIds() {
  return Object.keys(cardsData);
}