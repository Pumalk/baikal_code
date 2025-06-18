// cards-data.js
const cardsData = {
  card_1: {
    id: "card_1",
    title: "Самый первый цветочек",
    buryatName: "Хубуун",
    scientificName: "Flos prima",
    image: "https://avatars.mds.yandex.net/i?id=6471c66f819533161e13fc0e7bb0b420_l-10532251-images-thumbs&n=13",
    fact: "Цвето́к (множ. цветки́, лат. flos, -oris, др.-греч. ἄνθος, -ου) — система органов семенного размножения цветковых (покрытосеменных) растений...",
    modalContent: {
      habitat: "Встречается в предгорьях Восточных Саян, на альпийских лугах Бурятии",
      properties: [
        "Противовоспалительное средство",
        "Источник витамина C",
        "Компонент тонизирующих чаев"
      ],
      facts: {
        height: "15-30 см",
        blooming: "Май-Июнь",
        seeds: "120-150 шт",
        age: "~2 млн лет"
      },
      status: {
        level: "Не охраняется",
        code: "LC",
        description: "Вид широко распространён, но сбор в коммерческих целях запрещён"
      }
    }
  },
  card_2: {
    id: "card_2",
    title: "Второй цветок",
    buryatName: "Цэцэг",
    scientificName: "Flora secunda",
    image: "./Scroll-driven Animations_ Stacking Cards (CSS)_files/img-2.jpg",
    fact: "Интересный факт о втором цветке...",
    modalContent: {
      // ... аналогичная структура данных
    }
  }
  // ... остальные карточки до card_20
};

// Функции для доступа к данным
export function getCardData(cardId) {
  return cardsData[cardId];
}

export function getAllCardIds() {
  return Object.keys(cardsData);
}