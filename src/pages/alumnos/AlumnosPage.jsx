import React from 'react'

//import { traerCantidadAlu, traerCantidadPerAlu, traerAlumosUbiPro } from '../../services/servicesAlumnos'
import { Wrapper } from '../../styled-components/FormStyles'
import AlumnosSedePropuesta from '../../components/alumnos/AlumnosSedePropuesta'
import { useAlumnosActivos } from '../../hooks/useAlumnosActivos'

const AlumnosPage = () => {


  const {loading, error,cantidadA, cantidadAP,alumnosUbiSede} = useAlumnosActivos()
  /*
  const [cantidadA, setCantidadA]= useState(null)
  const [cantidadAP, setCantidadAP]= useState(null)
  const [cantiAluSedePropuesta, setCantiAluSedePropuesta]=useState(null)
  */
  
  /*
  useEffect(()=>{
    
    const getTraerDatos = async ()=>{
      
      setCantidadA(await traerCantidadAlu())
      setCantidadAP(await traerCantidadPerAlu())
      setCantiAluSedePropuesta(await traerAlumosUbiPro())
    
    }

    getTraerDatos()
    
  },[])
  

  const buscarInfo =()=>{

  }

  const onHandleChange =()=>{
    setAnio(document.getElementById('anio').value)
    setanioTitulo(document.getElementById('anio').value)
  }
*/
  //console.warn(cantidadI,cantidaSede) 

  
  if(loading) return <p>Cargando datos .....</p>
  if(error) return <p>Error de Carga</p>
  
  return (
    <div className='container'>
      <Wrapper>
      <div className="row">

          <h2>Alumos Activos</h2>
      </div>
      <div className="row">
        <div className="col-md-4">
            <h6>Cantidad de Alumnos</h6>
            <h6>{cantidadAP?cantidadAP[0].canti:0}</h6>
        </div>
        <div className="col-md-6">
            <h6>Cantidad Alumnos Activos/Propuestas</h6>
            <h6>{cantidadA?cantidadA[0].canti:0}</h6>
        </div>
      </div>
      </Wrapper>
      <div className="row">
        {alumnosUbiSede
        ?<AlumnosSedePropuesta cantiAluSedePropuesta={alumnosUbiSede} />
        :null
        
      }
      </div>
  
  </div>
  )

}
export default AlumnosPage