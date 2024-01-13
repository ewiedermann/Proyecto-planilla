import logo from './logo.svg';
import './App.css';
import { AgregarMateria } from './componentes/materia/AgregarMateria'
import { CantidadAlumno } from './componentes/alumno/CantidadAlumno';

function App() {
    return ( 
        <div className = "App" >
            <AgregarMateria/>
            {/* Para enviar los props al componente se hacen así */}
            <CantidadAlumno curso={"6° 2°"} cantidad={35}/>
        </div>
    );
}

export default App;