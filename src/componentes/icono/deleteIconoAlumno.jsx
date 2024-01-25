import React from "react";
import { AlumnoIcono } from "./alumnoIcono";

function DeleteIcon({ onDelete }) {
  return <AlumnoIcono type="delete" color="gray" onClick={onDelete} />;
}

export { DeleteIcon };
