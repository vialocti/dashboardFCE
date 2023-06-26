import React, { useEffect, useState } from 'react'
//import {useInscripcionesAnio} from '../../hooks/useInscripcionesAnio'

const IngresantesAnioSede = ({cantidad,cantidadSede,anioT}) => {

  //console.log(cantidad) 
  

  const [total, setTotal] = useState(0)

  useEffect(() => {
    const sumall = cantidad.map(item => item.canti).reduce((prev, curr) => prev + Number(curr), 0);
    setTotal(sumall)
  }, [cantidad])
  
  
  
  
  //console.warn(cantidad.catidad,cantidadSede) 
  return (
    <div className='container'>
     <h4>Ingresantes Anio: {anioT}, Cantidad:{total}</h4>
     <br/>
    <div className="row">
    <div className='col-md-4 col-xs-12'>
     <table className='table table-bordered table-striped'>
      <thead>
        <tr>
          <th>Sede</th>
          <th>Tipo Ingreso</th>
          <th>Cantidad</th>
          
        </tr>
      </thead>

      <tbody>
      {cantidadSede.length>0? cantidadSede.map((ele, index)=>
      <tr key={index}>
        <td>{ele.sede}</td>
        <td>{ele.tipo_ingreso}</td>
        <td>{ele.canti}</td>
        
        
      </tr>
      ):null}
      </tbody>
      </table> 
      </div>
      <div className="col-md-1 col-xs-12"></div>
      <div className="col-md-6 col-xs-12">
        <table className='table table-light table-bordered'>
          <thead>
            <tr>
              <td>Tipo Ingreso</td>
              <td>Descripcion</td>
            </tr>
          </thead>
             <tr>
              <td>1</td>
              <td>Con título secundario</td>
             </tr>

             <tr>
              <td>3</td>
              <td>Mayor de 25 años</td>
             </tr>
             
             <tr>
              <td>4</td>
              <td>Proveniente de Otra Universidad</td>
             </tr>

             <tr>
              <td>5</td>
              <td>Proveniente de Otra Facultad de la UNCU </td>
             </tr>

             <tr>
              <td>6</td>
              <td>Proveniente de Otra Carrera de la FCE</td>
             </tr>
          <tbody>

          </tbody>
        </table>
      </div>
    </div>
    </div>

  )
}

export default IngresantesAnioSede