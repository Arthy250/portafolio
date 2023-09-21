import { useState } from 'react';
import Close from '../assets/close.svg'
import Logo from  '../assets/logo.svg'
import Contacto from '../assets/contacto.svg'
import RSS from './rss';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const Header = () => {

    const [menuVisible, setMenuVisible] = useState(false);
    const [rssFloat, setRssFloat] = useState(false)
    const [parent] = useAutoAnimate(/* optional config */)

    const openMenu = () => {
        setMenuVisible(true);
    }
    const closeMenu = () => {
        setMenuVisible(false);
    }

    const mostrarRSS = () => {
        setRssFloat(!rssFloat)
    }

    const backToTop = () => {
        window.scrollTo({top: 0});
    }

    return ( 
        <header>
            <div className="contenedor">
                <div ref={parent}>
                    {rssFloat && <RSS/>}
                </div>
                <div className="navegacionContendor">
                    <div className="navegacion">
                        <div className="logo">
                            <img onClick={backToTop} className='logo' src={Logo} />
                        </div>
                        <nav>
                            <a className='light' href="#servicios">Servicios</a>
                            <a className='light' href="#skills">Experiencia</a>
                            <a className='light' href="#portafolio">Portafolio</a>
                            <a className='light' href="#contacto">Contacto</a>
                        </nav>
                        <div className="contacto">
                            <img onClick={mostrarRSS} src={Contacto} alt="contacto"/>
                        </div>

                        {/* abrir menu mobile */}

                        <div className={`${menuVisible ? 'ocultar' : 'mostrar'} openMenu`} >

                        <ul onClick={ openMenu }>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>

                        <a onClick={closeMenu} className='light cerrarMenu'>
                            <img  src={Close} alt='close'/>
                        </a>

                        </div>
                    </div>


                </div>
            </div>

            <div className={`${menuVisible ? 'activo' : 'inactivo'} navegacionMobile`}>
                <nav>
                    <a className='light' href="#servicios">Servicios</a>
                    <a className='light' href="#experiencia">Experiencia</a>
                    <a className='light' href="#portafolio">Portafolio</a>
                    <a className='light' href="#contacto">Contacto</a>
                </nav>
            </div>
        </header>
     );
}

export default Header;