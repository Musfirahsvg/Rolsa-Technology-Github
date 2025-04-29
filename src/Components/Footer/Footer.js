import './Footer.css';
import Image3 from '../../Assets/Image 2.png';

import facebook from '../../Assets/Image f1.png';
import twitter from '../../Assets/Image f2.png';
import twitter1 from '../../Assets/Image f3.png';
import youtube from '../../Assets/Image f4.png'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="large-img">
                <img src={Image3} alt="Beautiful nature scenery" />
            </div>

            <div className='break-line'></div>
            <div className="footer-content">
                <p>Contact us</p>
                <p>Phone: 00046576584</p>
                <p>Email: abc@gmail.com</p>
            </div>

            <div className='h3'><h3>Follow us on Social media</h3>
            <div className="social-icons">
                <a href='/'><img src={facebook} alt='facebook-logo'/>
                <img src={twitter} alt='twitter-logo'/>
                <img src={twitter1} alt='twitter1-logo'/>
                <img src={youtube} alt='youtube-logo'/>
                </a>
            </div>
            </div>
        </footer>
    )
}






