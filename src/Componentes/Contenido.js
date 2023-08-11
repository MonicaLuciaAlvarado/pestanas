import React from 'react';
const Contenido =(props) =>{
    var sacar = props.celda.split(' ');
    var num = parseInt(sacar[1]);
    return(
        <p>{props.desc[num-1]}</p>
    )
}
export default Contenido