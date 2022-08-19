import useForm from '../../hooks/useForm'
import { createRecipe } from '../../services/recipe'

const AddRecipesForm = () => {
    const [form, onChange, clear] = useForm({title: '', description: '', image: ''})

    const onSubmitForm = (event) => {
        event.preventDefault()
        createRecipe(form, clear)
    }

    return(
        <form onSubmit={onSubmitForm}>
            <input
            name={'title'}
            value={form.title}
            onChange={onChange}
            placeholder={'Título'}
            required
            />
            <input
            name={'description'}
            value={form.description}
            onChange={onChange}
            placeholder={'Descrição'}
            required
            />
                        <input
            name={'image'}
            value={form.image}
            onChange={onChange}
            placeholder={'Foto'}
            required
            />
            <button type={'submit'}>Enviar</button>
        </form>
    )
}

export default AddRecipesForm