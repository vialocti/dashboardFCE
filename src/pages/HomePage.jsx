import React,{useState,useEffect} from 'react'
import { usePageInicial } from '../hooks/usepageInicial'

const HomePage = () => {

  const [inscriptos, setInscriptos]=useState({})
  const [aluactivos, setAluactivos]=useState({})
  const [egresados, setEgresados]=useState({})

  const {loading, error, cantidadSedeEgr, cantidadInsc, cantidadAlu} = usePageInicial(2023)

  useEffect(() => {

    const setearValores=()=>{
     
      setEgresados ({
       mza:0,
       sr:0,
       ga:0,
       es:0
      })
 
      setInscriptos ({
       mza:0,
       sr:0,
       ga:0,
       es:0
      })
 
      setAluactivos({
       mza:0,
       sr:0,
       ga:0,
       es:0
      })
 
      if(cantidadSedeEgr){
       setEgresados({
         mza:cantidadSedeEgr[0]?cantidadSedeEgr[0].count:'0',
         sr:cantidadSedeEgr[1]?cantidadSedeEgr[1].count:'0',
         ga:cantidadSedeEgr[2]?cantidadSedeEgr[2].count:'0',
         es:cantidadSedeEgr[3]?cantidadSedeEgr[3].count:'0'
      
        })
      }
 
      if(cantidadAlu){
        setAluactivos({
          mza:cantidadAlu[0]?cantidadAlu[0].count:'0',
          sr:cantidadAlu[1]?cantidadAlu[1].count:'0',
          ga:cantidadAlu[2]?cantidadAlu[2].count:'0',
          es:cantidadAlu[3]?cantidadAlu[3].count:'0'
       
         })
       }

       if(cantidadInsc){
        setInscriptos({
          mza:cantidadInsc[0]?cantidadInsc[0].count:'0',
          sr:cantidadInsc[1]?cantidadInsc[1].count:'0',
          ga:cantidadInsc[2]?cantidadInsc[2].count:'0',
          es:cantidadInsc[3]?cantidadInsc[3].count:'0'
       
         })
       }
    } 
  
  
    setearValores()
  }, [cantidadAlu,cantidadInsc,cantidadSedeEgr])
   

  if(loading) return <p>Cargando datos .....</p>
  if(error) return <p>Error de Carga</p>


   console.log(cantidadInsc,cantidadSedeEgr,cantidadAlu)
    
  
   return (
    <div className='container mt-4'>
     <br/>
      <div className="row">
        <div className="col-12 col-md-4">
            <h4>Alumnos Activos Sede</h4>
           <table className="table table-dark">
              <thead className="thead">
              <tr>
                <th>Mendoza</th>
                <th>San Rafael</th>
                <th>Gral.Alvear</th>
                <th>Sede Este</th>
                </tr>
              </thead>
              <tbody className='tbody'>
                <tr>
                  <td>{aluactivos.mza}</td>
                  <td>{aluactivos.sr}</td>
                  <td>{aluactivos.ga}</td>
                  <td>{aluactivos.es}</td>
                </tr>
              </tbody>




           </table>

        </div>

        <div className="col-12 col-md-4">
            <h4>Egresados Año Academico Sede</h4>
            <table className="table table-dark">
              <thead className="thead">
              <tr>
                <th>Mendoza</th>
                <th>San Rafael</th>
                <th>Gral.Alvear</th>
                <th>Sede Este</th>
                </tr>
              </thead>
              <tbody className='tbody'>
                <tr>
                <td>{egresados.mza}</td>
                  <td>{egresados.sr}</td>
                  <td>{egresados.ga}</td>
                  <td>{egresados.es}</td>
                </tr>
              </tbody>


           </table>
        </div>

        <div className="col-12 col-md-4">
        <h4>Inscriptos ingreso 2024</h4>
        <table className="table table-dark">
              <thead className="thead">
              <tr>
                <th>Mendoza</th>
                <th>San Rafael</th>
                <th>Gral.Alvear</th>
                <th>Sede Este</th>
                </tr>
              </thead>
              <tbody className='tbody'>
                <tr>
                <td>{inscriptos.mza}</td>
                  <td>{inscriptos.sr}</td>
                  <td>{inscriptos.ga}</td>
                  <td>{inscriptos.es}</td>
                </tr>
              </tbody>




           </table>
        </div>
      </div>
      <br/>
      <div className="row">
          <div className="col-12 col-md-4">
          <h4>Docentes de Planta Sede</h4>
          <table className="table table-dark">
              <thead className="thead">
              <tr>
                <th>Mendoza</th>
                <th>San Rafael</th>
                <th>Gral.Alvear</th>
                <th>Sede Este</th>
                </tr>
              </thead>
              <tbody className='tbody'>
                <tr>
                  <td>273</td>
                  <td>56</td>
                  <td>10</td>
                  <td>28</td>
                </tr>
              </tbody>


           </table>
          
          </div>

          <div className="col-12 col-md-4">
          <h4>Personal No Docente Sede</h4>
          
          <table className="table table-dark">
              <thead className="thead">
              <tr>
                <th>Mendoza</th>
                <th>San Rafael</th>
                <th>Gral.Alvear</th>
                <th>Sede Este</th>
                </tr>
              </thead>
              <tbody className='tbody'>
                <tr>
                <td>85</td>
                  <td>12</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
              </tbody>


           </table>
          
          </div>

          <div className="col-12 col-md-4">
            
          </div>
      </div>
    </div>
  )
}

export default HomePage