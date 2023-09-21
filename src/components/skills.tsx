import CSS from '../assets/skills/css.png';
import HTML from '../assets/skills/html.png';
import JS from '../assets/skills/js.png';
import REACT from '../assets/skills/react.png';
import FIGMA from '../assets/skills/figma.png';
import PS from '../assets/skills/ps.png';
import Check from '../assets/check.svg';
import reactNative from '../assets/skills/react-native.png';

const Skills = () => {
    return ( 
        <div id='skills'>
            <div className="encabezado textCenter">
                <h2 className="enfasis">Skills</h2>
            </div>

            <div className='skillsContenedor'>

                <div className="profesional">
                    <h4 className="white">Profesional</h4>
                    <div className='skills'>
                        <img src={CSS} alt='css' />
                        <img src={HTML} alt='css' />
                        <img src={JS} alt='css' />
                        <img src={REACT} alt='css' />
                        <img src={FIGMA} alt='css' />
                        <img src={PS} alt='css' />
                        <img src={reactNative} alt='css' />
                    </div>
                </div>

                <div className="personal">
                    <h4 className="white">Personal</h4>
                    <p>Aprendizaje constante y la mejora continua, manteniendo siempre la vista en la evolución.</p>
                    <ul>
                        <li><img src={Check} alt='check'/>Entusiasta</li>
                        <li><img src={Check} alt='check'/>Proactivo</li>
                        <li><img src={Check} alt='check'/>Decidido</li>
                        <li><img src={Check} alt='check'/>Creativo</li>
                        <li><img src={Check} alt='check'/>Profesional</li>
                        <li><img src={Check} alt='check'/>Curioso</li>
                    </ul>
                </div>

            </div>
        </div>
     );
}
 
export default Skills;