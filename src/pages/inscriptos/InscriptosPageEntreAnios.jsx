import React,{useEffect,useState} from 'react'
//import IngresantesAnioSede from '../../components/ingresantes/IngreseantesAnioSede'
import { traerInscriptosEntreAnios } from '../../services/servicesInscriptos'
import { Wrapper, Button } from '../../styled-components/FormStyles'



const InscriptosPageEntreAnios = () => {

  //const [cantidad, setCantidad]= useState(0)
  const [inscripAnios, setIngreAnios]=useState(null)
  const [anioi,setAnioi] = useState(1)
  const [aniof,setAniof] = useState(1)
  
  
  useEffect(()=>{
    
    const getTraerDatos = async ()=>{
      
        console.log('eureka')

    
    }

    getTraerDatos()
  },[inscripAnios])
  
/*
  const buscarInfo =()=>{

  }
*/
  const onHandleChange =(event)=>{
    if(event.target.name==='anioi'){
        setAnioi(event.target.value)
    }else if(event.target.name ==='aniof'){
        setAniof(event.target.value)
    }
    
  }

  const onHandleinfo =async ()=>{
    setIngreAnios( await traerInscriptosEntreAnios(anioi,aniof))
    //console.log(anioi, aniof)
  }

  //console.warn(cantidadI,cantidaSede) 
  
  return (
    <div className='container'>
    <Wrapper>
    <div className='row'>
    
     
      <div className='col-md-3'>
            <div className='htmlfor'name="anioi">Año Inicio </div>
            
            <input className='form-control' 
              type="text"
              id="anioi"
              name="anioi"
              onChange={onHandleChange}
              value={anioi}
            
            />
            
          </div>
            
          <div className='col-md-1'>

          </div>

          <div className='col-md-3'>
            <div className='htmlfor'name="aniof">Año Fin </div>
            
            <input className='form-control' 
              type="text"
              id="aniof"
              name="aniof"
              onChange={onHandleChange}
              value={aniof}
            
            />
            
          </div>
          

          <div className='col-md-1'>
                       
          </div>

          <div className="col-md-3">
            <Button onClick={onHandleinfo} >
              Mostrar datos
            </Button>
          </div>

    </div>
    </Wrapper>
    <br />
    <div className="row">
      <h3>Inscripciones</h3>
    </div>
    <div className="row">
     <table className='table table-bordered'>
      <tr>
        <th>Año Inscripcion</th>
        <th>Nro.Inscriptos</th>
      </tr>
    {inscripAnios ? inscripAnios.map((ele,index) =>
         <tr key={index} >
         <td>{ele.anio}</td>
         <td>{ele.total.catidad}</td> 
        
        </tr>
      ):null}   
     </table>
    </div>
   </div>
  )
}
export default InscriptosPageEntreAnios