import { authContext } from "./authContext"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/firebaseConfig"

const AuthProvider = ({children}) => {
    const registro = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }
    return (
        <authContext.Provider value={{registro}}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider