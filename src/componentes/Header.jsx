import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Seguimiento de alumnos EPET N° 20</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Lista Alumnos
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Añade Alumnos
        </NavLink>
      </div>
    </header>
  );
};

export {
    Header,
};