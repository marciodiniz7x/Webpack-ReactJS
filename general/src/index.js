import React from "react";
import ReactDOM from "react-dom";

import Filho from "./componentes/React005";
import Pai from "./componentes/React006";

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro"/>
            <Filho nome="Paulo" sobrenome="Silva"/>
            <Filho nome="Carla" sobrenome="Silva"/>
        </Pai>
    </div>
    , document.querySelector('#root'));