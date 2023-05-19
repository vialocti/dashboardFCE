import React from 'react'
//import {useInscripcionesAnio} from '../../hooks/useInscripcionesAnio'

const IngresantesAnioSede = ({cantidad,cantidadSede,anioT}) => {

  //console.log(anio)  
  
  
  
  //console.warn(cantidad.catidad,cantidadSede) 
  return (
    <div>
     <h2>Ingresantes Anio: {anioT}</h2>
     <br/>
     <h4>Numero de Ingresantes: {cantidad.canti}</h4>

     <br/>
     <table className='table '>
      <thead>
        <tr>
          <th>Sede</th>
          
          
          <th>Cantidad</th>
          
        </tr>
      </thead>



      <tbody>
      {cantidadSede.length>0? cantidadSede.map((ele, index)=>
      <tr key={index}>
        <td>{ele.sede}</td>
        <td>{ele.canti}</td>
        
        
      </tr>
      ):null}
      </tbody>
      </table> 
    </div>
  )
}

export default IngresantesAnioSede