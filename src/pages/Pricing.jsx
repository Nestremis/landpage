import React from 'react';
import './pricing.scss';
import {HiCurrencyPound} from 'react-icons/hi';
import {FcOvertime, FcCircuit} from 'react-icons/fc';

const Pricing = () => {
    return (
        <div className='pricing' id='cennik'>
        
        <div className="container">   
            <div className='left'>  
                <h2> LEKCJE </h2>
                <div className="icon">
                    <FcOvertime />            
                </div>

                <ul>
                    <li> 60 min./1x/TYDZIEŃ - <span style={{fontFamily: 'Devonshire', fontSize:'1.2rem'}}> 60 zł </span> </li> <br/>
                    <li> 60 min./2x/TYDZIEŃ -<span style={{fontFamily: 'Devonshire', fontSize:'1.2rem'}}> 55 zł </span> </li> <br/>
                    <li> 60 min./JEDNORAZ. - <span style={{fontFamily: 'Devonshire', fontSize:'1.2rem'}}> 65 zł </span> </li> 
                </ul>
            </div>
        
            <div className="headline">
                <h4> Cennnik </h4>
                <div className="pound"> <HiCurrencyPound/> </div>
            </div>
                        
            <div className='right'>        
                <h2> APLIKACJA </h2>
                <div className="icon">
                    <FcCircuit />            
                </div>

                <ul>
                    <li> 12 MIESIĘCY - <span style={{fontFamily: 'Devonshire', fontSize:'1.2rem'}}> 99 zł </span> </li> <br/>
                    <li> PRÓBNA / 2 tyg.- <span style={{fontFamily: 'Devonshire', fontSize:'1.2rem'}}> 0 zł </span> </li> <br/>
                    <li> Z KOREPETYCJAMI - <span style={{fontFamily: 'Devonshire', fontSize:'1.2rem'}}> 0 zł </span></li> 
                </ul>
                
            </div>
        </div>
        </div>
    )
}

export default Pricing
