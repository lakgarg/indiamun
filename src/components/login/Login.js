import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import CollapsibleExample from '../navbar'
import  {useNavigate}  from 'react-router-dom';
import { projectAuth,firebaseT } from '../firebase/config';
import GoogleButton from 'react-google-button'

// styles
import styles from './Login.module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isPending,signInWithGoogle } = useLogin()
  const history = useNavigate()

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   login(email, password)
  // }

  const signInWithGoogleAcc=async(e)=>{
    e.preventDefault();
    try{
      await signInWithGoogle();
      history('/form')
    }catch(err){
      console.log(err)
    }
  }


  return (
    <div className={styles.container_login}>
    <>
    <CollapsibleExample/>
    

    
    {/* <form onSubmit={handleSubmit} className={styles['login-form']}>
      <h2>login</h2>
      <label>
        <span>email:</span>
        <input 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input 
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
        />
      </label>
      { !isPending && <button className="btn">Login</button> }
      { isPending && <button className="btn" disabled>loading</button> }
      { error && <p>{error}</p> }
    </form> */}
    
    {/* <button className="btn" onClick={signInWithGoogleAcc}>sign in with google</button> */}
   

   
    <div className={styles.login_but} >
    <GoogleButton
     onClick={signInWithGoogleAcc}
     />
    </div>
    
   
    </>
    </div>
  )
}