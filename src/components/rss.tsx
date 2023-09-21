import Phone from '../assets/phone.svg'
import LinkedIn from '../assets/linkedin.svg'
import Github from '../assets/github.svg'


const RSS = () => {
    return ( 
        <div className="rss">
            <ul>
                <li>
                    <a target='_blank' href="tel:+525582283053"><img src={Phone} alt="phone" /></a>
                </li>
                <li>
                    <a target='_blank' href="https://www.linkedin.com/in/arturo-hernandez-dev/"><img src={LinkedIn} alt="linkedin" /></a>
                </li>
                <li>
                    <a target='_blank' href="https://github.com/Arthy250"><img src={Github} alt="github" /></a>
                </li>
            </ul>
        </div>
     );
}
 
export default RSS;