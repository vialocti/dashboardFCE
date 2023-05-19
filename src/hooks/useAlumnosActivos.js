import { useState, useEffect } from 'react'
import axios from 'axios'
import { traerCantidad } from '../services/servicesInscriptos'




export const useAlumnosActivos = () => {

    //const uri = 'http://localhost:5000/alutivos'
    const uri = 'http://200.12.136.75:5000/alutivos'

    const [cantidadAP, setCantidadAP] = useState(0)
    const [cantidadA, setCantidadA] = useState(0)
    const [alumnosUbiSede, setAlumnosUbiSede] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        traerCantidadA()
        traerCantidadAP()
        traerAlumnosPorSede()
    }, [])


    const traerCantidadAP = async (anio) => {

        try {
            const rows = await axios.get(`${uri}/alumsactper`)
            setCantidadAP(rows.data)
        } catch (err) {
            setError(err)
            console.log(error)
        } finally {
            setLoading(false)
        }
    }


    const traerCantidadA = async () => {

        try {
            const rows = await axios.get(`${uri}/alumsact`)
            setCantidadA(rows.data)
        } catch (err) {
            setError(err)
            console.log(error)
        } finally {
            setLoading(false)
        }
    }


    const traerAlumnosPorSede = async () => {

        try {
            const rows = await axios.get(`${uri}/alumsactubipro`)
            setAlumnosUbiSede(rows.data)
        } catch (err) {
            setError(err)
            console.log(error)
        } finally {
            setLoading(false)
        }
    }


    return { loading, error, cantidadA, cantidadAP, alumnosUbiSede }
}
