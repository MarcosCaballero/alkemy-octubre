import axios from 'axios'
import React,{ useState} from 'react'
import RegisterPage from '../RegisterPage';
import './index.css'

const LoginPage = (props) => {

    const { setLogin, setMessage, setAuthorization } = props;

    const [ data, setData ] = useState({
        email: "",
        password: ""
    })

    //Para mostrar y ocultar el formulario de registro
    const [ visible, setVisible ] = useState(false)

    const { email, password } = data
    
    const onHandleChange = (e) => { // Para guardar los cambios que el usuario realice en los campos del formulario
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }
    
    const onHandleSubmit = (e) => {
        e.preventDefault()
        if(email === "" || password === ""){
            setMessage({
                show: true,
                message: "Completa los campos requeridos"
            })
        } else if( password.length < 6 ){
            setMessage({
                show: true,
                message: "La contraseña tiene que tener al menos 6 caracteres"
            })
        } else {
            axios.post(process.env.REACT_APP_LOGIN_ROUTE, {
                email,
                password
            }).then(res => {
                if(res.data.status === 200) {
                    setMessage({
                        show: true,
                        message: res.data.message
                    })
                    // console.log(res.data)
                    setAuthorization({
                        username: "",
                        balance: 0,
                        token: res.data.token
                    })
                    setLogin(true)
                    localStorage.setItem("Token", res.data.token)
                } else {
                    setMessage({
                        show: true,
                        message: res.data.message
                    })
                }
            })

        }
        
    };

    return (
        <>
        { visible === true
        ? <RegisterPage setMessage={ setMessage } setVisible={ setVisible }/>
        : <div className="Login-Page-container">
            <h1>Bienvenido a Wallet App</h1>
            <h2>Loguearse</h2>
            <div style={{width:"300px"}} >
            <div className="gif-Login"><iframe title="pepe" src="https://giphy.com/embed/3o6UB5RrlQuMfZp82Y" width="100%" height="100%"  frameBorder="0" className="giphy-embed" allowFullScreen></iframe></div>
            </div>
            <form onSubmit={onHandleSubmit}>
                <div>
                    <label htmlFor="email" >Email</label>
                    <input type="email" name="email"  value={ data.email } onChange={ onHandleChange } /> 
                </div>

                <div>
                    <label htmlFor="password" >Password</label>
                    <input type="password" name="password" value={ data.password } onChange={ onHandleChange } /> 
                </div>

                <input type="submit"/>

            </form>
            <button onClick={() => setVisible(!visible)}>¿No tienes cuenta? ¡Registrate Aquí!</button>
            <p>Tienes que iniciar sesión para poder acceder a la aplicación</p>
         </div>
        }
        </>
    )
}

export default LoginPage
