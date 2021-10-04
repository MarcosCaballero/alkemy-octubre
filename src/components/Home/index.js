import React, { useState, useEffect } from 'react'
import './index.css'
import axios from 'axios';

//componentes
import BalanceCuenta from '../BalanceCuenta';
import OperacionesUser from '../OperacionesUser';
import AddData from '../TiposOperaciones/AddData'
import { categorias_list } from '../Categories';


const Home = props => {

    const { authorization, setAuthorization, setMessage } = props

    let [ data, setData ] = useState([]) //Operaciones del Usuario

    const [ reloading, setReloading ] = useState(false) //Cuando se genere alguna accion

    useEffect(() => { //Petición de datos si se encuentra autenticado el usuario y se actualiza si el usuario crea, borra y/o modifica

        if(true){
            axios.get(process.env.REACT_APP_USER_ROUTE, {
                headers: {
                    "authorization": authorization.token,
                }
            }).then(res => {
                console.log(res)
                setAuthorization({
                    ...authorization,
                    username: res.data.username,
                    balance: res.data.balance
                })
            })
            axios.get(process.env.REACT_APP_GET_OPS_ROUTE, {
                headers: {
                "authorization": authorization.token,
            }}
            ).then(res => {
                setData(res.data.data)
                setReloading(false)
                // if(res.data){
                // } else {
                //     setMessage({
                //         show: true,
                //         message: "Algo salio mal"
                //     })
                // }
            });
        } else {
            return
        }
    }, [reloading]) //isAuthenticated

    return (
        <div className="home-div">
            <div className="Home-container">
                <h1>Bienvenid@ { authorization.username }</h1>
                <div>
                    <BalanceCuenta amount={authorization.balance}/>
                    <OperacionesUser setMessage={ setMessage } setReloading={setReloading} data={data}/>
                    <AddData token={ authorization.token } categories={ categorias_list } setMessage={ setMessage } setReloading={setReloading}/>
                </div>
            </div>
        </div>
    );
};



export default Home;