import { useEffect } from "react"
import { signInWithGooglePopup, signInWithGithubPopup, signInWithGoogleRedirect,createUserDocumentFromAuth, auth } from "../utils/firebase.utils"
import {getRedirectResult} from "firebase/auth"
import SignUp from "./sing-up-from"

export default function SignIn (){
  const createUser = async()=>{
    const response = await getRedirectResult(auth)
    if(response){
      const userDocRef = await createUserDocumentFromAuth(response.user)
    }
  }
  useEffect(()=>{
    createUser()
  },[])
  const logGoogleUser =  async()=>{
    const {user} = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
    // console.log(user)
  }
  // const logGoogleRedirectUser =  async()=>{
  //   const {user} = await signInWithGoogleRedirect()
    
  //   console.log(user)
  // }
  const logGithubUser = async()=>{
    const response = await signInWithGithubPopup()
    console.log(response)
  }
  return(
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>
        sign in with google
      </button>
      {/* <button onClick={signInWithGoogleRedirect}>
        sign in with google redirect
      </button>
      <button onClick={logGithubUser}>
        sign in with github
      </button> */}
      <SignUp/>
    </div>
  )
}