import Skill from "./skill";
interface Props {
    setMostrar: (mostrar:boolean) => void
}

const Curriculum = ({setMostrar}:Props) => {

    const cerrarModal = () => {
        setMostrar(false)
    }

    return ( 
        <div className="cv">

            {/* Cerrar modal */}
            <button className='cerrarModal' onClick={cerrarModal}></button>

            <div>
                <div className="descripcion">
                    <p>Como un apasionado y comprometido programador frontend con amplia experiencia en desarrollo web, me apasiona abordar desafíos profesionales y resolver incógnitas con el objetivo de superarme en cada paso. Mi trayectoria incluye colaboraciones con diversas agencias, lo que me ha brindado una perspectiva única para entender las necesidades de una amplia gama de clientes y abordar proyectos de manera práctica y efectiva. Mi enfoque se centra en el aprendizaje constante y la mejora continua, manteniendo siempre la vista en la evolución del campo.</p>

                    <p><strong>Nombre:</strong> Arturo Hernandez Corona</p>
                    <p><strong>Edad:</strong> 33 años</p>
                    <p><strong>Nacionalidad:</strong> Mexicano</p>
                    <p><strong>Teléfono:</strong> 55-82-28-30-53</p>
                    <p><strong>email:</strong> arturo.hdzc.ico@gmail.com</p>
                </div>

                <a download href={require('../assets/CV_Arturo_HC.pdf')} className="btn">Descargar CV</a>

                <h3 className="regular">Educación</h3>

                <ul className="list">
                    <li>
                        <strong>Ingeniería en Computación</strong>
                        <p>Universidad Autónoma del Estado de México / 2011 - 2017</p>
                    </li>
                </ul>

                <h3 className="regular">Experiencia laboral</h3>

                <ul className="list">
                    <li>
                        <strong>Ecdisis Estudio</strong>
                        <p>Desarrollador web / 2016 - 2018</p>
                    </li>
                    <li>
                        <strong>Goblin Creative</strong>
                        <p>Desarrollador web / 2019 - 2021</p>
                    </li>
                    <li>
                        <strong>Yaydoo</strong>
                        <p>Desarrollador web - Frontend / Actualmente</p>
                    </li>
                    <li>
                        <strong>Freelancer</strong>
                        <p>Actualmente</p>
                    </li>
                </ul>

            </div>
            <div>

                <h3 className="regular">Lenguajes</h3>

                <ul className="list lenguajes">
                    <li>
                        <strong>Inglés</strong>
                        <p>B2 / Conversacional</p>
                    </li>
                    <li>
                        <strong>Italiano</strong>
                        <p>A1 / Comprensión</p>
                    </li>
                </ul>

                <h3 className="regular">Certificaciones</h3>

                <ul className="list">
                    <li>
                        <strong>Desarrollo de aplicaciones moviles</strong>
                        <p>Google activate / 2022</p>
                    </li>
                    <li>
                        <strong>Diseño de experiencias de usuario (UX)</strong>
                        <a href="https://coursera.org/share/fbcfde01d8fe4d78157faf3185b1ba96">
                        <p>Inroads México / 2023</p>
                        </a>
                    </li>
                    <li>
                        <strong>React Native, aplicaciones para Android e iOS</strong>
                        <a href="https://www.udemy.com/certificate/UC-b08bacc2-95cc-4982-a855-50aed5c3a03a/">
                        <p>Udemy / 2023</p>
                        </a>
                    </li>
                    <li>
                        <strong>React Native: Aplicaciones nativas para IOS y Android</strong>
                        <a href="https://www.udemy.com/certificate/UC-c448cb83-8e8f-4043-85e6-1e5d039d3b4d/">
                        <p>Udemy / 2023</p>
                        </a>
                    </li>
                </ul>

                <h3 className="regular">My Skills</h3>
                <Skill/>
            </div>

        </div>
     );
}
 
export default Curriculum;