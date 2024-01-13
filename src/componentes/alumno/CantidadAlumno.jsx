//En las funciones se pueden tomar props, 
//Si quiero recibir más de una props se hace así ({ props1, props2 })
//Otra forma dentro de la función así props.total, props.cantidad
function CantidadAlumno({ curso, cantidad }){
    return(
        /* 
        {con las llaves se estable el props dentro del componentes}
        */
        <h1>
            Tengo en el curso {curso} la cantidad de alumnos {cantidad}
        </h1>
    );
}

export {
    CantidadAlumno,
}