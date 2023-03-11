export const changeDateFormat = (date) => {
   const Year = date.getFullYear();
   const getDayMonth = (date) => {
      const dateDay = date.getDate()
      const dateMonth = date.getMonth()
      let result;
      if (dateDay < 10 && dateMonth < 9) {
         result = 0 + `${dateDay}` + "." + 0 + `${dateMonth + 1}`
         //console.log('result1=', result)
         return result
      } else if (dateDay < 10 && dateMonth >= 9) {
         result = 0 + `${dateDay}` + "." + `${dateMonth + 1}`
         //console.log('result2=', result)
         return result
      } else if (dateDay >= 10 && dateMonth < 9) {
         result = `${dateDay}` + "." + 0 + `${dateMonth + 1}`
         //console.log('result3=', result)
         return result
      } else {
         result = `${dateDay}` + "." + `${dateMonth + 1}`
         //console.log('result4=', result)
         return result
      }
   };
   const DayAndMonth = getDayMonth(date);

   const Hour = date.getHours();
   const getMinutesSeconds = (date) => {
      const Minutes = date.getMinutes();
      const Seconds = date.getSeconds();
      let result;
      if (Minutes < 10 && Seconds < 10) {
         result = 0 + `${Minutes}` + ":" + 0 + `${Seconds}`
         //console.log('result1=', result)
         return result
      } else if (Minutes >= 10 && Seconds < 10) {
         result = `${Minutes}` + ":" + 0 + `${Seconds}`
         //console.log('result1=', result)
         return result
      } else if (Minutes < 10 && Seconds >= 10) {
         result = 0 + `${Minutes}` + ":" + `${Seconds}`
         //console.log('result1=', result)
         return result
      } else {
         result = `${Minutes}` + ":" + `${Seconds}`
         //console.log('result4=', result)
         return result
      }
   }
   const MinutesAndSeconds = getMinutesSeconds(date)

   const editDate = DayAndMonth + '.' + Year + ' ' + Hour + ':' + MinutesAndSeconds
   //console.log('editDate=', editDate)
   return editDate;
}