import { RecipeCardContainer } from './styled'

const RecipeCard = (props) => {
    return(
        <RecipeCardContainer onClick={props.onClick}>
            <h4>{props.title}</h4>
            <img src={props.image} alt='Imagem da Receita'/>
        </RecipeCardContainer>
    )
}

export default RecipeCard