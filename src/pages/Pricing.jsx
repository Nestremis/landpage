import React from 'react';
import './pricing.scss';
import {HiCurrencyPound} from 'react-icons/hi';

const Pricing = () => {
    return (
        <div className='pricing' id='cennik'>
        
        <div className="container">   
            <div className='left'>  
                <h2> LEKCJE </h2>
                <ul>
                    <li>Lekcja 60 min. - 60 zł</li> <br/>
                    <li>Lekcja jednorazowa - 65 zł </li> <br/>
                    <li>Subskrypcja 1 rok - 99,0 </li> 
                 </ul>
            </div>
        
            <div className="headline">
                <h4> cennnik </h4>
                <div className="pound"> <HiCurrencyPound/> </div>
            </div>
                        
            <div className='right'>        
                <h2> APLIKACJA </h2>

                <ul>
                <li>Subskrypcja ucznia - 0zł</li> <br/>
                <li>Subskrypcja próbna 2 tyg.- 0zł </li> <br/>
                <li>Subskrypcja 1 rok - 99,0 </li>
                </ul>
                
            </div>
        </div>
        </div>
    )
}

export default Pricing
