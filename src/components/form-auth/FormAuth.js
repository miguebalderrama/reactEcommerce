import React, {useState, useContext} from 'react'
import { authentication } from "../../firebase/index.js"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase from 'firebase/compat/app';
import { UserContext } from "../../context/UserContext";



function FormAuth() {
    
    const [isUserSignIn, setIsUserSignIn] = useState(false);
    const [name,setName] = useState('Ingresar');
    const { isLoginUser,loginUser,putEmail } = useContext(UserContext);


   
    const signOut = () => {
        firebase.auth().signOut();
        setIsUserSignIn(false);
        console.log('Aprete desloguerarse ');
        setName('Ingresar');
    }
      
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
        .then((result) => {
            setName(result.user.displayName);
            loginUser(result.user.displayName);
            putEmail(result.user.email);
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {setIsUserSignIn(true)})   
    }
   if(isUserSignIn===true){
       console.log("Usuario loguedo")
       isLoginUser(true);
   }
   else{
       console.log("Usuario no logueado")
         isLoginUser(false);
   }
   


    return (
        <div style={{display:"flex"}}>
           { isUserSignIn===false && <FontAwesomeIcon  style={{margin:"5px 5px 0 0", cursor:"pointer"}} icon={faUser} />}
           { isUserSignIn===true && <FontAwesomeIcon onClick={signOut} style={{margin:"5px 5px 0 0", cursor:"pointer"}} icon={faSignOutAlt} />}

           <p style={{cursor:"pointer"}} onClick={signInWithGoogle}>{name}</p> 
        </div>
    )
}

export default FormAuth
