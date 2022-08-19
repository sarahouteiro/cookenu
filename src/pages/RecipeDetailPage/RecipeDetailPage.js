import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { RecipeContainer } from './styled'

const RecipeDetailPage = () => {
  useProtectedPage()
  const params = useParams()
  const recipe = useRequestData([], `${BASE_URL}/recipe/${params.id}`)[0]
  console.log(recipe)
    return (
      <>
        {recipe && 
        <RecipeContainer>
          <img src={recipe.image} alt='Foto da Receita'/>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
        </RecipeContainer>}
      </>
    );
  }
  
  export default RecipeDetailPage