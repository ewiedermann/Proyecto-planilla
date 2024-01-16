import "../../css/CrearMateriaBoton.css";
function CrearMateriaBoton() {
  return (
    <button
      className="CrearMateriaBoton"
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
export { CrearMateriaBoton };
