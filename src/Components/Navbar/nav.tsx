import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from './logo2.svg';


interface navProps {}

const nav:React.FC<navProps> = () => {
  return (
    <header className="header">
      <div className='header_footer_inner'>
        <Link to='/'>
          <img className='logo' src={logo2} alt='logo'/>
        </Link>
        <nav className='nav_container'>
          <Link to=''>Home</Link>
          <Link to="/contact-us">Contact</Link>
          <Link to=''>About</Link>
          <Link to=''>Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default nav

