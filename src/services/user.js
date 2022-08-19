import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToRecipesList } from "../routes/coordinator"

export const login = (body, clear, navigate, setRightButtonText, setIsLoading) => {
  setIsLoading(true)
    axios.post(`${BASE_URL}/user/login`, body)
    .then((sucess) => {
      localStorage.setItem('token', sucess.data.token)
      clear()
      setIsLoading(false)
      goToRecipesList(navigate)
      setRightButtonText('Logout')
    })
    .catch((error) => {
      setIsLoading(false)
      alert(error.response.data.message)
    })
  }

export const signUp = (body, clear, navigate, setRightButtonText, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/user/signup`, body)
  .then((sucess) => {
    localStorage.setItem('token', sucess.data.token)
    clear()
    setIsLoading(false)
    goToRecipesList(navigate)
    setRightButtonText('Logout')
  })
  .catch((error) => {
    alert(error.response.data.message)
  })
}