import React,{useEffect,useState} from 'react'
import { Wrapper } from '../../styled-components/FormStyles'
import { getEgresadosAnioSedePropuestaProm } from '../../services/servicesEgresados'
import EgresadosPromedioAnio from '../../components/egresados/EgresadosPromedioAnio'

const EgresadosAnioPromedioPage = () => {

  //const [cantidad, setCantidad]= useState(0)

  const [cantidadEgreProm, setCantidadEgreProm]=useState(null)
  const [anio,setAnio] = useState(1)
  //const [anioTitulo, setanioTitulo] = useState(1)
  
  useEffect(()=>{
    
    const getTraerDatos = async ()=>{
    
    
           
          setCantidadEgreProm(await getEgresadosAnioSedePropuestaProm(anio,'L'))

    
    }
    if(anio>2000){
      getTraerDatos()
    }
  },[anio])
  
/*
  const buscarInfo =()=>{

  }
*/
  const onHandleChange =()=>{
    setAnio(document.getElementById('anio').value)
    //setanioTitulo(document.getElementById('anio').value)
  }

  console.log(cantidadEgreProm) 
  
  return (
    <div className='container'>

<Wrapper>
    <div className='row'>
    
    
      <div className='col-md-4'>
            <div className='htmlfor'name="busqueda"><h5>Seleccionar Año</h5> </div>
            
            <input className='form-control' 
              type="text"
              id="anio"
              name="anio"
              onChange={onHandleChange}
              value={anio}
            
            />
            
          </div>
            
          <div className='col-md-1'>

          </div>

          <div className='col-md-4'>
            
              <h3>Promedio Egresos</h3>
            
          </div>
    </div>
    </Wrapper>
    <div className="row">
     {cantidadEgreProm?
     <EgresadosPromedioAnio cantidadEgreProm={cantidadEgreProm} anioT={anio}  />
    :null 
    }
    </div>
     </div>
  )
}
export default EgresadosAnioPromedioPage