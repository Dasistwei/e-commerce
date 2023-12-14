import { signInWithGooglePopup, signInWithGithubPopup, createUserDocumentFromAuth } from "../../utils/firebase.utils"

export default function SignIn (){
  const logGoogleUse =  async()=>{
    const {user} = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
    // console.log(user)
  }
  const logGithubUse = async()=>{
    const response = await signInWithGithubPopup()
  }
  return(
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUse}>
        sign in with google
      </button>
      <button onClick={logGithubUse}>
        sign in with github
      </button>
    </div>
  )
}