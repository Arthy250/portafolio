import { useState, useEffect } from 'react';
import { ProyectosDB } from "../db/proyectosDB";
import Proyecto from "./proyecto";
import { ProyectoDetalles } from '../types/types';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const Portafolio = () => {

    const [proyectos, setProyectos] = useState<ProyectoDetalles[]>([]);
    const [parent] = useAutoAnimate();

    const filtrarProyectos = (tipoProyecto?:string) =>{

        if(tipoProyecto === ''){
            setProyectos(ProyectosDB);
        }
        
        if(tipoProyecto !== ''){
            const proyectosFiltrados = ProyectosDB.filter(proyecto => proyecto.tipo === tipoProyecto);
            setProyectos(proyectosFiltrados);
        }
        
    }

    useEffect(() => {
      setProyectos(ProyectosDB);
    }, [])

    return ( 
        <div className="portafolio" id='portafolio'>
            <div className="textCenter">
                <div className="encabezado">
                    <h2 className="enfasis">Portafolio</h2>
                    <h4>Dedicación, compromiso e innovación.</h4>
                    <p className="light">Cada proyecto es una oportunidad para aprender, crecer y superar expectativas.</p>
                </div>

                <nav className="navegacionPortafolio">
                    <button className='link regular activo' onClick={() => filtrarProyectos('')}>Todo</button>
                    <button className='link regular' onClick={() => filtrarProyectos('movileApp')}>Movile App</button>
                    <button className='link regular' onClick={() => filtrarProyectos('webApp')}>Web App</button>
                    <button className='link regular' onClick={() => filtrarProyectos('webSite')}>Website</button>
                </nav>

                
            </div>

            <div className="proyectos" ref={parent} >
                {proyectos.map( (proyecto:ProyectoDetalles) => 
                    (
                    <Proyecto
                        nombre = {proyecto.nombre}
                        img = {proyecto.imgUrl}
                        key = {proyecto.id}
                        descripcion =  {proyecto.descripcion}
                        tipo = {proyecto.tipo}
                        url = {proyecto.url}
                        githubUrl  = {proyecto.githubUrl}
                        googlePlayURL = {proyecto.googlePlayURL}
                    />
                    )
                )}
            </div>
            
        </div>
     );
}
 
export default Portafolio;