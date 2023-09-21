import Disenio from '../assets/ui:ux.svg';
import webDesign from '../assets/responsive.svg';
import API from '../assets/api.svg';
import Mobile from '../assets/mobile-dev.svg';
import Github from '../assets/github.svg';
import Contacto from '../assets/contacto.svg';

const Servicios = () => {
    return ( 
        <div id='servicios'>
            <div className="textCenter">
                <div className="encabezado">
                    <h2 className="enfasis">Servicios</h2>
                </div>
            </div>

            <div className="servicios">

                <div className="servicio">
                    <div className="iconoservicio">
                        <img src={Disenio} alt="UI/UX" />
                    </div>
                    <p>UI/UX Design</p>
                </div>

                <div className="servicio">
                    <div className="iconoservicio">
                        <img src={webDesign} alt="UI/UX" />
                    </div>
                    <p>Responsive web design</p>
                </div>
                
                <div className="servicio">
                    <div className="iconoservicio">
                        <img src={API} alt="UI/UX" />
                    </div>
                    <p>Consumo de API's</p>
                </div>
                
                <div className="servicio">
                    <div className="iconoservicio">
                        <img src={Mobile} alt="UI/UX" />
                    </div>
                    <p>Desarrollo de aplicaciones moviles</p>
                </div>

                <div className="servicio">
                    <div className="iconoservicio">
                        <img src={Github} alt="UI/UX" />
                    </div>
                    <p>Control de versiones</p>
                </div>

                <div className="servicio">
                    <div className="iconoservicio">
                        <img src={Contacto} alt="UI/UX" />
                    </div>
                    <a href='#contacto' className='btn'>Contacto</a>
                </div>

            </div>
            
        </div>
     );
}
 
export default Servicios;