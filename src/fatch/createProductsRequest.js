export const createProductRequest = (url, method, dataBody, isAuth, dispatch) => {
   console.log("dataBody=", dataBody)
   return (
      fetch(`http://localhost:3001/${url}`, {
         method: method,
         // body: JSON.stringify(dataBody),
         body: dataBody,
         headers: isAuth ?
            {
               //"Content-Type": "application/json",
               "Content-Type": "multipart/form-data",
               "Authorization": `Bearer ${localStorage.getItem('token')}`
            } :
            { "Content-Type": "application/json" }
      })
         .then(response => response.json())
         .then(data => {
            console.log(data)
         })
   )
}