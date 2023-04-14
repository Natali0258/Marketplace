const categories = {
   category1: [
      {
         id: 1,
         name: "Одежда и обувь"
      },
      {
         id: 2,
         name: "Электроника"
      },
      {
         id: 3,
         name: "Детские товары"
      },
      {
         id: 4,
         name: "Бытовая техника"
      },
      {
         id: 5,
         name: "Строительство и ремонт"
      },
      {
         id: 6,
         name: "Дом"
      }
   ],
   category2: [
      {
         id: 11,
         name: "Обувь",
         category1: "Одежда и обувь"
      },
      {
         id: 12,
         name: "Одежда",
         category1: "Одежда и обувь"
      },
      {
         id: 21,
         name: "Смартфоны и гаджеты",
         category1: "Электроника"
      },
      {
         id: 22,
         name: "Комрьютеры и ПО",
         category1: "Электроника"
      },
      {
         id: 23,
         name: "Ноутбуки",
         category1: "Электроника"
      }
   ],
   category3: [
      {
         id: 111,
         name: "Детская",
         category1: "Одежда и обувь",
         category2: "Обувь",
      },
      {
         id: 112,
         name: "Женская",
         category1: "Одежда и обувь",
         category2: "Обувь",
      },
      {
         id: 113,
         name: "Мужская",
         category1: "Одежда и обувь",
         category2: "Обувь",
      },
      {
         id: 114,
         name: "Ортопедическая",
         category1: "Одежда и обувь",
         category2: "Обувь",
      },
      {
         id: 121,
         name: "Детская",
         category1: "Одежда и обувь",
         category2: "Одежда",
      },
      {
         id: 122,
         name: "Женская",
         category1: "Одежда и обувь",
         category2: "Одежда",
      },
      {
         id: 123,
         name: "Мужская",
         category1: "Одежда и обувь",
         category2: "Одежда",
      },
      {
         id: 211,
         name: "Смартфоны",
         category1: "Электроника",
         category2: "Смартфоны и гаджеты",
      },
      {
         id: 212,
         name: "Смарт-часы",
         category1: "Электроника",
         category2: "Смартфоны и гаджеты",
      },
      {
         id: 213,
         name: "Чехлы и браслеты",
         category1: "Электроника",
         category2: "Смартфоны и гаджеты",
      },
      {
         id: 221,
         name: "Компьютеры",
         category1: "Электроника",
         category2: "Комрьютеры и ПО",
      },
      {
         id: 222,
         name: "Мониторы",
         category1: "Электроника",
         category2: "Комрьютеры и ПО",
      },
      {
         id: 223,
         name: "Програмное обеспечение",
         category1: "Электроника",
         category2: "Комрьютеры и ПО",
      }
   ],
   category4: [
      {
         id: 1211,
         name: "Для девочек",
         category1: "Одежда и обувь",
         category2: "Одежда",
         category3: "Детская",
      },
      {
         id: 1211,
         name: "Для девочек",
         category1: "Одежда и обувь",
         category2: "Одежда",
         category3: "Детская",
      },
      {
         id: 1212,
         name: "Для мальчиков",
         category1: "Одежда и обувь",
         category2: "Одежда",
         category3: "Детская",
      },
      {
         id: 1213,
         name: "Для новорожденных",
         category1: "Одежда и обувь",
         category2: "Одежда",
         category3: "Детская",
      },
      {
         id: 1221,
         name: "Блузки и рубашки",
         category1: "Одежда и обувь",
         category2: "Одежда",
         category3: "Женская",
      },
      {
         id: 1222,
         name: "Брюки",
         category1: "Одежда и обувь",
         category2: "Одежда",
         category3: "Женская",
      },
      {
         id: 1223,
         name: "Джинсы",
         category1: "Одежда и обувь",
         category2: "Одежда",
         category3: "Женская",
      },
      {
         id: 1224,
         name: "Костюмы",
         category1: "Одежда и обувь",
         category2: "Одежда",
         category3: "Женская",
      },
      {
         id: 1225,
         name: "Платья",
         category1: "Одежда и обувь",
         category2: "Одежда",
         category3: "Женская",
      },
      {
         id: 1226,
         name: "Юбки",
         category1: "Одежда и обувь",
         category2: "Одежда",
         category3: "Женская",
      },
      {
         id: 1231,
         name: "Рубашки",
         category1: "Одежда и обувь",
         category2: "Одежда",
         category3: "Мужская",
      },
      {
         id: 1232,
         name: "Брюки",
         category1: "Одежда и обувь",
         category2: "Одежда",
         category3: "Мужская",
      },
      {
         id: 1233,
         name: "Джинсы",
         category1: "Одежда и обувь",
         category2: "Одежда",
         category3: "Мужская",
      },
      {
         id: 1234,
         name: "Костюмы",
         category1: "Одежда и обувь",
         category2: "Одежда",
         category3: "Мужская",
      },
      {
         id: 1235,
         name: "Футболки",
         category1: "Одежда и обувь",
         category2: "Одежда",
         category3: "Мужская",
      },
      {
         id: 1236,
         name: "Толстовки",
         category1: "Одежда и обувь",
         category2: "Одежда",
         category3: "Мужская",
      }
   ]
}
export default categories;