import "../../css/AlumnoItem.css";

function AlumnoItem(props) {
  return (
    <li className="AlumnoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        V
      </span>
      <p
        className={`AlumnoItem-p ${
          props.completed && "AlumnoItem-p--complete"
        }`}
      >
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        X
      </span>
    </li>
  );
}

export { AlumnoItem };
