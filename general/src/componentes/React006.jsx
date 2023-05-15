// Componente Pai
import React from "react";

import { childrenWithProps } from "../utilidades/funcoes";

export default props =>
<div>
    <h1>{ props.nome } { props.sobrenome }</h1>
    <h2>Filhos</h2>
    <ul>
        {childrenWithProps(props)}
    </ul>
</div>
