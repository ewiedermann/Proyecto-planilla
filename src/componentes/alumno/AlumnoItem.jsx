function AlumnoItem(props){
    return(
        <li>
            <p>{ props.text }</p>
            <span>{ props.completado }</span>
        </li>
    );
}

export {
    AlumnoItem,
};