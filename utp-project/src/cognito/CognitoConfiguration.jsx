import { useContext, useEffect, useState } from "react"
//import { Amplify, Auth } from "aws-amplify"
/*import { ContextUser } from "../App"
import { toast } from "react-toastify"*/
//import 'react-toastify/dist/ReactToastify.css';
import "../scenes/login/login.css"
import { useNavigate } from "react-router-dom"
import ParticulasBackground from "../scenes/login/ParticulasBackground";
import { Link } from 'react-router-dom'; 
//import LoaderSpinner from "../scenes/global/LoaderSpinner";

/*Amplify.configure({
  Auth: {
      region: "us-east-1",
      userPoolId: "us-east-1_q85nhW1Og",
      userPoolWebClientId: "3l14h21qi2k25sjnkili6qmsdf"
  }
})*/

/*async function changePassword (username, oldPassword, newPassword) {
  try {
    const user = await Auth.signIn(username, oldPassword)
    const newPassword = 'Desarr0ll$!'
    if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
      const loggedInUser = await Auth.completeNewPassword(
        user, // the Cognito User Object
        newPassword, // the new password
      )

      console.log(loggedInUser);
    }
  } catch(err) {
    console.log(err);
  }
};*/

const SignUp = ({setUsername, setPasswordVerifier, setUsernameRecovery, setUserForcePassword}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showLoader, setShowLoader] = useState(false)
  const [incorrectCredentials, setIncorrectCredentials] = useState(false);
  const navigate = useNavigate();

  /*const reset = async () => {
    setShowLoader(true)
    await Auth.forgotPassword(email)
    toast.info('Se envió un código de verificación para reiniciar tu password ')
    setUsernameRecovery(email)
    navigate('/password-recovery')
    setShowLoader(false)
  }*/

  /*const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const user = await Auth.signIn(email, password)
      if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
        setUserForcePassword(user)
        toast.info('Se requiere cambiar el password')
        navigate('/force-password')
      } else {
        toast.success('Bienvenido!')
        navigate('/')
      }
    } catch (error) {
      if (error.code == "UserNotConfirmedException") {
        setUsername(email)
        setPasswordVerifier(password)
        await Auth.resendSignUp(email)
        toast.warning("Falta verificar su dirección de correo, se envió un código de verificación")
        navigate('/confirm-email')
      } else {
        toast.error("Error : "  + error ) 
        setIncorrectCredentials(true); 
        <LoaderSpinner show={showLoader}/>
      }
    }
  }*/

  useEffect(() => {
  }, [])

  return(<>
    <div className="particulas">

      <ParticulasBackground />

      <div className="login-section">
        <h2>Login</h2>
        <form /*onSubmit={onSubmit}*/>
          
          <div className="user-box">
            <input 
              value={email} 
              id="usuario" 
              onChange={(event) => setEmail(event.target.value)} />
            <label htmlFor="email">Username</label>
          </div>

          
          <div className="user-box">
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            <label htmlFor="password">Password</label>
          </div>

          <button type="submit">Iniciar Sesión</button>
        </form>
        
        <p style={{color: 'white', fontSize: '16px', textDecoration: 'underline', cursor: 'pointer'}} /*onClick={reset}*/>
          {incorrectCredentials && (
            <a >¿Olvidaste tu contraseña?</a>
          )}
        </p>

        <p style={{color: 'white', fontSize: '16px'}}>
          ¿No tiene una cuenta? <Link to="/register" style={{color: 'white'}}>Regístrese aquí</Link>
        </p>

      </div>

    </div>
  </>)
}

export default SignUp;