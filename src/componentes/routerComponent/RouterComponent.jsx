import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../Header';
import { AgregarAlumno } from '../alumno/AgregarAlumno';
import { ListarAlumno } from '../alumno/ListarAlumno';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Routes>
            <Route component={ListarAlumno} path="/" exact={true} />
            <Route component={AgregarAlumno} path="/agregar-alumno" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export { 
    AppRouter,
};