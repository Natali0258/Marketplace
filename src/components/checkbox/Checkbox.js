import { useState } from "react";
import css from './Checkbox.module.css';

const Checkbox = (props) => {
   const { name, id } = props.category
   //console.log('category=', name)
   const [checked, setChecked] = useState(false)
   const handleChange = () => {
      console.log('checked1=', checked)
      setChecked(!checked)
      //changeChecked(checked)
      console.log('checked2=', checked)
   }
   return (
      <div className={css.checkbox}>
         <input type='checkbox' id="category" className={css.checkbox} checked={checked} onChange={handleChange} />
         <label htmlFor="category" className={css.label_checkbox}>{name}</label>
      </div>
   )
}
export default Checkbox;