import React,{useEffect,useState} from 'react'
import IngresantesAnioSede from '../../components/ingresantes/IngreseantesAnioSede'
import { traerCantidadIngreso, traerCantidadIngresoUbicacion } from '../../services/servicesIngresantes'
import { Wrapper } from '../../styled-components/FormStyles'

const IngresantesPage = () => {

  const [cantidad, setCantidad]= useState(0)
  const [cantidadSede, setCantidadSede]=useState(null)
  const [anio,setAnio] = useState(1)
  const [anioTitulo, setanioTitulo] = useState(1)
  
  useEffect(()=>{
    
    const getTraerDatos = async ()=>{
      if(anio>2016){
          setCantidad(await traerCantidadIngreso(anio))
          setCantidadSede(await traerCantidadIngresoUbicacion(anio))

    }else{
      setCantidad(await traerCantidadIngreso(1))
      setCantidadSede(await traerCantidadIngresoUbicacion(1))
    }
    }

    getTraerDatos()
  },[anio])
  
/*
  const buscarInfo =()=>{

  }
*/
  const onHandleChange =()=>{
    setAnio(document.getElementById('anio').value)
    setanioTitulo(document.getElementById('anio').value)
  }

  //console.warn(cantidadI,cantidaSede) 
  
  return (
    <div className='container'>

<Wrapper>
    <div className='row'>
    
    
      <div className='col-md-4'>
            <div className='htmlfor'name="busqueda">Seleccionar Año </div>
            
            <input className='form-control' 
              type="text"
              id="anio"
              name="anio"
              onChange={onHandleChange}
              value={anio}
            
            />
            
          </div>
            
          <div className='col-md-2'>

          </div>

          <div className='col-md-2'>
            <br/>

            
          </div>
    </div>
    </Wrapper>
    <div className="row">
     {cantidadSede?
     <IngresantesAnioSede cantidad={cantidad} cantidadSede={cantidadSede} anioT={anioTitulo}  />
    :null 
    }
    </div>
     </div>
  )
}
export default IngresantesPage