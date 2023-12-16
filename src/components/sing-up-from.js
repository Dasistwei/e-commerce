import{ useState } from 'react'

const defaultFormFields = {
  name:'',
  email: '',
  password: '',
  confirmPassword: ''
}
export default function SignUp (){
  const [userData, setUserData] = useState(defaultFormFields)
  const {name, email, password, confirmPassword}= userData

  const handleChange = (event) =>{
    const {name, value}= event.target
    setUserData({...userData, [name]: value})
  }

  return(
    <>
      <h1>Sign Up</h1>
      <label >Name</label>
      <input type="text" name="name" required onChange={handleChange} value={name} />
      <label >Email</label>
      <input type="text" name="email" required onChange={handleChange} value={email} />
      <label >Password</label>
      <input type="password" name="password" required onChange={handleChange} value={password} />
      <label >Confirm Password</label>
      <input type="password" name="confirmPassword" required onChange={handleChange} value={confirmPassword} />
      <button type='submit'>Sign Up</button>

    </>
  )
}