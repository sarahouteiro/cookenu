import { createContext, useState } from "react"

const initialState = {
    nome: '',
    email: '',
    token: ''
}

export const UserContext = createContext(initialState)

const UserContextProvider = (props) => {
    const [user, setUser] = useState(initialState)

    const updateUser = (user) => {
        setUser(user)
    }

    const clearUser = () => {
        setUser(initialState)
    }

    return(
        <UserContext.Provider>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider