import { useState } from 'react';
import Arrow from '../assets/arrow.svg'
import DetallesProyecto from './detallesProyecto';


interface Props {
    nombre: string,
    img: string
    descripcion: string,
    tipo: string,
    url?: string,
    githubUrl?: string,
    googlePlayURL?: string
}

const Proyecto = ({nombre, img, descripcion, tipo, url, githubUrl, googlePlayURL}: Props) => {

    const [modal, setModal] = useState(false);

    const mostrarDetalles = () => {
        setModal(!modal)
    }

    return ( 
        <>
        <div className="proyecto">
            <div className='info' >
                <h4 className='white regular'>{nombre}</h4>
                <a className='white' onClick={mostrarDetalles}>Ver más <img src={Arrow} alt='arrow'/></a>
            </div>
            <div className='img'>
                <img src={require(`../assets/mockups/${img}`)} alt='captura'/>
            </div>
        </div>
        {modal && ( 
            <DetallesProyecto 
                titulo={nombre}
                img = {img}
                descripcion={descripcion}
                tipo={tipo}
                url={url}
                githubUrl={githubUrl}
                googlePlayURL= {googlePlayURL}
                setModal={setModal}/> 
            )}
        </>
        
     );
}
 
export default Proyecto;