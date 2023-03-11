const categories = {
   category1: [
      {
         key: "Clothes and shoes",
         name: "Одежда и обувь"
      },
      {
         key: "Electronics",
         name: "Электроника"
      },
      {
         key: "Childen's goods",
         name: "Детские товары"
      },
      {
         key: "Appliances",
         name: "Бытовая техника"
      },
      {
         key: "Construction and repair",
         name: "Строительство и ремонт"
      },
      {
         key: "House",
         name: "Дом"
      }
   ],
   category2: [
      {
         key: "Women",
         name: "Женщинам",
         categoryKey: "Clothes and shoes"
      },
      {
         key: "Men",
         name: "Мужчинам",
         categoryKey: "Clothes and shoes"
      },
      {
         key: "Children",
         name: "Детям",
         categoryKey: "Clothes and shoes"
      },
      {
         key: "Shoes",
         name: "Обувь",
         categoryKey: "Clothes and shoes"
      },
      {
         key: "Smartphones and gadgets",
         name: "Смартфоны и гаджеты",
         categoryKey: "Electronics"
      },
      {
         key: "Computers and software",
         name: "Компьютеры и ПО",
         categoryKey: "Electronics"
      },
      {
         key: "Laptops",
         name: "Ноутбуки",
         categoryKey: "Electronics"
      },
      {
         key: "Toys",
         name: "Игрушки",
         categoryKey: "Childen's goods"
      },
      {
         key: "Clothes",
         name: "Одежда",
         categoryKey: "Childen's goods"
      },
      {
         key: "Shoes",
         name: "Обувь",
         categoryKey: "Childen's goods"
      },
      {
         key: "Embedded appliances",
         name: "Встраиваемая техника",
         categoryKey: "Appliances"
      },
      {
         key: "Kitchen Appliances",
         name: "Техника для кухни",
         categoryKey: "Appliances"
      },
      {
         key: "Home Appliances",
         name: "Техника для дома",
         categoryKey: "Appliances"
      },
      {
         key: "Tools",
         name: "Инструменты",
         categoryKey: "Construction and repair"
      },
      {
         key: "Electrical goods",
         name: "Электротовары",
         categoryKey: "Construction and repair"
      },
      {
         key: "Wallpaper",
         name: "Обои",
         categoryKey: "Construction and repair"
      },
      {
         key: "Kitchen",
         name: "Кухня",
         categoryKey: "House"
      },
      {
         key: "Living room",
         name: "Гостинная",
         categoryKey: "House"
      },
      {
         key: "Bedroom",
         name: "Спальня",
         categoryKey: "House"
      },
      {
         key: "Children's",
         name: "Детская",
         categoryKey: "House"
      },
      {
         key: "Bathroom",
         name: "Ванная",
         categoryKey: "House"
      },
      {
         key: "Hallway",
         name: "Прихожая",
         categoryKey: "House"
      },
      {
         key: "Leisure and creativity",
         name: "Досуг и творчество",
         categoryKey: "House"
      }
   ],
   category3: [
      {
         key: "Blouses and shirts",
         name: "Блузки и рубашки",
         categoryKey: "Women",
         firstCategoryKey: "Clothes and shoes"
      },
      {
         key: "T-shirts",
         name: "Футболки",
         categoryKey: "Women",
         firstCategoryKey: "Clothes and shoes"
      },
      {
         key: "Trousers",
         name: "Брюки",
         categoryKey: "Women",
         firstCategoryKey: "Clothes and shoes"
      },
      {
         key: "Jeans",
         name: "Джинсы",
         categoryKey: "Women",
         firstCategoryKey: "Clothes and shoes"
      },
      {
         key: "Suits",
         name: "Костюмы",
         categoryKey: "Women",
         firstCategoryKey: "Clothes and shoes"
      },
      {
         key: "Dresses",
         name: "Платья",
         categoryKey: "Women",
         firstCategoryKey: "Clothes and shoes"
      },
      {
         key: "Skirts",
         name: "Юбки",
         categoryKey: "Women",
         firstCategoryKey: "Clothes and shoes"
      },
      {
         key: "Shirts",
         name: "Рубашки",
         categoryKey: "Men",
         firstCategoryKey: "Clothes and shoes"
      },
      {
         key: "Trousers",
         name: "Брюки",
         categoryKey: "Men",
         firstCategoryKey: "Clothes and shoes"
      },
      {
         key: "Jeans",
         name: "Джинсы",
         categoryKey: "Men",
         firstCategoryKey: "Clothes and shoes"
      },
      {
         key: "Suits",
         name: "Костюмы",
         categoryKey: "Men",
         firstCategoryKey: "Clothes and shoes"
      },
      {
         key: "T-shirts",
         name: "Футболки",
         categoryKey: "Men",
         firstCategoryKey: "Clothes and shoes"
      },
      {
         key: "Hoodies",
         name: "Толстовки",
         categoryKey: "Men",
         firstCategoryKey: "Clothes and shoes"
      },
      {
         key: "For girls",
         name: "Для девочек",
         categoryKey: "Children",
         firstCategoryKey: "Clothes and shoes"
      },
      {
         key: "For boys",
         name: "Для мальчиков",
         categoryKey: "Children",
         firstCategoryKey: "Clothes and shoes"
      },
      {
         key: "For newborns",
         name: "Для новорожденных",
         categoryKey: "Children",
         firstCategoryKey: "Clothes and shoes"
      },
      {
         key: "Women",
         name: "Женщинам",
         categoryKey: "Shoes",
         firstCategoryKey: "Clothes and shoes"
      },
      {
         key: "Men",
         name: "Мужчинам",
         categoryKey: "Shoes",
         firstCategoryKey: "Clothes and shoes"
      },
      {
         key: "Children",
         name: "Детям",
         categoryKey: "Shoes",
         firstCategoryKey: "Clothes and shoes"
      },
      {
         key: "Smartphones",
         name: "Смартфоны",
         categoryKey: "Smartphones and gadgets",
         firstCategoryKey: "Electronics"
      },
      {
         key: "Smart watch",
         name: "Смарт-часы",
         categoryKey: "Smartphones and gadgets",
         firstCategoryKey: "Electronics"
      },
      {
         key: "Cases and bracelets",
         name: "Чехлы и браслеты",
         categoryKey: "Smartphones and gadgets",
         firstCategoryKey: "Electronics"
      },
      {
         key: "Computers",
         name: "Компьютеры",
         categoryKey: "Computers and software",
         firstCategoryKey: "Electronics"
      },
      {
         key: "Monitors",
         name: "Мониторы",
         categoryKey: "Computers and software",
         firstCategoryKey: "Electronics"
      },
      {
         key: "Software",
         name: "Програмное обеспечение",
         categoryKey: "Computers and software",
         firstCategoryKey: "Electronics"
      }
   ],
   category4: [
      {
         key: "Dresses",
         name: "Платья",
         categoryKey: "For girls",
         secondCategoryKey: "Children",
         firstCategoryKey: "Clothes and shoes"
      },
      {
         key: "Skirts",
         name: "Юбки",
         categoryKey: "For girls",
         secondCategoryKey: "Children",
         firstCategoryKey: "Clothes and shoes"
      },
      {
         key: "Trousers",
         name: "Брюки",
         categoryKey: "For girls",
         secondCategoryKey: "Children",
         firstCategoryKey: "Clothes and shoes"
      },
      {
         key: "Blouses",
         name: "Блузки",
         categoryKey: "For girls",
         secondCategoryKey: "Children",
         firstCategoryKey: "Clothes and shoes"
      },
      {
         key: "T-shirts",
         name: "Футболки",
         categoryKey: "For girls",
         secondCategoryKey: "Children",
         firstCategoryKey: "Clothes and shoes"
      },
      {
         key: "Trousers",
         name: "Брюки",
         categoryKey: "For boys",
         secondCategoryKey: "Children",
         firstCategoryKey: "Clothes and shoes"
      },
      {
         key: "Hoodies",
         name: "Толстовки",
         categoryKey: "For boys",
         secondCategoryKey: "Children",
         firstCategoryKey: "Clothes and shoes"
      },
      {
         key: "T-shirts",
         name: "Футболки",
         categoryKey: "For boys",
         secondCategoryKey: "Children",
         firstCategoryKey: "Clothes and shoes"
      },
      {
         key: "Turtlenecks",
         name: "Водолазки",
         categoryKey: "For boys",
         secondCategoryKey: "Children",
         firstCategoryKey: "Clothes and shoes"
      },
      {
         key: "Jeans",
         name: "Джинсы",
         categoryKey: "For boys",
         secondCategoryKey: "Children",
         firstCategoryKey: "Clothes and shoes"
      },
   ]
}
export default categories;