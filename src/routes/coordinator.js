export const goToRecipesList = (navigate) => {
    navigate('/')
}

export const goToLogin = (navigate) => {
    navigate('/login')
}

export const goToSignUp = (navigate) => {
    navigate('/signup')
}

export const goToAddRecipes = (navigate) => {
    navigate('/addrecipes')
}

export const goToRecipeDetail = (navigate, id) => {
    navigate(`/recipedetail/${id}`)
}