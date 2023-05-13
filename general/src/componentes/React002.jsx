// Bom dia, usuário!
import React from "react";

// Elementos agrupados como fragmento react
// const bomDia = (props) => {
//     return <React.Fragment>
//                 <h1>Bom dia, {props.nome}!</h1>
//                 <h2>Seja bem-vinde!</h2>
//            </React.Fragment>
// }

// export default bomDia;

// Elementos agrupados como Array
// const bomDia = (props) => {
//     return [
//             <h1>Bom dia, {props.nome}!</h1>,
//             <h2>Seja bem-vinde!</h2>
//            ]
                    
// }

// export default bomDia;

// Elementos agrupados como div
const bomDia = (props) => {
    
    return <div>
            <h1>Bom dia, {props.nome}!</h1>
            <h2>Seja bem-vinde!</h2>
           </div>                    
            
}

export default bomDia;