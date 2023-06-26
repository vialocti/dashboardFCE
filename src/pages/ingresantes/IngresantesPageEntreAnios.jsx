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
  
  }

   
  //console.log(ingreAnios)
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
      <h3>Comparativa Ingresantes entre Años Sucesivos  </h3>
    </div>
    <br />
    <div className="row">
      
     <div className="col-md-5 col-xs-12">
      <table className='table table-bordered table-striped'>
     <thead>
       
       <tr>
        <th>Año</th>
        <th>Nro.Ingr.PrimeraVFCE</th>
        <th>Nro.Ingr.C.Carrera</th>
       </tr>
      </thead>
      <tbody>
    {ingreAnios ? ingreAnios.map((ele,index) =>
         <tr key={index}>
          <td>{ele.anio}</td> 
          <td>{ele.totalI}</td> 
          <td>{ele.totalIC}</td>
        </tr>
      ):null}   
     </tbody>
     </table>
     </div>

     <div className="col-md-1 col-xs-12">

     </div>
     <div className="col-md-6 col-xs-12">
        <table className='table table-bordered table-striped'>
        
          <tr>
             <td>Nro.Ingr.PrimeraVFCE</td>
            <tr>
              <td>tipo_ingreso 1, con título secundario</td>

            </tr>
            <tr>
              <td>tipo_ingreso 3, mayor 25 años</td>
              
            </tr>
            <tr>
              <td>tipo_ingreso 4, proveniente de Otra Universidad</td>
              
            </tr>
            <tr>
              <td>tipo_ingreso 5, proveniente de Otra Facultad UNCU</td>
              
            </tr>
            </tr>
          <tr>
            <td>Nro.Ingr.C.Carrera</td>
            <td>Solo tipo de ingreso 6, Proveniente de otra Carrera</td>
          </tr>
        </table>
     </div>
    </div>
   </div>
  )
}
export default IngresantesPageEntreAnios