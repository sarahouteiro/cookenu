import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from '../../constants/urls'
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import { RecipesListContainer, AddRecipeButton } from './styled'
import { goToAddRecipes, goToRecipeDetail } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"

const RecipesListPage = () => {
  useProtectedPage()

  const navigate = useNavigate()

  const onClickCard = (id) => {
    goToRecipeDetail(navigate, id)
  }

  const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)
  console.log(recipes)

  const recipeCards = recipes.map((recipe) => {
    return(
      <RecipeCard 
          key={recipe.recipe_id}
          title={recipe.title}
          image={recipe.image}
          onClick={() => onClickCard(recipe.recipe_id)}
        />
    )
  })
  
    return (
        <RecipesListContainer>
          {recipeCards}
          <AddRecipeButton onClick={() => goToAddRecipes(navigate)}>+</AddRecipeButton>
        </RecipesListContainer>
    );
  }
  
  export default RecipesListPage