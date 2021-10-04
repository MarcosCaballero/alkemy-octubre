import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

const DelData = props => {

    const { delId, setReloading, setMessage} = props

    const onHandleDelete = async () => {  //Con esta función hacemos que el usuario pueda eliminar una operacion que quiera.
        const token = await localStorage.getItem("Token") //Se llama al token del usuario
        axios.delete(`${process.env.REACT_APP_DELETE_ROUTE}/${delId}`,{
            headers: {
                "authorization": token,
                "Content-Type": "application/json"
            }
        }) //Con solo pasarle el id y el token del usuaario ya podemos borrarlo 
            .then(res => {
                if(res.data.message.status === 204) {
                    setTimeout(() => {
                        setReloading(true)
                    }, 3000)
                    setMessage({
                        show: true,
                        message: res.data.message.message
                    })
                } else {
                    setMessage({
                        show: true,
                        message: res.data.message
                    })
                    console.log(res)
                    console.log('No se pudo eliminar el elemento. Intenta de nuevo mas tarde')
                }
            })
            .catch(e => console.log(e))

    }

    return <button className="form-button delete" onClick={() => onHandleDelete()}> Borrar elemento </button>
}

DelData.propTypes = {
    delId: PropTypes.number.isRequired,
    setMessage: PropTypes.func.isRequired,
    setReloading: PropTypes.func.isRequired,
}

export default DelData
