import "../../css/CrearTemaBoton.css";
function CrearTemaBoton() {
  return (
    <button
      className="CrearTemaBoton"
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
export { CrearTemaBoton };
