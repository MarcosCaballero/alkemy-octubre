import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

const ModData = props => {

    const { token, modId, op, setMessage, setReloading} = props

    // UseStates componente
    const [ visible, setVisible ] = useState(false);

    //UseStates Dato
    const [ data, setData ] = useState({
        concept: op.concept,
        amount: op.amount,
        date: op.op_date.split("T")[0],
    })

    const onHandleChange = (e) => { //Funcion para poder tomar los datos que el usuario tipee
        setData({
            ...data,
            [e.target.name]: e.target.value})
    }

    const onHandleSubmit = async (e) => { //Realiza la peticion de modificacion a la base de datos
        e.preventDefault()
        if(data.concept === "" || data.date === "0000-00-00" || data.date === "") {
            console.log('Completa los campos faltantes')
        } else if(data.concept.trim().length <= 3){
            console.log("Ingresa un concepto mas largo")
            setData({ 
                ...data,
                concept: op.concept})
        } else if(data.amount <= 0 ){
            console.log('Ingresa un dato de monto que no sea negativo o igual a 0')
            setData({
                ...data,
                amount: op.amount})
        } else {
            // Una vez que los datos del usuario cumplen con los verificadores se ejecuta la lamada a la base de datos
            const token = await localStorage.getItem("Token") //Se llama al token del usuario
            axios.put(`${process.env.REACT_APP_MODIFY_ROUTE}/${modId}`, data, {
                headers: {
                    "authorization": token,
                    "Content-Type": "application/json"
                }
            }).then(res => {
                console.log(res)
                // setMessage({
                //     show: true,
                //     message: res.data.message
                // })
                // setTimeout(() => {
                //     setReloading(true)
                // }, 3000)
            })
        }
    }

    const onClose = () => { // Funcion para mostrar y ocultar el formulario
        setVisible(false)
    }

    return (
        <div>
            <button className="form-button modify" onClick={() => visible ? onClose() : setVisible(true)} >Modificar Elemento</button>
            {visible
            ? <form onSubmit={(e) => onHandleSubmit(e) }>
                <input  
                    type='text'
                    name="concept"
                    value={data.concept}
                    onChange={onHandleChange}
                />
                <input  
                    type='number'
                    name="amount"
                    value={data.amount}
                    onChange={onHandleChange}
                />
                <input  
                    type='date'
                    name="date"
                    value={data.date}
                    onChange={onHandleChange}
                />
                <input 
                    className="form-button "
                    type="submit"
                />
            </form>
            : null
            }
        </div>
    )
}

ModData.propTypes = {
    modId: PropTypes.number.isRequired,
    op: PropTypes.object.isRequired,
    setMessage: PropTypes.func.isRequired,
    setReloading: PropTypes.func.isRequired,
}

export default ModData