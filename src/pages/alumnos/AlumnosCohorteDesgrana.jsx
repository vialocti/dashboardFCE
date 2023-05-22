import React,{useEffect,useState} from 'react'

import { Wrapper, Button, SelectorV, LabelF, MiniButton } from '../../styled-components/FormStyles'
import { traerDesmebraCohorte } from '../../services/servicesAlumnos'
import {traerIngresantesSedePropuestaTipo} from '../../services/servicesIngresantes'
//import BarChart from '../../components/graficos/BarChart'



const AlumnosCohorteDesgrana = () => {

  //const [cantidad, setCantidad]= useState(0)
  const [ingreAnio, setIngreAnio]=useState(null)
  const [alumnosDes, setAlumnosDes] = useState(null)
  const [anioI,setAnioI] = useState(1)
  const [anioFC,setAnioFC] = useState(1)
  const [sede, setSede]=useState(1)
  const [carrera, setCarrera] = useState(1)
  //const [datos,setDatos]=useState(null)
  
  
  useEffect(()=>{
    
    const getTraerDatos = async ()=>{
      
        console.log('eureka')
     /*
        setDatos(
          {
            labels:alumnosDes.map((data)=>data.anio),
            datasets:[{
              label:"Numero de Reinsc",
              data:alumnosDes.map((data)=>data.total.reinsc)
            }]
          }
        )

    */
    }
    
    getTraerDatos()
  },[alumnosDes])
  
/*
  const buscarInfo =()=>{

  }
*/
  const onHandleChange =(event)=>{
    //console.log(event.target.name)
    if(event.target.name==='anioI'){
        setAnioI(event.target.value)
    }else if(event.target.name ==='anioFC'){
        setAnioFC(event.target.value)
    }else if(event.target.name==='sede'){  
        setSede(event.target.value)
    }else if(event.target.name==='propuesta'){
        setCarrera(event.target.value)
    
    }
  }
  const onHandleinfo =async ()=>{
    if(anioI>2014){
    setIngreAnio( await traerIngresantesSedePropuestaTipo(anioI, sede, carrera,1))
    setAlumnosDes( await traerDesmebraCohorte(anioI, sede, carrera, anioFC,1))
    }
    
  }

  
  //console.log(ingreAnio)
  return (
    <div className='container'>
    <Wrapper>
    <div className='row'>
    
     
      <div className='col-md-2'>
            <LabelF name="anioI">Ingreso(mayor 2014)</LabelF>
            
            <input className='form-control' 
              type="text"
              id="anioI"
              name="anioI"
              onChange={onHandleChange}
              value={anioI}
            
            />
            
          </div>
            
          
          <div className='col-md-2'>
            <LabelF name="anioFC">Año.U.Reinsc</LabelF>
            
            <input className='form-control' 
              type="text"
              id="anioFC"
              name="anioFC"
              onChange={onHandleChange}
              value={anioFC}
            
            />
            

          </div>
          
          <div className="col-md-2">
          <LabelF htmlFor='sede'>Sede</LabelF>
                <SelectorV name="sede" id='sede' onChange={onHandleChange}>
                    <option value="1">Mendoza</option>
                    <option value="2">San Rafael</option>
                    <option value="3">Gral.Alvear</option>
                    <option value="4">Sede Este</option>
                </SelectorV>
          </div>

          <div className="col-md-4">
          <LabelF htmlFor='propuesta'>Propuesta Academica</LabelF>
                <SelectorV name="propuesta" id='propuesta' onChange={onHandleChange}>
                    <option value="1">CONTADOR PUBLICO NACIONAL</option>
                    <option value="2">LICENCIATURA EN ADMINISTRACION</option>
                    <option value="3">LICENCIATURA EN ECONOMIA</option>
                    <option value="6">LGN.REGIONALES</option>
                    <option value="7">LICENCIADO EN LOGISTICA</option>
                    <option value="8">CONTADOR PUBLICO</option>
                    
                </SelectorV>
          </div>
          
          
          <div className="col-md-2">
            <MiniButton onClick={onHandleinfo} >
              Mostrar datos
            </MiniButton>
          </div>

    </div>
    </Wrapper>
    <br />
    <div className="row">
      <h3>Desgranamiento Cohorte</h3>
    </div>
    <div className='row'>
      <div className="col-md-3">
          <h5>Año Ingreso :{anioI>2014?anioI:null}</h5>  
      </div>
      <div className="col-md-3">
        <h5>Cantidad Ingresantes:{ingreAnio?ingreAnio[0].canti:0}</h5>
      </div>

      
      
      <hr />
    </div>
    <div className="row">
     <div className="col-md-5">
      <table className='table table-bordered'>
       <tr className='table-primary'>
        <th>Año</th>
        <th>Reinscriptos</th>
        </tr> 
        
    {alumnosDes ? alumnosDes.map((ele,index) =>
         
         <tr key={index}>
          <td>{ele.anio}</td>
          <td>{ele.total.reinsc}</td>
          
        </tr> 
        
        
      ):null} 
      </table>  
     </div>
     <div className="col-md-6">
      
       </div>
    </div>
   </div>
  )
}

export default AlumnosCohorteDesgrana