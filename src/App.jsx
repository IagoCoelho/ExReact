import React from "react";
import {BrowserRouter, Routes, Route} from 'react-dom'

import Semaforo from "./Components/Semaforo/Semaforo";
import Pare from "./Components/Pare/Pare";
import Atencao from "./Components/Atencao/Atencao";
import Siga from "./Components/Siga/Siga";

export default function App(){
    
    return(
        <BrowserRouter>
            <Semaforo/>
            <Routes>
                < Route path="/" element={<Pare/>}/>
                < Route path="/atencao" element={<Atencao/>}/>
                < Route path="/siga" element={<Siga/>}/>
            </Routes>
        </BrowserRouter>
    )
}