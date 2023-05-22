import axios from 'axios'

//const uri = 'http://localhost:5000/dbingreso'
const uri = 'http://200.12.136.75:5000/dbingreso'


export const traerCantidadIngreso = async (anio) => {

    try {
        const rows = await axios.get(`${uri}/ingreTotalAnio/${anio}`)
        //console.log(rows)
        return rows.data

    } catch (error) {

        console.log(error)
    }
}

export const traerCantidadIngresoUbicacion = async (anio) => {
    try {

        const rows = await axios.get(`${uri}/ingresantesTotalIngresoAnioUbi/${anio}`)
        return rows.data
    } catch (error) {
        console.log(error)
    }
}


export const traerIngresantesEntreAnios = async (anioi, aniof) => {

    try {

        const rows = await axios.get(`${uri}/ingreTotalTanio/${anioi}/${aniof}`)
        return rows.data
    } catch (error) {
        console.log(error)
    }
}


//traer ingresantes anio sede propuesta tipo

export const traerIngresantesSedePropuestaTipo = async (anio, sede, carrera, tipoI) => {
    try {
        const rows = await axios.get(`${uri}/ingresantesaspi/${anio}/${sede}/${carrera}/${tipoI}`)
        return rows.data
    } catch (error) {
        console.log(error)
    }
}