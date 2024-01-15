import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from './logo2.svg';
import NewsLetter  from '../NewsLetter/NewsLetter';

interface footerProps{}
const copyDate: number = new Date().getFullYear();

const Footer:React.FC<footerProps> = () => {
  return (
    <footer>
        <div className='footer_inner'>
            <div className='footer_inner_inner'>
                <NewsLetter />
                <nav className='site_map'>
                    <h1>Site Map</h1>
                    <section className="footer-nav">
                        <div>
                            <h2>Information</h2>
                            <ul>
                                <li><Link to="">Home</Link></li>
                                <li><Link to="/contact-us">About</Link></li>
                                <li><Link to="/contact-us">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2>Services</h2>
                            <ul>
                                <li><Link to="/contact-us">Store</Link></li>
                                <li><Link to="/contact-us">Solar</Link></li>
                                <li><Link to="/contact-us">Green Lawns</Link></li>
                                <li><Link to="/contact-us">Rain Collection</Link></li>
                            </ul>
                        </div>
                    </section>
                </nav>
            </div>
        </div>
        <div className='copy_write'>
                <span>&copy; {copyDate} Green Home Living</span>
            </div>
    </footer>
  )
}

export default Footer