import React,{ useState} from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

import './index.css'

const RegisterPage = (props) => {

    const { setMessage, setVisible } = props;

    const [ data, setData ] = useState({
        email: "",
        username: "",
        password: ""
    })

    const { email, username, password } = data
    
    const onHandleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }
    
    const onHandleSubmit = (e) => {
        e.preventDefault()
        if(email === "" || username === "" ||password === ""){
            setMessage({
                show: true,
                message: "Completa los campos requeridos"
            })
        } else if(username.length <= 3) {
            setMessage({
                show: true,
                message: "El username tiene que tener al menos 3 caracteres"
            })
        } else if( password.length < 6 ){
            setMessage({
                show: true,
                message: "La contraseña tiene que tener al menos 6 caracteres"
            })
        } else {
            axios.post(process.env.REACT_APP_REGISTER_ROUTE, {
                headers: {
                    "Content_Type": "application/json",
                },
                email,
                username,
                password
            }).then(res => {
                setMessage({
                    show: true,
                    message: res.data.message
                })
                setTimeout(() => {
                    setVisible(visible => !visible) 
                }, 3000)
            })

        }
        
    };

    return (
        <div className="Login-Page-container">
            <h1>Bienvenido a Wallet App</h1>
            <h2>Registrarse</h2>
            <div style={{width:"300px"}} >
            <div className="gif-Login"><iframe title="pepe" src="https://giphy.com/embed/3o6UB5RrlQuMfZp82Y" width="100%" height="100%"  frameBorder="0" className="giphy-embed" allowFullScreen></iframe></div>
            </div>
            <form onSubmit={onHandleSubmit}>
                <div>
                    <label htmlFor="email" >Email</label>
                    <input type="email" name="email"  value={ data.email } onChange={ onHandleChange } /> 
                </div>

                <div>
                    <label htmlFor="username" >Username</label>
                    <input type="text" name="username"  value={ data.username } onChange={ onHandleChange } /> 
                </div>

                <div>
                    <label htmlFor="password" >Password</label>
                    <input type="password" name="password" value={ data.password } onChange={ onHandleChange } /> 
                </div>

                <input type="submit" value="Registrarse"/>

            </form>
            <button onClick={() => setVisible(visible => !visible)}>¿Ya tienes cuenta? ¡Logueate aquí!</button>
            <p>Tienes que iniciar sesión para poder acceder a la aplicación</p>
        </div>
    )
}


RegisterPage.propTypes = {
    setVisible: PropTypes.func.isRequired,
    setMessage: PropTypes.func.isRequired
}

export default RegisterPage
