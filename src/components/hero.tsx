import { useState } from 'react';
import Profile from '../assets/profile.jpeg'
import Curriculum from './curriculum';
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Hero = () => {

    const [mostrar, setMostrar] = useState(false)
    const [parent] = useAutoAnimate()
    

    const mostrarCV = () => {
        setMostrar(!mostrar)
    }

    return ( 
        <div className='hero' ref={parent}>
            {mostrar && <Curriculum setMostrar={setMostrar}/>}
            <div className='info'>
                <p className='acerca'>Un poco acerca de</p>
                <div className="imgMobile">
                    <img src={Profile} alt='Profile'/>
                </div>
                <h1 className='upercase'>Arturo<br></br><span className="enfasis">Hernandez</span></h1>
                <p>Programador comprometido, apasionado y muy curioso. Con amplia experiencia en desarrollo web. Los retos profesionales y las incógnitas son algo que disfruto resolver con la idea de hacerlo mejor cada vez y aprender en cada paso. He trabajado para diferentes agencias, entendiendo las necesidades de clientes diversos y enfoques prácticos, sin perder de vista el aprendizaje y la mejora continua.</p>
                <div className='buttons'>
                    <a href='#contacto' className='btn outline'>Contacto</a>
                    <button onClick={mostrarCV} className='btn'>Curriculum</button>
                </div>
            </div>
            <div className="img">
                <img src={Profile} alt='Profile'/>
            </div>
        </div>
     );
}
 
export default Hero;