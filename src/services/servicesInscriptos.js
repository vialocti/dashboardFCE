import axios from 'axios'

//const uri = 'http://localhost:5000/dbinscriptos'
const uri = 'http://200.12.136.75:5000/dbinscriptos'



export const traerCantidad = async (anio) => {
    //console.log(`${uri}/inscrTotalIngreso/${anio}`)
    try {
        const rows = await axios.get(`${uri}/inscrTotalIngreso/${anio}`)
        //console.log(rows)
        return rows.data

    } catch (error) {

        console.log(error)
    }
}

export const traerCantidadPorSede = async (anio) => {
    try {
        const rows = await axios.get(`${uri}/totalsedepropuesta/${anio}`)
        //console.log(rows)
        return rows.data
    } catch (error) {

        console.log(error)
    }
}

export const traerInscriptosEntreAnios = async (anioi, aniof) => {

    try {
        const rows = await axios.get(`${uri}/inscriptTanios/${anioi}/${aniof}`)
        console.log(rows.data)
        return rows.data
    } catch (error) {
        console.log(error)
    }
}
