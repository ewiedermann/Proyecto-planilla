import "../../css/AlumnoBuscar.css";

function AlumnoBuscar() {
  return (
    <input
      placeholder="Cortar cebolla"
      className="AlumnoBuscar"
      onChange={(event) => {
        console.log("Escribiste en el AlumnoBuscar");
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
      }}
    />
  );
}

export { AlumnoBuscar };
