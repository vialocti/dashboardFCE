import axios from 'axios'

//const uri = 'http://localhost:5000/egresados'
const uri = 'http://200.12.136.75:5000/dbegresados'
//dbegresados/egreanio/2023/L
//egreaniolista/:anio/:lapso/:sede/:car
//egresadosaniosede/:anio/:lapso/:sede
//egrepromcaranio/:anio/:car/:lapso
//trae un listado con propmedios de egreso por carrerapor año

export const getEgresadosAnioSedePropuestaProm = async (anio, lapso) => {

    try {

        const rows = await axios.get(`${uri}/egreanio/${anio}/${lapso}`)


        return rows.data
    } catch (error) {
        console.log(error)
    }

}

//listado por sede carrera
export const getListadoEgreAnioSedePropuesta = async (anio, lapso, sede, car) => {

    try {

        const rows = await axios.get(`${uri}/egreaniolista/${anio}/${lapso}/${sede}/${car}`)
        return rows.data
    } catch (error) {
        console.log(error)
    }

}

export const getCantiEgreAnioSede = async (anio, lapso, sede) => {
    try {

        const rows = axios.get(`${uri}/egresadosaniosede/${anio}/${lapso}/${sede}`)
        return rows.data

    } catch (error) {
        console.log(error)
    }
} 