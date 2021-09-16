import React, {useState} from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import './navbar.scss';
import { FcIdea } from 'react-icons/fc';
// import { GiCompass } from 'react-icons/gi';
import { AiOutlineMenu } from 'react-icons/ai';
// import UseAnimations from "react-useanimations";



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
                                      
                
                <ul className={click ? 'nav-menu active' : 'nav-menu'} >

                    <li className='nav-item'> 
                        <Link smooth to='#omnie' 
                        onClick={closeMobileMenu} 
                        className='nav-links' 
                        activeClassName="selected"
                        activeStyle={{ color: 'red' }}
                        >
                            O MNIE
                        </Link> 
                   </li>

                    <li className='nav-item' >
                         <Link smooth to='#lekcje' 
                            onClick={closeMobileMenu} 
                            className='nav-links' 
                            activeClassName="selected"
                            activeStyle={{ color: 'red' }} 
                            >
                             LEKCJE
                         </Link> 
                    </li>

                    <li className='nav-item' >
                         <Link smooth to='#aplikacja' onClick={closeMobileMenu} className='nav-links' activeClassName="selected"
                         activeStyle={{ color: 'red' }}  
                         >
                             APLIKACJA
                         </Link> 
                    </li>
                    
                    <li className='nav-item' > 
                        <Link smooth to='#cennik' onClick={closeMobileMenu} className='nav-links' activeClassName="selected"
                        activeStyle={{ color: 'red' }} 
                        >
                            CENNIK
                        </Link> 
                    </li>

                    <li className='nav-item'> 
                        <Link smooth to='#kontakt' 
                        onClick={closeMobileMenu} 
                        className='nav-links' 
                        activeClassName="selected"
                        activeStyle={{ color: 'red' }} 
                        >
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
