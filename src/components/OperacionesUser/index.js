import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import DelData from '../TiposOperaciones/DelData'
import ModData from '../TiposOperaciones/ModData'
import './index.css'

const OperacionesUser = props => {

const { data, setReloading, setMessage} = props;

    
    const [ renderIn, setRenderIn ] = useState([])
    const [ renderEx, setRenderEx ] = useState([])

    const Render = async (data) => {
      const renderIncome = await data.filter(op => op.op_type === 'income').map(op => (
        <li key={op.id_operations}><span>{op.concept}</span>${op.amount} <ModData modId={op.id_operations} op={op} setReloading={ setReloading } setMessage={ setMessage }/> <DelData delId={ op.id_operations } setReloading={ setReloading } setMessage={ setMessage }/></li>
      ))
      const renderExpense = await data.filter(op => op.op_type === 'expense').map(op => (
        <li key={op.id_operations}><span>{op.concept}</span>${op.amount} <ModData modId={op.id_operations} op={op} setReloading={ setReloading } setMessage={ setMessage }/> <DelData delId={ op.id_operations } setReloading={ setReloading } setMessage={ setMessage }/></li>
      ))
      
      if(renderIncome.length !== 0){
        setRenderIn([renderIncome])
      }

      if(renderExpense.length !== 0){
        setRenderEx([renderExpense])
      }

    }

    useEffect(() => {
      setRenderEx([])
      setRenderIn([])
      Render(data)
    }, [data]) // Render , setReloading

    return (
        <div className="main-table">
            <div className="op-table">
            <h2>Ingresos</h2>
            <ul>
              { renderIn.length === 0
              ? <h2>No tienes operaciones en Ingresos. Puedes crear una abajo</h2>
              : renderIn 
              }  
            </ul>
            </div>
            <div  className="op-table">
            <h2>Egresos</h2>
            <ul>
              { renderEx.length !== 0
              ? renderEx 
              : <h2>No tienes operaciones en Egresos. Puedes crear una abajo</h2>
              }  
            </ul>
            </div>
        </div>
    )
}

OperacionesUser.propTypes = {
    data: PropTypes.array.isRequired,
    setReloading: PropTypes.func.isRequired,
    setMessage: PropTypes.func.isRequired
}

export default OperacionesUser
