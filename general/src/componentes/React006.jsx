// Componente Pai
import React from "react";

export default props =>
<div>
    <h1>{ props.nome } { props.sobrenome }</h1>
    <h2>Filhos</h2>
    <ul>
        {React.cloneElement(props.children, {...props, ...props.children.props})}
    </ul>
</div>
