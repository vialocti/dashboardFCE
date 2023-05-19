import React,{useEffect,useState} from 'react'
//import IngresantesAnioSede from '../../components/ingresantes/IngreseantesAnioSede'
import { traerIngresantesEntreAnios } from '../../services/servicesIngresantes'
import { Wrapper, Button } from '../../styled-components/FormStyles'



const IngresantesPageEntreAnios = () => {

  //const [cantidad, setCantidad]= useState(0)
  const [ingreAnios, setIngreAnios]=useState(null)
  const [anioi,setAnioi] = useState(1)
  const [aniof,setAniof] = useState(1)
  
  
  useEffect(()=>{
    
    const getTraerDatos = async ()=>{
      
        console.log('eureka')

    
    }

    getTraerDatos()
  },[ingreAnios])
  
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
    setIngreAnios( await traerIngresantesEntreAnios(anioi,aniof))
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
     
    {ingreAnios ? ingreAnios.map((ele,index) =>
         <ol>
         <li key={index} value={ele.anio}>{ele.total.canti}</li> 
        
        </ol>
      ):null}   
     
    </div>
   </div>
  )
}
export default IngresantesPageEntreAnios