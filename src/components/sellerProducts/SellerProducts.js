import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProductRequest } from '../../fatch/createProductsRequest';
//import categories from '../../data/categories';
import categories from '../../data/categories1';
import Checkbox from '../checkbox/Checkbox';
import css from './SellerProducts.module.css';

const SellerProducts = () => {
   const { category1, category2, category3, category4 } = categories
   const isAuthSeller = useSelector(state => state.seller.isAuthSeller)

   const dispatch = useDispatch()

   // const [value, setValue] = useState({
   //    name: '',
   //    price: '',
   //    sizes: [],
   //    compound: '',
   //    brend: '',
   //    description: '',
   //    selectedCategoryId: '',
   //    //images: []
   // })
   const [value, setValue] = useState({
      name: ''
   })
   const handleChange = (e) => {
      const fieldName = e.target.name;
      setValue({ ...value, [fieldName]: e.target.value })
      //console.log("e.target.value=", e.target.value)
   }

   const [images, setImages] = useState([])
   const handleChangeFile = (e) => {
      setImages(e.target.files)
      console.log("e.target.FILE=", e.target.files)
   }

   const handleSubmit = async (e) => {
      e.preventDefault()

      // const product = {
      //    name: value.name,
      //    price: value.price,
      //    sizes: choseSizes,
      //    compound: value.compound,
      //    brend: value.brend,
      //    description: value.description,
      //    selectedCategoryId: selectedCategoryId,
      //    //images: formData
      // }

      const formData = new FormData()
      formData.append('name', value.name)
      formData.append('price', value.price)
      formData.append('sizes', value.sizes)
      formData.append('compound', value.compound)
      formData.append('brend', value.brend)
      formData.append('description', value.description)
      formData.append('selectedCategoryId', value.selectedCategoryId)
      const photos = Array.from(images)
      console.log("IMAGES=", images)
      console.log("photos=", photos)
      for (let i = 0; i < photos.length; i++) {
         const photo = photos[i].name
         console.log("photo=", photo)
         formData.append(photo, photos[i])
         console.log("PHOTOS=", photos[i])
         console.log("FORMDATA=", formData)
      }
      console.log("formDATA=", formData)
      await createProductRequest("products", "POST",
         // {
         //    "name": `${product.name}`,
         //    "price": `${product.price}`,
         //    "sizes": `${product.sizes}`,
         //    "compound": `${product.compound}`,
         //    "brend": `${product.brend}`,
         //    "description": `${product.description}`,
         //    "selectedCategoryId": `${product.selectedCategoryId}`,
         //    'images': `${product.images}`
         // }, 
         formData, true, dispatch)

      setValue({
         name: '',
         price: '',
         size: [],
         compound: '',
         brend: '',
         description: '',
         //images: []
      })
      setImages([])
   }

   const sizes = ["42", "44", "46", "48", "50", "52", "54", "56", "58", "60"]
   const [choseSizes, setChoseSizes] = useState([])

   const handleClick = (size) => {
      if (!choseSizes.includes(size)) {
         setChoseSizes([...choseSizes, size]);
         console.log("choseSizes1=", choseSizes)
      } else {
         const index = choseSizes.indexOf(size)
         //console.log("index=", index)
         if (index === 0) {
            //console.log("index1=", index, "size1=", size)
            setChoseSizes([...choseSizes.slice((index + 1), choseSizes.length)])
         } else if (index === choseSizes.length - 1) {
            //console.log("index2=", index, "size2=", size)
            setChoseSizes([...choseSizes.slice(0, choseSizes.length - 1)])
         } else {
            //console.log("index3=", index, "size3=", size)
            setChoseSizes([...choseSizes.slice(0, index), ...choseSizes.slice((index + 1), choseSizes.length)])
         }
      }
   }
   console.log("choseSizes3=", choseSizes)

   //const [choseCategory, setChoseCategory] = useState([])
   // useEffect((changeChecked) => {
   const changeChecked = (checked) => {
      console.log('checked1=', checked)
   }
   // }, [])


   //https://itchief.ru/javascript/formdata - работа с объектом FormData
   //https://habr.com/ru/post/423035/
   //Data используют в fetch для отправки фото на сервер
   // let formData = new FormData();
   // const changeFile = (e) => {
   //    const files = e.target.files
   //    console.log('files=', files)
   //    function sendFiles(files) {
   //       let maxFileSize = 5242880; //5 Мбайт
   //       // let formData = new FormData();
   //       for (let i = 0; i < files.length; i++) {
   //          if ((files[i].size <= maxFileSize) && ((files[i].type == 'image/png') || (files[i].type == 'image/jpeg'))) {
   //             console.log('file=', files[i])
   //             formData.append('photos', files[i]); //images: [files[0], files[1], ...]
   //          }
   //       }
   //       console.log('formData=', formData.getAll('images'))
   //       const formDataImg = formData.getAll('images')
   //       //return formData
   //    };
   //    sendFiles(files);
   // }
   // console.log('formData1=', formData)

   const [selectedCategoryId, setSelectedCategoryId] = useState(null);
   const [selectedSubcategory1Id, setSelectedSubcategory1Id] = useState(null);
   const [selectedSubcategory2Id, setSelectedSubcategory2Id] = useState(null);
   const [selectedSubcategory3Id, setSelectedSubcategory3Id] = useState(null);
   console.log('selectedCategoryId=', selectedCategoryId)

   // обработчик клика по категории товаров
   function handleCategoryClick(event) {
      console.log('event.target.value1=', event.target.value)
      const categoryId = Number(event.target.value);
      console.log('categoryId=', categoryId)
      setSelectedCategoryId(categoryId);
      setSelectedSubcategory1Id(null);
      setSelectedSubcategory2Id(null);
      setSelectedSubcategory3Id(null);
   }

   // обработчик клика по подкатегории товаров
   function handleSubcategory1Click(event) {
      console.log('event.target.value2=', event.target.value)
      const subcategory1Id = Number(event.target.value);
      console.log('subcategoryId=', subcategory1Id)
      setSelectedSubcategory1Id(subcategory1Id);
      setSelectedSubcategory2Id(null);
      setSelectedSubcategory3Id(null);
   }

   // обработчик клика по подкатегории товаров
   function handleSubcategory2Click(event) {
      console.log('event.target.value2=', event.target.value)
      const subcategory2Id = Number(event.target.value);
      console.log('subcategoryId=', subcategory2Id)
      setSelectedSubcategory2Id(subcategory2Id);
      setSelectedSubcategory3Id(null);
   }

   // обработчик клика по подкатегории товаров
   function handleSubcategory3Click(event) {
      console.log('event.target.value2=', event.target.value)
      const subcategory3Id = Number(event.target.value);
      console.log('subcategoryId=', subcategory3Id)
      setSelectedSubcategory3Id(subcategory3Id);
   }

   return (
      <>
         {isAuthSeller &&
            <div className={css.products}>
               <div className={css.wrapper}>
                  <h3>Создать продукт</h3>
                  <form className={css.form} id='form' onSubmit={handleSubmit}>
                     <label htmlFor="name" className={css.label}>Название продукта:</label>
                     <input id="name"
                        type="text"
                        name="name"
                        value={value.name}
                        placeholder="Введите название подукта"
                        onChange={handleChange} />
                     <label htmlFor="price" className={css.label}>Цена:</label>
                     <input id="price"
                        type="text"
                        name="price"
                        value={value.price}
                        placeholder="99.99"
                        maxLength={'8'} //максимальное кол-во знаков
                        required={'required'}
                        onChange={handleChange} />
                     <label htmlFor="size" className={css.label}>Размеры:</label>
                     <div className={css.sizes}>
                        {sizes.map((size, index) => {
                           return (<button className={css.size}
                              type="button"
                              key={size}
                              name="size"
                              value={size}
                              style={{
                                 backgroundColor: choseSizes.includes(size) ? '#aaa9a9' : '#dfdcdc',
                                 color: choseSizes.includes(size) ? '#FFFFFF' : '#5A5757'
                              }}
                              onClick={() => handleClick(size)}>{size}</button>)
                        })}
                     </div>
                     <label htmlFor="compound" className={css.label}>Материал:</label>
                     <input id="compound"
                        type="text"
                        name="compound"
                        value={value.compound}
                        placeholder="хлопок 100%"
                        required={'required'}
                        onChange={handleChange} />
                     <label htmlFor="brend" className={css.label}>Бренд:</label>
                     <input id="brend"
                        type="text"
                        name="brend"
                        value={value.brend}
                        placeholder="Levi's"
                        onChange={handleChange} />
                     <label htmlFor="description" className={css.label}>Описание:</label>
                     <textarea id="description" className={css.description}
                        type="text"
                        name="description"
                        value={value.description}
                        required={'required'}
                        onChange={handleChange} />
                     <h4 className={css.label}>Выберите категорию товаров:</h4>
                     {/* {categories.category1.map(category => (
                        <div key={category.id} className={css.checkbox}>
                           <input
                              //id="category"
                              type="checkbox"
                              name="category"
                              // value={value.category}
                              checked={checked}
                              onChange={changeChecked} /> 
                     <Checkbox category={category} changeChecked={changeChecked} />
                     <label htmlFor="category" className={css.label_checkbox}>{category.name}</label> 
               </div>
                     ))} */}
                     <ul>
                        {categories.map(category => (
                           <li key={category.id}>
                              <label>
                                 <input
                                    type="checkbox"
                                    value={category.id}
                                    checked={selectedCategoryId === category.id}
                                    onChange={handleCategoryClick}
                                 />
                                 {category.name}
                              </label>
                           </li>
                        ))}
                     </ul>

                     {selectedCategoryId !== null && (
                        <>
                           <h4>Выберите подкатегорию товаров:</h4>
                           <ul>
                              {categories.find(category => category.id === selectedCategoryId)
                                 .subcategories.map(subcategory => (
                                    <li key={subcategory.id}>
                                       <label>
                                          <input
                                             type="checkbox"
                                             value={subcategory.id}
                                             checked={selectedSubcategory1Id === subcategory.id}
                                             onChange={handleSubcategory1Click}
                                          />
                                          {subcategory.name}
                                       </label>
                                    </li>
                                 ))}
                           </ul>
                        </>
                     )}

                     {selectedCategoryId !== null && selectedSubcategory1Id !== null && (
                        <>
                           <h4>Выберите подкатегорию товаров:</h4>
                           <ul>
                              {categories.find(category => category.id === selectedCategoryId)
                                 .subcategories.find(subcategory => subcategory.id === selectedSubcategory1Id)
                                 .subcategories.map(subcategory => (
                                    <li key={subcategory.id}>
                                       <label>
                                          <input
                                             type="checkbox"
                                             value={subcategory.id}
                                             checked={selectedSubcategory2Id === subcategory.id}
                                             onChange={handleSubcategory2Click}
                                          />
                                          {subcategory.name}
                                       </label>
                                    </li>
                                 ))}
                           </ul>
                        </>
                     )}

                     {selectedCategoryId !== null && selectedSubcategory1Id !== null &&
                        selectedSubcategory2Id !== null && (
                           <>
                              <h4>Выберите подкатегорию товаров:</h4>
                              <ul>
                                 {categories.find(category => category.id === selectedCategoryId)
                                    .subcategories.find(subcategory => subcategory.id === selectedSubcategory1Id)
                                    .subcategories.find(subcategory => subcategory.id === selectedSubcategory2Id)
                                    .subcategories.map(subcategory => (
                                       <li key={subcategory.id}>
                                          <label>
                                             <input
                                                type="checkbox"
                                                value={subcategory.id}
                                                checked={selectedSubcategory3Id === subcategory.id}
                                                onChange={handleSubcategory3Click}
                                             />
                                             {subcategory.name}
                                          </label>
                                       </li>
                                    ))}
                              </ul>
                           </>
                        )}

                     {/* {categories.category2.map(item => (
                        <div key={item.id} className={css.checkbox}>
                           <input
                              //id="category"
                              type="checkbox"
                              name="category"
                              value={value.category}
                              onChange={handleChange} />
                           <Checkbox /> 
                           <label htmlFor="category" className={css.label_checkbox}>{item.name}</label>
                        </div>
                     ))} */}
                     <label htmlFor="images" className={css.label}>Фотографии:</label>
                     <input type="file" id="images"
                        name="images"
                        multiple accept="image/*, .png, .jpg, .jpeg"
                        onChange={handleChangeFile} />
                     <div className={css.btn}>
                        <button type='submit' className={css.button_submit}>{'Сохранить'}</button>
                     </div>
                  </form >
               </div>
            </div >
         }
      </>
   )
}
export default SellerProducts;