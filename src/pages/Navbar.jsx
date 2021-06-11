import React, {useState} from 'react';
// import {Link} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './navbar.scss';

const Navbar = () => {

    // PRZEBUDOWA NA MAKSA

    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return (
        <>
        <div className='navbar'>
            <div className='nav-container'>
                
                <Link smooth to='#intro' className='nav-logo' onClick={closeMobileMenu}>
                     I  know.   <i className='img'/>
                </Link>
                
                <ul className={click ? 'nav-menu active' : 'nav-menu'} >

                    <li className='nav-item' >
                         <Link smooth to='#metoda' onClick={closeMobileMenu} className='nav-links'  >
                             METODA
                         </Link> 
                    </li>

                    <li className='nav-item'> 
                        <Link smooth to='#omnie' onClick={closeMobileMenu} className='nav-links'>
                            O MNIE
                        </Link> 
                    </li>
                    
                    <li className='nav-item' > 
                        <Link smooth to='#cennik' onClick={closeMobileMenu} className='nav-links'>
                            CENNIK
                        </Link> 
                    </li>

                    <li className='nav-item'> 
                        <Link smooth to='#kontakt' onClick={closeMobileMenu} className='nav-links'>
                            KONTAKT
                        </Link> 
                    </li>

                </ul>
                  
                    <div className='menu-icon' onClick={handleClick} >  
                        <i className={click ? 'fas fa-times' : 'fas fa-bars' } />   
                    </div>

                </div>
            </div>
         </>
    )
}

export default Navbar
