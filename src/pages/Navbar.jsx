import React, {useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './navbar.scss';
import { FcIdea } from 'react-icons/fc';
// import { GiCompass } from 'react-icons/gi';
import { AiOutlineMenu } from 'react-icons/ai';



const Navbar = () => {

    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return (
        <>
        <div className='navbar'>
            <div className='nav-container'>
                
                <Link smooth to='#intro' className='nav-logo' onClick={closeMobileMenu}>
                     i  know. 
                </Link>
                
                <Link smooth to='#intro' className='bulb' onClick={closeMobileMenu}>
                    <FcIdea />
                </Link>
                    
                <i >  </i>                    
                
                <ul className={click ? 'nav-menu active' : 'nav-menu'} >

                    <li className='nav-item' >
                         <Link smooth to='#lekcje' onClick={closeMobileMenu} className='nav-links'  >
                             NAUKA
                         </Link> 
                    </li>

                    <li className='nav-item' >
                         <Link smooth to='#aplikacja' onClick={closeMobileMenu} className='nav-links'  >
                             APLIKACJA
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
                        {/*<Hamburger toggled={isOpen} toggle={setOpen} className='menu-icon' /> */}
                        {/* <i className={click ? 'fas fa-compass': 'far fa-compass' } />  */}
                        {/* <GiCompass/> */}
                        <AiOutlineMenu/>
                        
                    </div>

                </div>
            </div>
         </>
    )
}

export default Navbar
