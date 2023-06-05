import { useState, useEffect } from 'react'
import axios from 'axios'


export const usePageInicial = (anio) => {
    //const anio='2022'
    const uri_e = 'http://localhost:5000/dbegresados'
    const uri_i = 'http://localhost:5000/dbinscriptos'
    const uri_a = 'http://localhost:5000/alutivos'
    // const uri_e = 'http://200.12.136.75:5000/dbegresados'
    // const uri_i = 'http://200.12.136.75:5000/dbinscriptos'
    // const uri_a = 'http://200.12.136.75:5000/alutivos'

    //const [cantidadI, setCantidadI] = useState(0)
    const [cantidadSedeEgr, setCantidadEgr] = useState(null)
    const [cantidadAlu, setCantidadAlu] = useState(null)
    const [cantidadInsc, setCantidadInsc] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {

        traerInscriptosSede(anio)
        traerCantidadPorSede(anio)
        traerAlumnosActivosSede()

    }, [anio])

    //egresados anio en curso
    const traerCantidadPorSede = async () => {
        //console.log(`${uri}/inscrTotalIngreso/${anio}`)
        try {
            const rows = await axios.get(`${uri_e}/egresadosanio/${anio}/L`)
            setCantidadEgr(rows.data)
        } catch (err) {
            setError(err)
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    //inscripciones
    const traerInscriptosSede = async () => {
        try {
            const rows = await axios.get(`${uri_i}/inscriptosSedeanio/${anio + 1}`)
            setCantidadInsc(rows.data)
        } catch (err) {
            setError(err)
            console.log(error)
        } finally {
            setLoading(false)
        }
    }


    const traerAlumnosActivosSede = async () => {
        try {
            const rows = await axios.get(`${uri_a}/alumnosSede`)
            setCantidadAlu(rows.data)
        } catch (error) {
            setError(error)
            console.log(error)
        }
    }

    return { loading, error, cantidadSedeEgr, cantidadInsc, cantidadAlu }
}
