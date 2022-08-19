import LoginForm from "./LoginForm"
import { goToSignUp } from '../../routes/coordinator'
import { useNavigate } from "react-router-dom"
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const LoginPage = ({setRightButtonText}) => {
  useUnprotectedPage()
  
  const navigate = useNavigate()

    return (
      <>
        <LoginForm setRightButtonText={setRightButtonText}/>
        <button onClick={() => goToSignUp(navigate)}> Não possui conta? Cadastre-se!</button>
      </>
    );
  }
  
  export default LoginPage