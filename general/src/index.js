import React from "react";
import ReactDOM from "react-dom";

import Saudacao from "./componentes/React004";

ReactDOM.render(
    <div>
        <Saudacao tipo="Bom dia" nome="Márcio" />
    </div>
    , document.querySelector('#root'));