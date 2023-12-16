
import { initializeApp } from "firebase/app";
import{
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  GithubAuthProvider
}from "firebase/auth"

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTnKzHAoh2B50JF7TKkSIyvq8Yhc7bWSs",
  authDomain: "first-firebase-db-2b0f8.firebaseapp.com",
  projectId: "first-firebase-db-2b0f8",
  storageBucket: "first-firebase-db-2b0f8.appspot.com",
  messagingSenderId: "718570269179",
  appId: "1:718570269179:web:11b95e9a4db268939e835e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//auth signin with google account
const provider = new GoogleAuthProvider()
const githubProvider= new GithubAuthProvider()

provider.setCustomParameters({
  prompt: "select_account"
})
githubProvider.setCustomParameters({
  promt: "select_account"  
})

export const auth= getAuth()
// console.log(auth)
export const signInWithGooglePopup =()=>signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const signInWithGithubPopup=()=>signInWithPopup(auth, githubProvider)

export const db = getFirestore()

//create user data
export const createUserDocumentFromAuth = async(userAuth)=>{
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()){
    // console.log(userAuth)
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try{
      await setDoc(userDocRef,{
        displayName, 
        email,
        createdAt
      })
    }catch(error){
      console.log("error message creating user",error)
    }
    
  }
  return userDocRef
}