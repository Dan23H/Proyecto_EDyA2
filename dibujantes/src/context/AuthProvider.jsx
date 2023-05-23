import { authContext } from "./authContext"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/firebaseConfig"

const AuthProvider = ({children}) => {
    const registro = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }
    return (
        <authContext.Provider value={{registro, login}}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider