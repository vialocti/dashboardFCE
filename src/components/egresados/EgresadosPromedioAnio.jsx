import React from 'react'
//import {useInscripcionesAnio} from '../../hooks/useInscripcionesAnio'

const EgresadosPromedioAnio = ({cantidadEgreProm,anioT}) => {

  //console.log(anio)  
  
  
  
  //console.warn(cantidad.catidad,cantidadSede) 
  return (
    <div>
     <h2>Promedio Egresados Carrera Anio Lectivo: {anioT}</h2>
     <br/>
     <h4>Promedios con y sin Aplazos</h4>

     <br/>
     <table className='table table-primary'>
      <thead>
        <tr>
          <th>Sede</th>
          <th>Carrera</th>
          <th>Cantidad</th>
          <th>Promedio</th>
          <th>promedio S/Aplazos</th>

        </tr>
      </thead>



      <tbody>
      {cantidadEgreProm.length>0? cantidadEgreProm.map((ele, index)=>
      <tr key={index}>
        <td>{ele.sede}</td>
        <td>{ele.carrera}</td>
        <td>{ele.canti}</td>
        <td>{Number(ele.pro).toFixed(2)}</td>
        <td>{Number(ele.prosa).toFixed(2)}</td>
        
        
      </tr>
      ):null}
      </tbody>
      </table> 
    </div>
  )
}

export default EgresadosPromedioAnio