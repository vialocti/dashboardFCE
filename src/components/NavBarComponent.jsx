import React from 'react'
import { Link } from 'react-router-dom'

const NavBarComponent = () => {
  return (
    <div style={{margin:'10px'}}>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link to='/' className="navbar-brand">FCE-DASH</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          
          
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href='.' role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Inscriptos
            </a>
            <ul className="dropdown-menu">
              <li><Link to='inscriptos' className="dropdown-item">Inscriptos Año</Link></li>
              <li><Link to='inscriptosanios' className="dropdown-item">Comparativa Inscriptos Años</Link></li>
              
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="." role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Ingresantes
            </a>
            <ul className="dropdown-menu">
              <li><Link to='/ingresantes' className="dropdown-item">Ingresantes Año</Link></li>
              <li><Link to='/ingresantesanios' className="dropdown-item" >Comparativa Ingresantes Años</Link></li>
              
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="." role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Alumnos
            </a>
            <ul className="dropdown-menu">
              <li><Link to='/alumnos' className="dropdown-item">Alumnos Activos</Link></li>
              <li><Link to='/cohortedesme' className="dropdown-item">Desgranamiento Cohorte</Link></li>
              
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="." role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Egresados
            </a>
            <ul className="dropdown-menu">
              <li><Link to='/egrepromedio' className="dropdown-item">Promedio Egresados Anio</Link></li>
              <li><Link to='/' className="dropdown-item">Listado Egresados</Link></li>
              
            </ul>
          </li>
          
          
        </ul>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default NavBarComponent