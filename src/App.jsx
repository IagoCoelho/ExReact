import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Carteirinhas from './components/carteirinhas/Carteirinha';
import Carros from './components/carros/Carros';
import Semaforo from './Components/semaforo/Semaforo';
import Menu from './components/menu/Menu';

export default function App() {

    const listaDeCarros = ['Carro1','Carro2','Carro3','Carro4','Carro5','Carro6','Carro7','Carro8','Carro9','Carro10']

    return(
        <>

            <h1>Iago Coelho dos Santos - rm95683 -1TDSR</h1>

            <Menu />
            <Routes>

                <Route path='/carros' element={<Carros listaCarrosProps={listaDeCarros} />} />
                <Route path='/semaforo' element={<Semaforo />}/>
                <Route path='/carteirinha' element={<Carteirinhas />} />

            </Routes>

        </>
    );
}