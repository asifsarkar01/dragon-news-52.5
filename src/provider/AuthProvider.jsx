import { createContext, useEffect, useState } from "react";
import { app } from "../components/firbase/firbase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";


// Authcontext creat
export const Authcontext = createContext();
// auth declair 
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true)
    console.log(loading)
    // register section
   const creatNewUser = (email,password)=> {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password);
   }
//    User login 
const userLogin  = (email,password) =>{
    setLoading(true)
  return signInWithEmailAndPassword(auth, email, password)
  
}

     const [user,setUser] = useState(null);
  console.log(user)
    //   logout option
    const logout =()=>{
        setLoading(true)
        return signOut(auth)
    }
    const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser,updatedData)
    }

     const authInfo = {
        user,
        setUser,
        logout,
        creatNewUser,
        userLogin,
        loading,
        updateUserProfile
     }
     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            unsubscribe()
        }
     })


    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;