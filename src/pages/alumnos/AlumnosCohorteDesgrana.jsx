import React,{useEffect,useState} from 'react'

import { Wrapper, SelectorV, LabelF, MiniButton } from '../../styled-components/FormStyles'
import { traerDesmebraCohorte } from '../../services/servicesAlumnos'
import {traerIngresantesSedePropuestaTipo} from '../../services/servicesIngresantes'
import BarChart from '../../components/graficos/BarChart'



const AlumnosCohorteDesgrana = () => {

  //const [cantidad, setCantidad]= useState(0)
  const [ingreAnio, setIngreAnio]=useState(null)
  const [alumnosDes, setAlumnosDes] = useState(null)
  const [labels, setLabels]=useState(null)
  const [anioI,setAnioI] = useState(1)
  const [anioFC,setAnioFC] = useState(1)
  const [sede, setSede]=useState(1)
  const [carrera, setCarrera] = useState(1)
  const [datos,setDatos]=useState(null)
  
  
  useEffect(()=>{
    
    const getTraerDatos = async ()=>{
      
        console.log('eureka')
     
        setDatos(alumnosDes.map((data)=>data.total.reinsc))
        setLabels(alumnosDes.map((data)=>data.anio))
        /*{
            
            labels:alumnosDes.map((data)=>data.anio),
            datasets:[{
              label:"Numero de Reinsc",
              data:alumnosDes.map((data)=>data.total.reinsc)
            }]
          
          }
        )
*/
    
    }
    if(alumnosDes){
    getTraerDatos()
    }
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

  const traerCarrera=(carrera)=>{
    if(carrera==='1'){
      return 'Contador Pub.Nacional'
    }else if(carrera==='2'){
      return 'Lic.Administración'
    }else if(carrera==='3'){
      return 'Lic.Economía'
    }else if(carrera==='6'){
      return 'Lic.Gestión Neg.Regionales'
    }else if(carrera==='7'){
      return 'Lic.Logogistica'
      
    }else if(carrera==='8'){
      return 'Contador Público'
    }

  }

    const traerSede=(sede)=>{
      if(sede==='1'){
        return 'Mendoza'
      }else if(sede==='2'){
        return 'San Rafael'
      }else if(sede==='3'){
        return 'Gral.Alvear'
      }else if(sede==='4'){
        return 'Sede Este'
      }else{
        return ''
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
      <div className="col-md-7">
      <h6>Desgranamiento Cohorte: sede:{traerSede(sede)}, carrera:{traerCarrera(carrera)}</h6>
      </div>
      <div className="col-md-2">
          <h6>Año Ingreso: {anioI>2014?anioI:null}</h6>  
      </div>
      <div className="col-md-2">
        <h6>Ingresantes:{ingreAnio?ingreAnio[0].canti:0}</h6>
      </div>

      
      
      <hr />
    </div>
    <div className="row">
     <div className="col-md-3">
      <br/>
      <table className='table table-bordered table-striped'>
       <thead>
       <tr>
        <th>Año</th>
        <th>Reinscriptos</th>
        <th>%Ingresantes</th>
        
        </tr> 
      </thead>
      <tbody>
    {alumnosDes ? alumnosDes.map((ele,index) =>
         
         <tr key={index}>
          <td>{ele.anio}</td>
          <td>{ele.total.reinsc}</td>
          <td>{Number(ele.total.reinsc/ingreAnio[0].canti * 100).toFixed(2)}</td>
          
          
        </tr> 
        
        
      ):null} 
      </tbody>
      </table>  
     </div>
     <div className='col-md-2'></div>
     <div className="col-md-5" style={{width:'50%',height:'300px'}}>
     { alumnosDes? <BarChart datos={datos} etiquetas={labels} />:null}      
       </div>
     </div>
    
    
   </div>
  )
}

export default AlumnosCohorteDesgrana