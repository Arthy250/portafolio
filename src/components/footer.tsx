import Email from '../assets/email-footer.svg'
import Phone from '../assets/phone-footer.svg'
import LinkedIn from '../assets/linkedin-footer.svg'

const Footer = () => {
    return ( 
        <footer id='contacto'>
            <div className="textCenter">
                <div className="encabezado">
                    <h2 className="enfasis">Contacto</h2>
                    <p>– Thanks for visiting! –</p>
                    <div className='buttons'>
                        <a className='btn' href="mailto:arturo.hdzc.ico@gmail.com">
                            <img src={Email} alt='Email'/>
                        </a>
                        <a className='btn' href="tel:+525582283053">
                            <img src={Phone} alt='Phone'/>
                        </a>
                        <a className='btn' href="https://www.linkedin.com/in/arturo-hernandez-dev/">
                            <img src={LinkedIn} alt='LinkedIn'/>
                        </a>
                    </div>
                    <p>Copyright © 2023 - Arturo Hernandez</p>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;