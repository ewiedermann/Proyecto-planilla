import React from "react";
import { AlumnoIcono } from "./alumnoIcono";

function CompleteIcon({ completed, onComplete }) {
  return (
    <AlumnoIcono
      type="check"
      color={completed ? "green" : "gray"}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };
