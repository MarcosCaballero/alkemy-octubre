import React,{ useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Categories = props => {

    const { data, children } = props;

    const [ datos, setDatos ] = useState([{
        content: "Cuota colegio junio",
        amount: 500,
        type: "Egreso",
        creation_date: "2021/05/12",
        category: "Hijos",
        sub_category: { 
            sub_category_1: "educacion",
        },
    },{
        content: "Programacion",
        amount: 50000,
        type: "ingreso",
        creation_date: "2021/05/12",
        category: "Hijos",
        sub_category: { 
            sub_category_1: "educacion",
        },
    },{
        content: "Cuota colegio junio",
        amount: 500,
        type: "Ingreso",
        creation_date: "2021/05/12",
        category: "Hijos",
        sub_category: { 
            sub_category_1: "educacion",
        },
    }])

    const [ Categoria, setCategoria ] = useState("")
    const [ Mensaje, setMensaje ] = useState("")

    // Categorias: Gaming, Suscripciones, Hogar, Tecnología, Trabajo, Salidas, Deportes
    // Educación, Delivery, Hobbies, Donaciones, Belleza, Auto, Hijos
    // Familia, Mascotas, Amigos, Transporte, Shopping, Bares, Entretenimiento, vestimenta
    // Viajes, Cuidado Personal, Servicios, Cajeros, Supermercados, Restaurant, Otros


    const SearchBar = async (dato) => {
        const newData = data.find(dato => dato.category === { Categoria })
    }

    const handlerChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setCategoria(e.target.value)
    }

    useEffect(() => {
        if(Categoria.trim().toLowerCase() === "") {
            setMensaje()
        } else if(Categoria.toLowerCase().trim() === "juegos") {
            setMensaje(SearchBar(data))
        } else {
            setMensaje("No se ha encontrado lo que buscas")
        }
    }, [Categoria])


    return (
        <div>
            <form>
                <input 
                type="text"
                value={Categoria}
                onChange={(e) => handlerChange(e)}
                />
                <h1>{ Mensaje }</h1>
            </form>            
            { data }
        </div>
    )
}

Categories.propTypes = {

}

export const categorias_list = ["gaming", "suscripciones", "hogar", "Tecnologia", "Trabajo",
"Salidas", "Deportes", "Educación", "Delivery", "hobbies", "donaciones", "belleza", "auto", "hijos",
"familia", "mascotas", "amigos", "transporte", "shopping", "bares", "entretenimiento", "vestimenta",
"viajes", "cuidado personal", "servicios", "cajeros", "supermercados", "restaurant"]

export default Categories
