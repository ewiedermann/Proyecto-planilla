//Alumnos
//Manejo de props
function ListarAlumno(props) {
    return ( 
        <ul>
            {props.children}
        </ul>
    );
}

//Exporto particular
export {
    ListarAlumno,
};