import useForm from "../../hooks/useForm"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"
import { useNavigate } from "react-router-dom"
import { signUp } from "../../services/user"
import { useState } from "react"

const SignUpPage = ({setRightButtonText}) => {
  useUnprotectedPage()

  const [form, onChange, clear] = useForm({name: '',email: '', password: ''})
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

    const onSubmitForm = (event) => {
      console.log(form)
      event.preventDefault()
      signUp(form, clear, navigate, setRightButtonText, setIsLoading)
    }

    return (
      <>
        <form onSubmit={onSubmitForm}>
        <input 
            name={'name'}
            value={form.name}
            onChange={onChange}
            placeholder={'Nome'}
            required
          />
          <input 
            name={'email'}
            value={form.email}
            onChange={onChange}
            placeholder={'E-mail'}
            required
            type={'email'}
          />
          <input 
            name={'password'}
            value={form.password}
            onChange={onChange}
            placeholder={'Password'}
            required
            type={'password'}
          />
          <button type={'submit'}>{isLoading ? <>carregando</> : <>Enviar cadastro</>}</button>
        </form>
      </>
    )
  }
  
  export default SignUpPage