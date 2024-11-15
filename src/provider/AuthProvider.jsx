import { createContext, useEffect, useState } from "react";
import { app } from "../components/firbase/firbase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";


// Authcontext creat
export const Authcontext = createContext();
// auth declair 
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    
    // register section
   const creatNewUser = (email,password)=> {
    return createUserWithEmailAndPassword(auth,email,password);
   }

     const [user,setUser] = useState(null);
  console.log(user)
     const authInfo = {
        user,
        setUser,
        creatNewUser
     }
     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
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