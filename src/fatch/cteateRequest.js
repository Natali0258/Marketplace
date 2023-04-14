import { regUserSuccess, logUserSuccess, regUserError, logUserError, closeLogForm, closeModal } from "../store/actions/userActions"
import { regSellerSuccess, logSellerSuccess, closeLogFormSeller, logSellerError } from "../store/actions/sellerActions"

export const createRequest = (url, method, dataBody, isAuth, dispatch) => {

   return (
      fetch(`http://localhost:3001/${url}`, {
         method: method,
         body: JSON.stringify(dataBody),
         headers: isAuth ?
            {
               "Content-Type": "application/json",
               "Authorization": `Bearer ${localStorage.getItem('token')}`
            } :
            { "Content-Type": "application/json" }
      })
         .then((response) => {
            if (!response.ok) {
               response.text()
                  .then(text => { return JSON.parse(text) })
                  .then(text => {
                     console.log('text=', text)
                     if (text === 'Email already exists') {
                        console.log('error=', text)
                        dispatch(regUserError())
                        //Если user уже зарегистрирован, 
                        //то запишем email и password в localStorage, 
                        //чтобы их повторно не запрашивать при авторизации
                        localStorage.setItem('email', dataBody.email)
                        localStorage.setItem('password', dataBody.password)
                     } else
                        if (text === "Email format is invalid"
                           || text === "Cannot find user"
                           || text === "Incorrect password") {
                           console.log('errorText=', text)
                           if (url === 'login') {
                              dispatch(logUserError())
                           } else {
                              dispatch(logSellerError())
                           }

                        }
                  })
               return Promise.reject(new Error(response.status))
            }
            return Promise.resolve(response)
         })
         .then(response => response.json())
         .then(data => {
            console.log('data=', data)
            if (url === 'register') {
               //localStorage.setItem("user", data.users)
               console.log('isReg=true')
               dispatch(regUserSuccess(data))
            }
            if (url === 'signup') {
               console.log('isRegSeller=true')
               dispatch(regSellerSuccess(data))
            }
            if (url === 'login') {
               localStorage.setItem('accessToken', data.accessToken)
               const { id, nickname, email, password } = data.user
               console.log(id, nickname, email, password)
               dispatch(logUserSuccess(id, nickname, email, password))
               dispatch(closeLogForm())
               dispatch(closeModal())
            }
            if (url === 'signin') {
               localStorage.setItem('accessToken', data.accessToken)
               const { id, name, inn, email, password } = data.user
               console.log(id, name, inn, email, password)
               dispatch(logSellerSuccess(id, name, inn, email, password))
               dispatch(closeLogFormSeller())
               dispatch(closeModal())
            }
            //dispatch(actionSuccess(data))
            // dispatch(closeRegForm())
            // dispatch(closeModal())
            // navigate('/')
         })
         .catch(error => console.log('errorCatch=', error)
         )
   )
}