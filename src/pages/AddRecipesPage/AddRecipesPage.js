import useProtectedPage from "../../hooks/useProtectedPage"
import AddRecipesForm from './AddRecipesForm'

const AddRecipesPage = () => {
  useProtectedPage()
    return (
      <>
        <AddRecipesForm/>
      </>
    );
  }
  
  export default AddRecipesPage