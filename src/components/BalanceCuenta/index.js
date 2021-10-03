import React from 'react'
import PropTypes from 'prop-types'

const BalanceCuenta = props => {

    const { amount } = props;
    
    return (
        <div>El balance actual es de ${amount}</div>
    )
}

BalanceCuenta.propTypes = {
    amount: PropTypes.number.isRequired,
}

export default BalanceCuenta
