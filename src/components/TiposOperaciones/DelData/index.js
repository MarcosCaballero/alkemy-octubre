import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

const DelData = props => {

    const { delId, setReloading, setMessage} = props

    const onHandleDelete = () => {  //Con esta función hacemos que el usuario pueda eliminar una operacion que quiera.
        axios.delete(`${process.env.DELETE_ROUTE}`,{
            params: {
                id: delId
            },
        }) //Con solo pasarle el id ya podemos borrarlo
            .then(res => {
                if(res.status === 204) {
                    console.log(res)
                    // setTimeout(() => {
                    //     setReloading(true)
                    // }, 3000)
                } else {
                    console.log(res)
                    console.log('No se pudo eliminar el elemento. Intenta de nuevo mas tarde')
                }
            })
            .catch(e => console.log(e))

    }
            
    

    return (
        <button onClick={() => onHandleDelete()}>
            Borrar elemento
        </button>
    )
}

DelData.propTypes = {
    delId: PropTypes.number.isRequired,
    setMessage: PropTypes.func.isRequired,
    setReloading: PropTypes.func.isRequired,
}

export default DelData
