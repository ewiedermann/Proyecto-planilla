import React from 'react';
import './App.css';
import { AgregarMateria } from './componentes/materia/AgregarMateria'
import { CantidadAlumno } from './componentes/alumno/CantidadAlumno';
import { ListarMateria } from './componentes/materia/ListarMateria';
import { AlumnoItem } from './componentes/alumno/AlumnoItem';

const defaultAlumno = [
    { text: 'Alumno no completo', completado: false },
    { text: 'Alumno completo', completado: false },
    { text: 'Alumno Falto', completado: true },
    { text: 'Alumno Presente', completado: true },
];

function App() {
    return ( 
        <React.Fragment>
            <AgregarMateria/>
            {/* Para enviar los props al componente se hacen así */}
            <CantidadAlumno curso={"6° 2°"} cantidad={35}/>

            <ListarMateria>
                {/* Genera array desde otro 
                Se puede hacer de esta forma

                {defaultAlumno.map(
                    return(
                        <AlumnoItem/>
                ))}
                */}
                {defaultAlumno.map(
                    alumno =>(
                        <AlumnoItem 
                        
                        key={ alumno.text } 
                        text={ alumno.text }
                        completado={ alumno.completado }
                    />
                ))} 
            </ListarMateria>
        </React.Fragment>

    );
}

export default App;