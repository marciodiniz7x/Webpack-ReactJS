import React from "react";
import ReactDOM from "react-dom";

import Multi, {BoaNoite} from "./componentes/React003";

ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Ana" />
        <BoaNoite nome="Bia"/>
    </div>
    , document.querySelector('#root'));