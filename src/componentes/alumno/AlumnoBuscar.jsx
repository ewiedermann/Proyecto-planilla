import React from "react";
import "../../css/AlumnoBuscar.css";

function AlumnoBuscar() {
  //No solo se consume, sino que se actualiza
  //Se necesita una función actualizadora, para que sea inmutable. Donde se llama setState
  //state, setState
  //String vacio, es porque esperamos lo que ingrese el usuario
  const [buscarAlumno, setBuscarAlumno] = React.useState("");

  //Para mostrar como trabajan
  //console.log("Los usuarios buscar los alumnos de " + buscarAlumno);

  return (
    <input
      placeholder="Cortar cebolla"
      className="AlumnoBuscar"
      value={buscarAlumno}
      onChange={(event) => {
        setBuscarAlumno(event.target.value);
      }}
    />
  );
}

export { AlumnoBuscar };
