import axios from 'axios'

//const uri = 'http://localhost:5000/alutivos'
const uri = 'http://200.12.136.75:5000/alutivos'
/*

router.get('/alumsact', getAlumnosActivos)
router.get('/alumsactper', getAlumnosPerActivos)
router.get('/alumsactpro', getAlumnosPorPropuesta)
router.get('/alumsactubipro', getAlumnosPorUbiPropuesta)
router.get('/reinscriptos/:anio', getReinscriptosUbiProp)
*/

export const traerAlumosUbiPro = async () => {
    //console.log(`${uri}/inscrTotalIngreso/${anio}`)
    try {
        const rows = await axios.get(`${uri}/alumsactubipro`)
        //console.log(rows)
        return rows.data

    } catch (error) {

        console.log(error)
    }
}


export const traerCantidadPerAlu = async () => {

    try {
        const rows = await axios.get(`${uri}/alumsactper`)
        //console.log(rows)
        return rows.data

    } catch (error) {

        console.log(error)
    }
}


export const traerCantidadAlu = async () => {
    //console.log(`${uri}/inscrTotalIngreso/${anio}`)
    try {
        const rows = await axios.get(`${uri}/alumsact`)
        //console.log(rows)
        return rows.data

    } catch (error) {

        console.log(error)
    }
}
