import { useState, useEffect } from 'react'
import axios from 'axios'


export const useInscripcionesAnio = (anio) => {
    //const anio='2022'
    const uri = 'http://localhost:5000/dbinscriptos'
    // const uri = 'http://200.12.136.75:5000/dbinscriptos'

    const [cantidadI, setCantidadI] = useState(0)
    const [cantidaSede, setCantidadSede] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        traerCantidad(anio)
        traerCantidadPorSede(anio)
    }, [anio])


    const traerCantidad = async (anio) => {
        //console.log(`${uri}/inscrTotalIngreso/${anio}`)
        try {
            const rows = await axios.get(`${uri}/inscrTotalIngreso/${anio}`)
            setCantidadI(rows.data)
        } catch (err) {
            setError(err)
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const traerCantidadPorSede = async (anio) => {
        try {
            const rows = await axios.get(`${uri}/totalsedepropuesta/${anio}`)
            setCantidadSede(rows.data)
        } catch (err) {
            setError(err)
            console.log(error)
        } finally {
            setLoading(false)
        }
    }





    return { error, loading, cantidadI, cantidaSede }
}