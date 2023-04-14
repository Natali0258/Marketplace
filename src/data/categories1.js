const categories = [
   {
      id: 1,
      name: "Одежда и обувь",
      subcategories: [
         {
            id: 11,
            name: "Обувь",
            subcategories: [
               {
                  id: 111,
                  name: "Женская",
                  subcategories: [
                     {
                        id: 1111,
                        name: "Туфли",
                     },
                     {
                        id: 1112,
                        name: "Сапоги",
                     },
                     {
                        id: 1113,
                        name: "Кроссовки",
                     },
                     {
                        id: 1114,
                        name: "Босоножки",
                     }
                  ]
               },
               {
                  id: 112,
                  name: "Мужская",
                  subcategories: [
                     {
                        id: 1121,
                        name: "Туфли",
                     },
                     {
                        id: 1122,
                        name: "Сапоги",
                     },
                     {
                        id: 1123,
                        name: "Кроссовки",
                     }
                  ]
               },
               {
                  id: 113,
                  name: "Ортопедическая",
                  subcategories: []
               }
            ]
         },
         {
            id: 12,
            name: "Одежда",
            subcategories: [
               {
                  id: 121,
                  name: "Женская",
                  subcategories: [
                     {
                        id: 1211,
                        name: "Блузки и рубашки"
                     },
                     {
                        id: 1212,
                        name: "Брюки"
                     },
                     {
                        id: 1213,
                        name: "Джинсы"
                     },
                     {
                        id: 1214,
                        name: "Костюмы"
                     },
                     {
                        id: 1215,
                        name: "Платья"
                     },
                     {
                        id: 1216,
                        name: "Юбки"
                     },
                     {
                        id: 1217,
                        name: "Футболки"
                     }
                  ]
               },
               {
                  id: 122,
                  name: "Мужская",
                  subcategories: [
                     {
                        id: 1221,
                        name: "Рубашки"
                     },
                     {
                        id: 1222,
                        name: "Брюки"
                     },
                     {
                        id: 1223,
                        name: "Джинсы"
                     },
                     {
                        id: 1224,
                        name: "Костюмы"
                     },
                     {
                        id: 1225,
                        name: "Футболки"
                     },
                     {
                        id: 1226,
                        name: "Толстовки"
                     }
                  ]
               }
            ]
         }
      ]
   },
   {
      id: 2,
      name: "Электроника",
      subcategories: [
         {
            id: 21,
            name: "Смартфоны и гаджеты",
            subcategories: [
               {
                  id: 211,
                  name: "Смартфоны"
               },
               {
                  id: 212,
                  name: "Смарт-часы"
               },
               {
                  id: 213,
                  name: "Чехлы и браслеты",
                  subcategories: [
                     {
                        id: 2131,
                        name: "Чехлы"
                     },
                     {
                        id: 2132,
                        name: "Браслеты"
                     }
                  ]
               }
            ]
         },
         {
            id: 22,
            name: "Компьютеры и ПО",
            subcategories: [
               {
                  id: 221,
                  name: "Компьютеры"
               },
               {
                  id: 222,
                  name: "Мониторы"
               },
               {
                  id: 223,
                  name: "Програмное обеспечение"
               }
            ]
         },
         {
            id: 23,
            name: "Ноутбуки"
         }
      ]
   },
   {
      id: 3,
      name: "Детские товары",
      subcategories: [
         {
            id: 31,
            name: "Игрушки",
            subcategories: []
         },
         {
            id: 32,
            name: "Одежда",
            subcategories: [
               {
                  id: 321,
                  name: "Для девочек",
                  subcategories: [
                     {
                        id: 3211,
                        name: "Блузки и рубашки"
                     },
                     {
                        id: 3212,
                        name: "Брюки"
                     },
                     {
                        id: 3213,
                        name: "Джинсы"
                     },
                     {
                        id: 3214,
                        name: "Костюмы"
                     },
                     {
                        id: 3215,
                        name: "Платья"
                     },
                     {
                        id: 3216,
                        name: "Юбки"
                     }
                  ]
               },
               {
                  id: 322,
                  name: "Для мальчиков",
                  subcategories: [
                     {
                        id: 3221,
                        name: "Рубашки"
                     },
                     {
                        id: 3222,
                        name: "Брюки"
                     },
                     {
                        id: 3223,
                        name: "Джинсы"
                     },
                     {
                        id: 3224,
                        name: "Костюмы"
                     },
                     {
                        id: 3225,
                        name: "Футболки"
                     },
                     {
                        id: 3226,
                        name: "Толстовки"
                     }
                  ]
               },
               {
                  id: 323,
                  name: "Для новорожденных",
                  subcategories: []
               }
            ]
         },
         {
            id: 33,
            name: "Обувь",
            subcategories: [
               {
                  id: 331,
                  name: "Для девочек",
                  subcategories: [
                     {
                        id: 3311,
                        name: "Туфли",
                     },
                     {
                        id: 3312,
                        name: "Сапоги",
                     },
                     {
                        id: 3313,
                        name: "Кроссовки",
                     },
                     {
                        id: 3314,
                        name: "Босоножки",
                     }
                  ]
               },
               {
                  id: 332,
                  name: "Для мальчиков",
                  subcategories: [
                     {
                        id: 3321,
                        name: "Туфли",
                     },
                     {
                        id: 3322,
                        name: "Сапоги",
                     },
                     {
                        id: 3323,
                        name: "Кроссовки",
                     }
                  ]
               }
            ]
         },
         {
            id: 34,
            name: "Товары для новорожденных",
            subcategories: []
         }
      ]
   },
   {
      id: 4,
      name: "Бытовая техника",
      subcategories: [
         {
            id: 41,
            name: "Пылесосы",
            subcategories: [
               {
                  id: 411,
                  name: "Напольные пылесосы"
               },
               {
                  id: 412,
                  name: "Роботы-пылесосы"
               }
            ]
         },
         {
            id: 42,
            name: "Холодильное оборудование",
            subcategories: [
               {
                  id: 421,
                  name: "Встраиваемые холодильники"
               },
               {
                  id: 422,
                  name: "Холодильники"
               },
               {
                  id: 423,
                  name: "Морозильные камеры"
               },
            ]
         },
         {
            id: 43,
            name: "Телевизоры и аксессуары",
            subcategories: [
               {
                  id: 431,
                  name: "Телевизоры"
               },
               {
                  id: 432,
                  name: "Проекторы"
               },
               {
                  id: 433,
                  name: "Аксессуары для телевизоров"
               }
            ]
         },
         {
            id: 44,
            name: "Плиты и печи",
            subcategories: [
               {
                  id: 441,
                  name: "Плиты электрические"
               },
               {
                  id: 442,
                  name: "Плиты газовые"
               },
               {
                  id: 443,
                  name: "СВЧ-печи"
               }
            ]
         }
      ]
   },
   {
      id: 5,
      name: "Строительство и ремонт",
      subcategories: []
   },
   {
      id: 6,
      name: "Дом",
      subcategories: []
   }
]
// const categories = [
//    {
//       id: 1, name: "Одежда и обувь", subcategories: [
//          { id: 11, name: "Обувь" },
//          { id: 12, name: "Одежда" }
//       ]
//    },
//    {
//       id: 2, name: "Электроника", subcategories: [
//          { id: 21, name: "Смартфоны и гаджеты" },
//          { id: 22, name: "Компьютеры и ПО" },
//          { id: 23, name: "Ноутбуки" }
//       ]
//    },
//    {
//       id: 3, name: "Детские товары", subcategories: [
//          { id: 31, name: "Игрушки" },
//          { id: 32, name: "Одежда" },
//          { id: 33, name: "Обувь" }
//       ]
//    },
//    {
//       id: 4, name: "Бытовая техника", subcategories: [
//          { id: 41, name: "Пылесосы" },
//          { id: 42, name: "Холодильники" },
//          { id: 43, name: "Телевизоры" },
//          { id: 44, name: "СВЧ-печи" }
//       ]
//    }
// ];
export default categories;