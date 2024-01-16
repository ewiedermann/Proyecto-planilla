import "../../css/CrearAlumnoBoton.css";

function CrearAlumnoBoton() {
  return (
    <button
      className="CrearAlumnoBoton"
      onClick={(event) => {
        console.log("le diste click");
        console.log(event);
        console.log(event.target);
      }}
    >
      +
    </button>
  );
}
export { CrearAlumnoBoton };
