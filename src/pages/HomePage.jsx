import React,{useState,useEffect} from 'react'
import { usePageInicial } from '../hooks/usepageInicial'

const HomePage = () => {

  const [inscriptos, setInscriptos]=useState({})
  const [aluactivos, setAluactivos]=useState({})
  const [egresados, setEgresados]=useState({})
  const [cursadas,setCursadas] = useState({}) 
  const [anioI, setAnioI]=useState('0')
  const anio=new Date().getFullYear()

  const {loading, error, cantidadSedeEgr, cantidadInsc, cantidadAlu, cantidadComiAnio} = usePageInicial(anio)


  const buscarCount =(arrayEgre,sede)=>{
    let seleccion = arrayEgre.find(ele =>ele.sede===sede)
    if(seleccion){
    return(seleccion.count)
    }else{return 0}
  }

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

      setCursadas({
        mza:0,
        sr:0,
        ga:0,
        es:0
       })
 
      if(cantidadSedeEgr){
       setEgresados({
        
        mza:buscarCount(cantidadSedeEgr,'MZA'),
        sr:buscarCount(cantidadSedeEgr,'SRF'),
        ga:buscarCount(cantidadSedeEgr,'GALV'),
        es:buscarCount(cantidadSedeEgr,'ESTE'),
        /*
         mza:cantidadSedeEgr[0]?cantidadSedeEgr[0].count:'0',
         sr:cantidadSedeEgr[1]?cantidadSedeEgr[1].count:'0',
         ga:cantidadSedeEgr[2]?cantidadSedeEgr[2].count:'0',
         es:cantidadSedeEgr[3]?cantidadSedeEgr[3].count:'0'
      */
        })
      }
 
      if(cantidadAlu){
        setAluactivos({
          mza:buscarCount(cantidadAlu,'MZA'),
          sr:buscarCount(cantidadAlu,'SRF'),
          ga:buscarCount(cantidadAlu,'GALV'),
          es:buscarCount(cantidadAlu,'ESTE'),
          /*
          mza:cantidadAlu[0]?cantidadAlu[0].count:'0',
          sr:cantidadAlu[1]?cantidadAlu[1].count:'0',
          ga:cantidadAlu[2]?cantidadAlu[2].count:'0',
          es:cantidadAlu[3]?cantidadAlu[3].count:'0'
         */
         })
       }

       if(cantidadComiAnio){
        setCursadas({
          mza:buscarCount(cantidadComiAnio,'MZA'),
          sr:buscarCount(cantidadComiAnio,'SRF'),
          ga:buscarCount(cantidadComiAnio,'GALV'),
          es:buscarCount(cantidadComiAnio,'ESTE'),
          
         })
       }

       if(cantidadInsc){
        setInscriptos({
          mza:buscarCount(cantidadInsc,'MZA'),
          sr:buscarCount(cantidadInsc,'SRF'),
          ga:buscarCount(cantidadInsc,'GALV'),
          es:buscarCount(cantidadInsc,'ESTE'),
         
          /*
          mza:cantidadInsc[0]?cantidadInsc[0].count:'0',
          sr:cantidadInsc[1]?cantidadInsc[1].count:'0',
          ga:cantidadInsc[2]?cantidadInsc[2].count:'0',
          es:cantidadInsc[3]?cantidadInsc[3].count:'0'
       */
         })
       }
    } 

    const setAnioIngreso =()=>{
      setAnioI(anio+1)
    }
  
  
    setearValores()
    setAnioIngreso()
  }, [cantidadAlu,cantidadInsc,cantidadSedeEgr,cantidadComiAnio])
   

  if(loading) return <p>Cargando datos .....</p>
  if(error) return <p>Error de Carga</p>


   //console.log(cantidadComiPerLect)
    
  
   return (
    <div className='container mt-4'>
     <br/>
      <div className="row">
          <div className="col-12 col-md-6">
            <div className="card">
                <div className="card-header">
                  <div className='card-title'><strong>Alumnos Activos Sede</strong></div>
                </div>
                <div className="card-body">
                    <table className="table table-primary">
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
                  <div className="card-footer">
                    Cantidad de Alumnos Calidad 'A' Activos  
                </div>   
            </div>
            
          </div>

          <div className="col-12 col-md-6">
            <div className="card">
                <div className="card-header">
                  <div className='card-title'><strong>Egresados Año Academico Sede</strong></div>
                </div>
                <div className="card-body">
                  <table className="table table-primary">
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
              
            </div>     
            <div className="card-footer">
                Cantidad de Egresados en Ciclo Lectivo desde 01/04/{anio}  
            </div>       
          </div>
      </div>
        
      <br/>
  
      <div className="row">
        
            <div className="col-12 col-md-6">
                <div className="card">
                    <div className="card-header">
                        <div className="card-title"><strong>Inscriptos Ingreso {anioI}</strong></div>
                    </div>
                    <div className="card-body">
                        <table className="table table-primary">
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
                    <div className="card-footer">
                       Cantidad de Inscriptos hasta la fecha  
                    </div>  
                   </div>
                </div>
        
          <div className="col-12 col-md-6">
            <div className="card">
                <div className="card-header">
                    <div className="card-title">
                    <strong>Número de Comisiones</strong>
                    </div>
                </div>
                <div className="card-body">
                <table className="table table-primary">
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
                                  <td>{cursadas.mza}</td>
                                  <td>{cursadas.sr}</td>
                                  <td>{cursadas.ga}</td>
                                  <td>{cursadas.es}</td>
                              </tr>
                            </tbody>

                        </table>
                
            </div>
            <div className="card-footer">
                Comisiones Ciclo Lectivo:{anio}, hasta la fecha  
            </div>   
          </div>
          
          </div>

          
          
        </div>
    </div>
  )
}

export default HomePage