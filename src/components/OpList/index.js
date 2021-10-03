import React from 'react'
import PropTypes from 'prop-types'

const OpList = props => {

    const { data } = props

    return (
        <div>
            <h2>Ultimos movimientos</h2>
            <ul>
            {
                data.map(op => (
                    <li key={ op.id_operations }>
                        <span>{op.concept}</span>
                        <span>$ {op.amount}</span>
                        <span>{op.op_date}</span>
                        <span>{op.op_type}</span>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}

OpList.propTypes = {
    data: PropTypes.array.isRequired,
}

export default OpList
