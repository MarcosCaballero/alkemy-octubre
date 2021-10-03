import axios from 'axios';
import React,{ useState, useEffect } from 'react';
import Home from './components/Home';
import LoginPage from './components/LoginPage';


function App() {

    const [ login, setLogin ] = useState(false)
    
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

        // const token = localStorage.getItem("Token") // undefined

        // if(authorization.token !== "" ) {
        //     axios.get(process.env.REACT_APP_USER_ROUTE, {
        //         headers: {
        //             "authorization": token,
        //         }
        //     }).then(res => {
        //         console.log(res)
        //         setAuthorization({
        //             ...authorization,
        //             username: res.data.username,
        //             balance: res.data.balance
        //         })
        //     })
        //     // console.log(token)
        // } else {
        //     console.log("Algo tiene el token" + token)
        // }

    }, [login]);

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
        { login 
        ? <Home setMessage={ setMessage } setAuthorization={ setAuthorization } authorization={ authorization } /> 
        : <LoginPage setLogin={ setLogin } setMessage={ setMessage } setAuthorization={ setAuthorization } />
        }
    </>
        );
}

export default App;
