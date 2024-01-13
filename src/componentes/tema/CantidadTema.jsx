function CantidadTema({ cantidad, final }){
    return(
        /* 
        {con las llaves se estable el props dentro del componentes}
        */
        <h1>
            Tengo en el curso {cantidad} la cantidad de alumnos {final}
        </h1>
    );
}

export {
    CantidadTema,
}