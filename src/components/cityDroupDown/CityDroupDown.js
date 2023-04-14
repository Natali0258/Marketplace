import { useState } from 'react';
import cities from '../../data/cities.json';
import Select from 'react-select'
import css from './CityDroupDown.module.css';

const CityDroupDown = () => {
   const [isOpenDropDown, setOpenDropDown] = useState(false);
   const [filter, setFilter] = useState('');

   const chooseCity = (e) => {
      setFilter(e.target.value)
      console.log(e.target.value)
      setOpenDropDown(false)
   }

   const filterCity = (e) => {
      e.preventDefault()
      setOpenDropDown(true);
      setFilter(e.target.value)
   }

   const filterList = cities.filter(city => (
      city.name.toLowerCase().includes(filter.toLowerCase())))

   return (
      <div className={css.droupDown}>
         <input className={css.city} type='text' value={filter}
            placeholder='город' onChange={filterCity} />
         {isOpenDropDown &&
            <div className={css.container}>
               {filterList.map(city => {
                  return (<option key={city.id} value={city.mame}
                     onClick={chooseCity} className={css.cityList}>{city.name}</option>)
               })}
            </div>
         }
      </div>
   )
}
export default CityDroupDown;