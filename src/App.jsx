import React from "react";
import { AgregarMateria } from "./componentes/materia/AgregarMateria";
import { CantidadAlumno } from "./componentes/alumno/CantidadAlumno";
import { ListarMateria } from "./componentes/materia/ListarMateria";
import { AlumnoItem } from "./componentes/alumno/AlumnoItem";
import { CrearAlumnoBoton } from "./componentes/botones/CrearAlumnoBoton";
import { AlumnoBuscar } from "./componentes/alumno/AlumnoBuscar";

const defaultAlumno = [
  { text: "Alumno no completo", completado: false },
  { text: "Alumno completo", completado: false },
  { text: "Alumno Falto", completado: true },
  { text: "Alumno Presente", completado: true },
];

function App() {
  return (
    <React.Fragment>
      <AgregarMateria />
      {/* Para enviar los props al componente se hacen así */}
      <CantidadAlumno curso={"6° 2°"} cantidad={35} />
      <AlumnoBuscar />

      <ListarMateria>
        {/* Genera array desde otro 
                Se puede hacer de esta forma

                {defaultAlumno.map(
                    return(
                        <AlumnoItem/>
                ))}
                */}
        {defaultAlumno.map((alumno) => (
          <AlumnoItem
            key={alumno.text}
            text={alumno.text}
            completado={alumno.completado}
          />
        ))}
      </ListarMateria>

      <CrearAlumnoBoton />
    </React.Fragment>
  );
}

export default App;
