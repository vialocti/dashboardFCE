import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBarComponent from '../components/NavBarComponent'
//import { EstudiantesFinCarrera, HomePage, IngresantesPage, NotFoundPage } from '../pages/'

import InscriptosPage from '../pages/inscriptos/InscriptosPage'
import IngresantesPage from '../pages/ingresantes/IngresantesPage'
import NotFoundPage from '../pages/NotFoundPage'
import HomePage from '../pages/HomePage'
import IngresantesPageEntreAnios from '../pages/ingresantes/IngresantesPageEntreAnios'
import InscriptosPageEntreAnios from '../pages/inscriptos/InscriptosPageEntreAnios'
import AlumnosPage from '../pages/alumnos/AlumnosPage'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        
        <NavBarComponent />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route exact path='/inscriptosanios' element={<InscriptosPageEntreAnios/>} />
            <Route exact path='/inscriptos' element={<InscriptosPage/>} />
            <Route exact path='/ingresantesanios' element={<IngresantesPageEntreAnios/>} />
            <Route exact path='/ingresantes' element={<IngresantesPage/>} />
            <Route exact path='/alumnos' element={<AlumnosPage/>} />

            <Route path='*' element={<NotFoundPage />} />
        </Routes>
        
    </BrowserRouter>
  )
}

export default AppRoutes