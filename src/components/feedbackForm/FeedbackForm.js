import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeDateFormat } from '../../functions/changeDateFormat';
import { addFeedback, closeFeedbackForm } from '../../store/actions/cartActions';
import { closeModal } from '../../store/actions/userActions';
import css from './FeedbackForm.module.css';

const FeedbackForm = () => {
   const dispatch = useDispatch()
   const [value, setValue] = useState(
      {
         boyerName: "",
         text: "",
         photos: ""
      }
   )

   const changeFeedback = (e) => {
      setValue({ ...value, text: e.target.value })
   }

   const changeFile = (e) => {
      setValue({
         ...value,
         photos: [e.target.files[0].name,
         e.target.files[1].name
         ]
      })
   }

   //https://itchief.ru/javascript/formdata - работа с объектом FormData
   //https://habr.com/ru/post/423035/
   //Data используют в fetch для отправки фото на сервер
   const changeFile1 = (e) => {
      const files = e.target.files
      console.log('files=', files)
      function sendFiles(files) {
         let maxFileSize = 5242880; //5 Мбайт
         let Data = new FormData();
         for (let i = 0; i < files.length; i++) {
            if ((files[i].size <= maxFileSize) && ((files[i].type == 'image/png') || (files[i].type == 'image/jpeg'))) {
               console.log('file=', files[i])
               Data.append('images[]', files[i]);
            }
         }
         console.log('Data=', Data.getAll('images[]'))
      };
      sendFiles(files);
   }

   const currentDate = new Date()
   const date = changeDateFormat(currentDate)

   const saveFeedback = (e) => {
      e.preventDefault()

      const feedback = {
         boyerName: "anonymous",
         date: date,
         text: value.text,
         photos: value.photos
      }
      dispatch(addFeedback(feedback))
      console.log("value=", feedback.feedback)
      setValue({ boyerName: "", text: "", photos: "" })
      dispatch(closeFeedbackForm())
      dispatch(closeModal())
   }
   return (
      <form className={css.form} onSubmit={saveFeedback} >
         <label htmlFor="text" className={css.label}>Ваш отзыв:</label>
         <textarea type="text" id="text"
            name="text" className={css.textarea}
            onChange={changeFeedback} />
         <label htmlFor="file" className={css.label}>Ваши фотографии:</label>
         <input type="file" id="file" name="photos" multiple accept="image/*, .png, .jpg, .jpeg"
            onChange={changeFile} />
         <button type="submit" className={css.button}>Сохранить</button>
      </form>
   )
}
export default FeedbackForm;