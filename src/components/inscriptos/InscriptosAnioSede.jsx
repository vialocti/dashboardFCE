import React from 'react'
//import {useInscripcionesAnio} from '../../hooks/useInscripcionesAnio'

const InscriptosAnioSede = ({cantidad,cantidadSede,anioT}) => {

  //console.log(anio)  
  
  
  
  //console.warn(cantidad.catidad,cantidadSede) 
  return (
    <div>
     <h2>Inscriptos Anio: {anioT}</h2>
     <br/>
     <h4>Numero de Inscriptos: {cantidad.catidad}</h4>

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
      {cantidadSede.length>0? cantidadSede.map((ele, index)=>
      <tr key={index}>
        <td>{ele.sede}</td>
        <td>{ele.carrera}</td>
        
        <td>{ele.nro}</td>
      </tr>
      ):null}
      </tbody>
      </table> 
    </div>
  )
}

export default InscriptosAnioSede