import { Routes, Route } from "react-router-dom"
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage"
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"

const Router = ({setRightButtonText}) => {
    return(
            <Routes>
                <Route index element={<RecipesListPage/>}/> 
                <Route path='login' element={<LoginPage setRightButtonText={setRightButtonText}/>}/>
                <Route path='signup' element={<SignUpPage setRightButtonText={setRightButtonText}/>}/>
                <Route path='addrecipes' element={<AddRecipesPage/>}/>
                <Route path='recipedetail/:id' element={<RecipeDetailPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
    )
}

export default Router