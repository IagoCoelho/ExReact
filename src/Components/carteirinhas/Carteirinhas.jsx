import React, { useState } from 'react'

import './../../css/carteirinha.css';

import JasonStatham from '../../images/JasonStatham.jpeg'
import BenAffleck from '../../images/BenAffleck.jpeg'
import DwayneJohnson from '../../images/DwayneJohnson.jpeg'

export default function Carteirinha() {

    const[name, setName] = useState('')
    const[rm, setRm] = useState('')
    const[classes, setClasses] = useState('')
    const[career, setCareer] = useState('')

    return(
        <>

            <h1>Carteirinhas</h1>

            <section className='carteira'>

                <img 
                    className='img'
                    src={JasonStatham} 
                    alt="JasonStatham" 
                />

                <div className='divC'>
                    <h2 className='h2'>Nome - JasonStatham</h2>
                    <h2 className='h2'>RM - 1</h2>
                    <h2 className='h2'>Sala - Sala1</h2>
                    <h2 className='h2'>Curso - Curso1</h2>
                </div>

            </section>

            <section className='carteira'>   

                <img 
                    className='img'
                    src={BenAffleck} 
                    alt="BenAffleck" 
                />

                <div className='divC'>
                    <h2 className='h2'>Nome - BenAffleck</h2>
                    <h2 className='h2'>RM - 2</h2>
                    <h2 className='h2'>Sala - Sala2</h2>
                    <h2 className='h2'>Curso - Curso2</h2>
                </div>

            </section>

            <section className='carteira'>

                <img 
                    className='img'
                    src={DwayneJohnson} 
                    alt="DwayneJohnson"
                />

                <div className='divC'>
                    <h2 className='h2'>Nome - DwayneJohnson</h2>
                    <h2 className='h2'>RM - 3</h2>
                    <h2 className='h2'>Sala - Sala3</h2>
                    <h2 className='h2'>Curso - Curso3</h2>
                </div>

            </section>
                
            <section className='carteiraJ'>

                <img 
                    className='img'
                    src={jennifer} 
                    alt="Mulher4" 
                />

                <div className='j'>
                    <input 
                        type="text" 
                        onChange={
                            (e) => setName(e.target.value)
                        } 
                    />
                    <label>Nome</label>
                    <h2 className='h2'>Nome - {name}</h2>

                    <input 
                        type="text" 
                        onChange={
                            (e) => setRm(e.target.value)
                        } 
                    />
                    <label>RM</label>
                    <h2 className='h2'>RM - {rm}</h2>

                    <input 
                        type="text" 
                        onChange={
                            (e) => setClasses(e.target.value)
                        } 
                    />
                    <label>Turma</label>
                    <h2 className='h2'>Sala - {classes}</h2>

                    <input 
                        type="text" 
                        onChange={
                            (e) => setCareer(e.target.value)
                        } 
                    />
                    <label>Curso</label>
                    <h2 className='h2'>Curso - {career}</h2>
                </div>

            </section>
        </>
    )
}