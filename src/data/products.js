const products = {
   products: [
      {
         id: 1,
         images: ["t-shirts/t-shirts-1.png",
            "t-shirts/t-shirts-1-1.png",
            "t-shirts/t-shirts-1-2.png",
            "t-shirts/t-shirts-1-3.png",
            "t-shirts/t-shirts-1-4.png"],
         name: "Футболка 5 цветов",
         price: 999.99,
         size: ['44', '46', '48', '50'],
         compound: "хлопок 100%",
         brend: "TOMMY JEANS",
         descriptions: "Футболка 100%, хлопок, мужская",
         category: "Футболки",
         feedbacks: [
            {
               id: 1,
               boyerName: "Светлана",
               text: "Хорошая футболка, идёт в размер. Соответствует описанию. Качество отличное. Соответствует описанию. Качество отличное. Соответствует описанию. Качество отличное. Соответствует описанию. Качество отличное. Соответствует описанию. Качество отличное. Соответствует описанию. Качество отличное. Соответствует описанию. Качество отличное.Соответствует описанию. Качество отличное. Соответствует описанию. Качество отличное. Соответствует описанию. Качество отличное. Соответствует описанию. Качество отличное. Соответствует описанию. Качество отличное. Соответствует описанию. Качество отличное. Соответствует описанию. Качество отличное. ",
               photos: ["t-shirts/photo-user-1.png",
                  "t-shirts/photo-user-2.png"]
            },
            {
               id: 2,
               boyerName: "Наталья",
               text: "Соответствует описанию. Качество отличное.",
               photos: ["t-shirts/photo-user-3.png"]
            },
            {
               id: 3,
               boyerName: "Юлия",
               text: "Неплохая хлопковая футболка. Швы аккуратные, качественная, муж доволен.",
               photos: []
            },
            {
               id: 4,
               boyerName: "Татьяна",
               text: "Шикарный, насыщенный цвет. Качество хорошее. Не очень плотная, для жаркой погоды.",
               photos: []
            },
            {
               id: 5,
               boyerName: "Елена",
               text: "Футболка супер-хорошего качества, нитки нигде не трочат, швы ровные, хлопок плотный.",
               photos: []
            }
         ]
      },
      {
         id: 2,
         images: ["smart-watch/smartwatch-1.jpg"],
         name: "Смарт-часы белые",
         price: 1000.30,
         size: ['40x50 мм'],
         compound: "пластик, стекло",
         brend: " ",
         descriptions: "Смарт-часы белые",
         category: "Смарт-часы",
         feedbacks: [
            {
               id: 1,
               boyerName: "Светлана",
               text: "всё отлично, спасибо",
               photos: []
            },
            {
               id: 2,
               boyerName: "Наталья",
               text: "Хороший товар",
               photos: []
            }
         ]
      },
      {
         id: 3,
         images: ["dresses/platya-9.jpg"],
         name: "Платье синее с вырезом",
         price: 999.99,
         size: ['44', '46', '48', '50'],
         compound: "эластан 5%, вискоза 52%, полиэстер 43%",
         brend: "Gerry Weber",
         descriptions: "Платье синее с вырезом",
         category: "Dresses",
         feedbacks: [
            {
               id: 1,
               boyerName: "Светлана",
               text: "всё отлично, спасибо",
               photos: []
            },
            {
               id: 2,
               boyerName: "Наталья",
               text: "Хороший товар",
               photos: []
            }
         ]
      },
      {
         id: 4,
         images: ["dresses/platya-2.jpg"],
         name: "Платье черное",
         price: 1000.00,
         size: ['44', '46', '48', '50'],
         compound: "эластан 5%, вискоза 52%, полиэстер 43%",
         brend: " ",
         descriptions: "Платье черное короткое",
         category: "Платья",
         feedbacks: [
            {
               id: 1,
               boyerName: "Светлана",
               text: "всё отлично, спасибо",
               photos: []
            },
            {
               id: 2,
               boyerName: "Наталья",
               text: "Хороший товар",
               photos: []
            },
            {
               id: 3,
               boyerName: "Юлия",
               text: "Качество хорошее",
               photos: []
            }
         ]
      },
      {
         id: 5,
         images: ["smartphone/smartphone-3.png"],
         name: "Lenovo",
         price: 1000.00,
         size: ['165 x 71 x 8,2 мм'],
         compound: "пластик, стекло",
         brend: "Lenovo",
         descriptions: "Смартфон Lenovo черный",
         category: "Смартфоны",
         feedbacks: [
            {
               id: 1,
               boyerName: "Светлана",
               text: "всё отлично, спасибо",
               photos: []
            },
            {
               id: 2,
               boyerName: "Наталья",
               text: "Хороший товар",
               photos: []
            },
            {
               id: 3,
               boyerName: "Юлия",
               text: "Качество хорошее",
               photos: []
            },
            {
               id: 4,
               boyerName: "Владимир",
               text: "Класс спасибо",
               photos: []
            }
         ]
      },
      {
         id: 6,
         images: ["dresses/platya-6.jpg"],
         name: "Платье черное",
         price: 1000.00,
         size: ['44', '46', '48', '50'],
         compound: "эластан 5%, вискоза 52%, полиэстер 43%",
         brend: "",
         descriptions: "Платье черное",
         category: "Платья",
         feedbacks: [
            {
               id: 1,
               boyerName: "Светлана",
               text: "всё отлично, спасибо",
               photos: []
            },
            {
               id: 2,
               boyerName: "Наталья",
               text: "Хороший товар",
               photos: []
            },
            {
               id: 3,
               boyerName: "Юлия",
               text: "Качество хорошее",
               photos: []
            }
         ]
      },
      {
         id: 7,
         images: ["dresses/platya-7.jpg"],
         name: "Платье длинное",
         price: 1000.00,
         size: ['44', '46', '48', '50'],
         compound: "эластан 5%, вискоза 52%, полиэстер 43%",
         brend: "",
         descriptions: "Платье длинное, блеск",
         category: "Платья",
         feedbacks: [
            {
               id: 1,
               boyerName: "Светлана",
               text: "всё отлично, спасибо",
               photos: []
            }
         ]
      },
      {
         id: 8,
         images: ["dresses/platya-8.jpg"],
         name: "Платье синее",
         price: 1000.00,
         size: ['44', '46', '48', '50'],
         compound: "эластан 5%, вискоза 52%, полиэстер 43%",
         brend: "",
         descriptions: "Платье синее длинное",
         category: "Платья",
         feedbacks: [
            {
               id: 1,
               boyerName: "Светлана",
               text: "всё отлично, спасибо",
               photos: []
            },
            {
               id: 2,
               boyerName: "Наталья",
               text: "Хороший товар",
               photos: []
            },
            {
               id: 3,
               boyerName: "Юлия",
               text: "Качество хорошее",
               photos: []
            },
            {
               id: 4,
               boyerName: "Татьяна",
               text: "Класс спасибо",
               photos: []
            }
         ]
      },
      {
         id: 9,
         images: ["dresses/platya-3.jpg"],
         name: "Платье зеленое",
         price: 1000.00,
         size: ['44', '46', '48', '50'],
         compound: "эластан 5%, вискоза 52%, полиэстер 43%",
         brend: "",
         descriptions: "Платье зеленое короткое",
         category: "Платья",
         feedbacks: [
            {
               id: 1,
               boyerName: "Светлана",
               text: "всё отлично, спасибо",
               photos: []
            },
            {
               id: 2,
               boyerName: "Наталья",
               text: "Хороший товар",
               photos: []
            },
            {
               id: 3,
               boyerName: "Юлия",
               text: "Качество хорошее",
               photos: []
            },
            {
               id: 4,
               boyerName: "Татьяна",
               text: "Класс спасибо",
               photos: []
            }
         ]
      },
      {
         id: 10,
         images: ["dresses/platya-10.jpg"],
         name: "Платье красное",
         price: 1000.00,
         size: ['44', '46', '48', '50'],
         compound: "эластан 5%, вискоза 52%, полиэстер 43%",
         brend: "",
         descriptions: "Платье красное с пышной юбкой",
         category: "Платья",
         feedbacks: [
            {
               id: 1,
               boyerName: "Светлана",
               text: "всё отлично, спасибо",
               photos: []
            },
            {
               id: 2,
               boyerName: "Наталья",
               text: "Хороший товар",
               photos: []
            },
            {
               id: 3,
               boyerName: "Юлия",
               text: "Качество хорошее",
               photos: []
            },
            {
               id: 4,
               boyerName: "Татьяна",
               text: "Класс спасибо",
               photos: []
            }
         ]
      },
      {
         id: 11,
         images: ["dresses/platya-11.jpg"],
         name: "Платье белое",
         price: 1000.00,
         size: ['44', '46', '48', '50'],
         compound: "эластан 5%, вискоза 52%, полиэстер 43%",
         brend: "",
         descriptions: "Платье белое короткое",
         category: "Платья",
         feedbacks: [
            {
               id: 1,
               boyerName: "Светлана",
               text: "всё отлично, спасибо",
               photos: []
            },
            {
               id: 2,
               boyerName: "Наталья",
               text: "Хороший товар",
               photos: []
            },
            {
               id: 3,
               boyerName: "Юлия",
               text: "Качество хорошее",
               photos: []
            },
            {
               id: 4,
               boyerName: "Татьяна",
               text: "Класс спасибо",
               photos: []
            }
         ]
      },
      {
         id: 12,
         images: ["dresses/platya-4.jpg"],
         name: "Платье черное",
         price: 1000.00,
         size: ['44', '46', '48', '50'],
         compound: "эластан 5%, вискоза 52%, полиэстер 43%",
         brend: "",
         descriptions: "Платье черное короткое",
         category: "Платья",
         feedbacks: [
            {
               id: 1,
               boyerName: "Светлана",
               text: "всё отлично, спасибо",
               photos: []
            },
            {
               id: 2,
               boyerName: "Наталья",
               text: "Хороший товар",
               photos: []
            },
            {
               id: 3,
               boyerName: "Юлия",
               text: "Качество хорошее",
               photos: []
            },
            {
               id: 4,
               boyerName: "Татьяна",
               text: "Класс спасибо",
               photos: []
            }
         ]
      },
      {
         id: 13,
         images: ["smartphone/smartphone-2.png"],
         name: "Sony",
         price: 1000.00,
         size: ['165 x 71 x 8,2 мм'],
         compound: "пластик, стекло",
         brend: "Sony",
         descriptions: "Смартфон Sony черный",
         category: "Смартфоны",
         feedbacks: [
            {
               id: 1,
               boyerName: "Светлана",
               text: "всё отлично, спасибо",
               photos: []
            },
            {
               id: 2,
               boyerName: "Наталья",
               text: "Хороший товар",
               photos: []
            },
            {
               id: 3,
               boyerName: "Юлия",
               text: "Качество хорошее",
               photos: []
            },
            {
               id: 4,
               boyerName: "Владимир",
               text: "Класс спасибо",
               photos: []
            }
         ]
      },
      {
         id: 14,
         images: ["dresses/platya-5.jpg"],
         name: "Платье золотое",
         price: 1000.00,
         size: ['44', '46', '48', '50'],
         compound: "эластан 5%, вискоза 52%, полиэстер 43%",
         brend: "",
         descriptions: "Платье золотое длинное",
         category: "Платья",
         feedbacks: [
            {
               id: 1,
               boyerName: "Светлана",
               text: "всё отлично, спасибо",
               photos: []
            },
            {
               id: 2,
               boyerName: "Наталья",
               text: "Хороший товар",
               photos: []
            },
            {
               id: 3,
               boyerName: "Юлия",
               text: "Качество хорошее",
               photos: []
            },
            {
               id: 4,
               boyerName: "Татьяна",
               text: "Класс спасибо",
               photos: []
            }
         ]
      },
      {
         id: 15,
         images: ["smartphone/smartphone-4.png"],
         name: "Smartphone",
         price: 1000.00,
         size: ['165 x 71 x 8,2 мм'],
         compound: "пластик, стекло",
         brend: "",
         descriptions: "Смартфон черный",
         category: "Смартфоны",
         feedbacks: [
            {
               id: 1,
               boyerName: "Светлана",
               text: "всё отлично, спасибо",
               photos: []
            },
            {
               id: 2,
               boyerName: "Наталья",
               text: "Хороший товар",
               photos: []
            },
            {
               id: 3,
               boyerName: "Юлия",
               text: "Качество хорошее",
               photos: []
            },
            {
               id: 4,
               boyerName: "Владимир",
               text: "Класс спасибо",
               photos: []
            }
         ]
      },
      {
         id: 16,
         images: ["smartphone/smartphone-1.png"],
         name: "Philips",
         price: 1000.00,
         size: ['165 x 71 x 8,2 мм'],
         compound: "пластик, стекло",
         brend: "Philips",
         descriptions: "Смартфон Philips черный",
         category: "Смартфоны",
         feedbacks: [
            {
               id: 1,
               boyerName: "Светлана",
               text: "всё отлично, спасибо",
               photos: []
            },
            {
               id: 2,
               boyerName: "Наталья",
               text: "Хороший товар",
               photos: []
            },
            {
               id: 3,
               boyerName: "Юлия",
               text: "Качество хорошее",
               photos: []
            },
            {
               id: 4,
               boyerName: "Владимир",
               text: "Класс спасибо",
               photos: []
            }
         ]
      },
      {
         id: 17,
         images: ["computer/computer-1.png"],
         name: "Компьютер",
         price: 1000.00,
         size: ['190 x 482 x 820'],
         compound: "пластик, стекло",
         brend: "SUMSUNG",
         descriptions: "Компьютер",
         category: "Комрьютеры и ПО",
         feedbacks: [
            {
               id: 1,
               boyerName: "Светлана",
               text: "всё отлично, спасибо",
               photos: []
            },
            {
               id: 2,
               boyerName: "Наталья",
               text: "Хороший товар",
               photos: []
            },
            {
               id: 3,
               boyerName: "Юлия",
               text: "Качество хорошее",
               photos: []
            },
            {
               id: 4,
               boyerName: "Владимир",
               text: "Класс спасибо",
               photos: []
            }
         ]
      },
      {
         id: 18,
         images: ["computer/computer-2.png"],
         name: "Компьютер",
         price: 1000.00,
         size: ['190 x 482 x 820'],
         compound: "пластик, стекло",
         descriptions: "Компьютер",
         brend: "SUMSUNG",
         category: "Комрьютеры и ПО",
         feedbacks: [
            {
               id: 1,
               boyerName: "Светлана",
               text: "всё отлично, спасибо",
               photos: []
            },
            {
               id: 2,
               boyerName: "Наталья",
               text: "Хороший товар",
               photos: []
            },
            {
               id: 3,
               boyerName: "Юлия",
               text: "Качество хорошее",
               photos: []
            },
            {
               id: 4,
               boyerName: "Владимир",
               text: "Класс спасибо",
               photos: []
            }
         ]
      },
      {
         id: 19,
         images: ["monitor/monitor-1.png"],
         name: "Монитор",
         price: 1000.00,
         brend: "SUMSUNG",
         size: ['559.5 x 613.1 x 234.2 мм', '257.9 x 98.4 x 165.4'],
         compound: "пластик, стекло",
         descriptions: "Монитор",
         category: "Комрьютеры и ПО",
         feedbacks: [
            {
               id: 1,
               boyerName: "Светлана",
               text: "всё отлично, спасибо",
               photos: []
            },
            {
               id: 2,
               boyerName: "Наталья",
               text: "Хороший товар",
               photos: []
            },
            {
               id: 3,
               boyerName: "Юлия",
               text: "Качество хорошее",
               photos: []
            },
            {
               id: 4,
               boyerName: "Владимир",
               text: "Класс спасибо",
               photos: []
            }
         ]
      },
      {
         id: 20,
         images: ["monitor/monitor-2.png"],
         name: "Монитор",
         price: 1000.00,
         brend: "SUMSUNG",
         size: ['559.5 x 613.1 x 234.2 мм'],
         compound: "пластик, стекло",
         descriptions: "Монитор",
         category: "Комрьютеры и ПО",
         feedbacks: [
            {
               id: 1,
               boyerName: "Светлана",
               text: "всё отлично, спасибо",
               photos: []
            },
            {
               id: 2,
               boyerName: "Наталья",
               text: "Хороший товар",
               photos: []
            },
            {
               id: 3,
               boyerName: "Юлия",
               text: "Качество хорошее",
               photos: []
            },
            {
               id: 4,
               boyerName: "Владимир",
               text: "Класс спасибо",
               photos: []
            }
         ]
      },
      {
         id: 21,
         images: ["t-shirts/t-shirts-21.png"],
         name: "Футболка с рисунком черная мужская",
         price: 999.99,
         size: ['44', '46', '48', '50'],
         compound: "хлопок 100%",
         brend: "",
         descriptions: "Футболка - это обязательный предмет базового гардероба. Изготовлена из 100% хлопка.",
         category: "Футболки",
         feedbacks: [
            {
               id: 1,
               boyerName: "Светлана",
               text: "всё отлично, спасибо",
               photos: []
            },
            {
               id: 2,
               boyerName: "Наталья",
               text: "Хороший товар",
               photos: []
            },
            {
               id: 3,
               boyerName: "Юлия",
               text: "Качество хорошее",
               photos: []
            },
            {
               id: 4,
               boyerName: "Владимир",
               text: "Класс спасибо",
               photos: []
            }
         ]
      },
      {
         id: 22,
         images: ["t-shirts/t-shirts-22.png"],
         name: "Футболка белая мужская",
         price: 1000.00,
         size: ['44', '46', '48', '50'],
         compound: "хлопок 100%",
         brend: "",
         descriptions: "Футболка мужская",
         category: "Футболки",
         feedbacks: [
            {
               id: 1,
               boyerName: "Светлана",
               text: "всё отлично, спасибо",
               photos: []
            },
            {
               id: 2,
               boyerName: "Наталья",
               text: "Хороший товар",
               photos: []
            },
            {
               id: 3,
               boyerName: "Юлия",
               text: "Качество хорошее",
               photos: []
            },
            {
               id: 4,
               boyerName: "Владимир",
               text: "Класс спасибо",
               photos: []
            }
         ]
      },
      {
         id: 23,
         images: ["t-shirts/t-shirts-23.png",
            "t-shirts/t-shirts-23-1.png",
            "t-shirts/t-shirts-23-2.png"],
         name: "Футболка 3 цвета, женская",
         price: 1000.00,
         size: ['44', '46', '48', '50'],
         compound: "хлопок 100%",
         brend: "",
         descriptions: "Футболка женская",
         category: "T-shirts",
         feedbacks: [
            {
               id: 1,
               boyerName: "Светлана",
               text: "всё отлично, спасибо",
               photos: []
            },
            {
               id: 2,
               boyerName: "Наталья",
               text: "Хороший товар",
               photos: []
            },
            {
               id: 3,
               boyerName: "Юлия",
               text: "Качество хорошее",
               photos: []
            },
            {
               id: 4,
               boyerName: "Владимир",
               text: "Класс спасибо",
               photos: []
            }
         ]
      },
   ]
}
export default products;