import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

const ModData = props => {

    const { modId, op, setMessage, setReloading} = props

    // UseStates componente
    const [ visible, setVisible ] = useState(false);

    //UseStates Dato
    const [ data, setData ] = useState({
        concept: op.concept,
        amount: op.amount,
        date: op.op_date.split("T")[0],
    })

    const onHandleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value})
    }

    const onHandleSubmit = (e) => {
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
            // Esto crea datos y los parsea 
            // Hay que crear fetch y response que retorne el id del elemento
            axios.put(`${process.env.REACT_APP_MODIFY_OPERATION}`, {
                params:{
                    id: modId
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

    const onClose = () => {
        setVisible(false)
    }

    return (
        <div>
            <button onClick={() => visible ? onClose() : setVisible(true)} >Modificar Elemento</button>
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