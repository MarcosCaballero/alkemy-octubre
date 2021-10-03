import React,{useState} from 'react'
import PropTypes from 'prop-types'
import './index.css'
import axios from 'axios';

const AddData = props => {
    
    const { setReloading, setMessage, categories} = props; // Este prop nos sirve para que en cada accion, con impacto en base de datos, que ejecute el usuario mande se pueda refrescar las tablas
    
    const [ visible, setVisible ] = useState(false);

    // Form Values
    const [ data, setData ] = useState({
        concept: "",
        amount: 0,
        op_type: "",
        op_date: "",
        category: "otros", //default otros
        modified_at: null, //Estatico solo cambia con la operacion de modify
    })

    const onHandleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const HandleFormSend = async (e) => {
        e.preventDefault()
        // Concept validation
        if(data.concept === "" || data.op_type === '' || data.op_date === "0000-00-00" || data.op_date === "") {
            setMessage({
                show: true,
                message: 'Completa los campos faltantes'
            })
        } else if(data.concept.trim().length <= 3){
            setMessage({
                show: true,
                message: "Ingresa un concepto mas largo"

            })
            setData({
                ...data,
                concept: ""
            })
        } else if(data.amount <= 0 ){
            setMessage({
                show: true,
                message: 'Ingresa un dato de monto que no sea negativo o igual a 0'
            })
        } else {
            // Esto crea datos y los parsea 
            // Hay que crear fetch y response que retorne el id del elemento
            const token = await localStorage.getItem("Token")
            axios.post(process.env.REACT_APP_CREATE_ROUTE, data, {
                headers: {
                    "authorization": token,
                }
            }).then(res => {
                    console.log(res) 
                    setTimeout(() => {
                        setReloading(true)
                    }, 3000)
                })
        }
    }

    return (
        <div>
            <button onClick={() => visible ? setVisible(false) : setVisible(true)}>Crear operación</button>
            {visible
            ? <form className="add-form" onSubmit={(e) =>  HandleFormSend(e) }>
                <div>
                    <label htmlFor="concept">Concepto</label>
                    <input
                    value={data.concept}
                    name="concept"
                    placeholder="Ingresa nombre de operacion"
                    onChange={onHandleChange}
                    />
                </div>
                <div>
                    <label htmlFor="amount">Monto</label>
                    <input 
                    value={data.amount}
                    type="number"
                    name="amount"
                    placeholder="500, 700, 80000"
                    onChange={onHandleChange}
                    />
                </div>
                <div>
                    <label htmlFor="type">Tipo de operación</label>
                    <select 
                    value={data.op_type}
                    name="op_type"
                    onChange={onHandleChange}
                    >
                        <option value="">Elige tipo de operacion</option>
                        <option value="income">Ingreso</option>
                        <option value="expense">Egreso</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="category">Categoría</label>
                    <select 
                    value={data.category}
                    name="category"
                    onChange={onHandleChange}
                    >
                        <option value="otros">Otros</option>
                        {
                            categories.map((cate, id) => {
                            return <option key={id} value={ cate }>{cate}</option>
                            })
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor="date">Fecha</label>
                    <input 
                    value={data.op_date}
                    type="date"
                    name="op_date"
                    onChange={onHandleChange}
                    />
                </div>
                <input type="submit" />
            </form>
            : null}
        </div>
    )
}

AddData.propTypes = {
    setReloading: PropTypes.func.isRequired,
    setMessage: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
}

export default AddData
