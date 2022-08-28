import React from "react";
import {Link} from 'react-router-dom'

export default function Semaforo(){
    return(
            
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Pare</Link></li>
                    <li><Link to="/atencao">Atenção</Link></li>
                    <li><Link to="/siga">Siga</Link></li>
                </ul>
            </nav>
        </header>
    )
}