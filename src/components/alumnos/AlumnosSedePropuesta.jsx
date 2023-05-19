import React from 'react'
//import {useInscripcionesAnio} from '../../hooks/useInscripcionesAnio'

const AlumnosSedePropuesta = ({cantiAluSedePropuesta}) => {

  //console.log(anio)  
  
  
  
  //console.warn(cantidad.catidad,cantidadSede) 
  return (
    <div>
     <h4>Alumnos Activos Sede Propuesta</h4>
     <br/>
     

     <br/>
     <table className='table '>
      <thead>
        <tr>
          <th>Sede</th>
          <th>Propuesta</th>
          <th>Cantidad</th>
          
        </tr>
      </thead>



      <tbody>
      {cantiAluSedePropuesta.length>0? cantiAluSedePropuesta.map((ele, index)=>
      <tr key={index}>
        <td>{ele.sede}</td>
        <td>{ele.carrera}</td>
        
        <td>{ele.count}</td>
      </tr>
      ):null}
      </tbody>
      </table> 
    </div>
  )
}

export default AlumnosSedePropuesta