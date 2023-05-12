// Bom dia, usuário!
import React from "react";

const bomDia = (props) => {
    return <React.Fragment>
                <h1>Bom dia, {props.nome}!</h1>
                <h2>Seja bem-vinde!</h2>
            </React.Fragment>
}

export default bomDia;