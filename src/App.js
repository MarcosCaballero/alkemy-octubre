import React,{ useState, useEffect } from 'react';
import Home from './components/Home';
import LoginPage from './components/LoginPage';


function App() {

    const [ login, setLogin ] = useState(false)

    const [ authorize, setAuthorize ] = useState(false)
    
    const [ authorization, setAuthorization ] = useState({
        username: "",
        token: "",
        balance: 0
        })

    const [ message, setMessage ] = useState({
        show: false,
        message: ""
    })

    useEffect(() => {
        if(login === true){
            setAuthorize(true)
            console.log("autorizado para entrar a la app")
        } else {
            return
        }
    }, [login, authorize]);

    useEffect(() => {
        
        if(message.show !== false){
            setTimeout(() => {
                setMessage({
                    show: false,
                    message: ""
                })
            }, 5000)
        }

    }, [message])

    return ( 
    <>
        { message.show !== false && message.message }
        { login === true && authorize === true
        ? <Home setMessage={ setMessage } setAuthorization={ setAuthorization } authorization={ authorization } /> 
        : <LoginPage setLogin={ setLogin } setMessage={ setMessage } setAuthorization={ setAuthorization } />
        }
    </>
        );
}

export default App;
