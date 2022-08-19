import { Barra } from './styled'
import { goToRecipesList, goToLogin } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
 
const Header = ({rightButtonText, setRightButtonText}) => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  

  const logout = () => {
    localStorage.removeItem('token')
  }

  const rightButtonAction = () => {
    if (token){
      logout()
      setRightButtonText('Login')
      goToLogin(navigate)
    } else {
      goToLogin(navigate)
    }
  }
    return (
      <>
        <Barra>
            <h1 onClick={() => goToRecipesList(navigate)}>cookenu</h1>
            <h2 onClick={rightButtonAction}>{rightButtonText}</h2>
        </Barra>
      </>
    );
  }
  
  export default Header