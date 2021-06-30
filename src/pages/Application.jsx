import React, {useState} from 'react';
import './application.scss';


const Method = () => {

    const [currentSlide, setCurrentSlide] = useState('slide1');

    const handleClick = (e) => {
        e==='left' 
            ? setCurrentSlide( currentSlide> 0 ?  currentSlide-1 : 2 ) 
            : setCurrentSlide(currentSlide)
    }   
 
    // <section className={(`time-${  
    //     !clockActive ? 'inactive' : ''
    //     ||
    //     breakIsOn ? 'active-breakon' : ''        
    //     || 
    //     sessionOn ? 'active' : ''            
    //   } `) } >
    //         <p> {timeArray[1]} </p>
    //         <span>:</span>
    //         <p>{timeArray[2]}</p>
    //   </section>   

    return (

        <div className='application' id='aplikacja'>           
            {/* <video src='/media/neurons.mov' autoPlay loop muted />  */}
            {/* <div className="headline">
                <h4> &#160; aplikacja </h4>
            </div> */}

            <img src='media/arrow.png' alt='arrow left' className='arrow left' onClick={()=> handleClick('left')}   />
            <img src='media/arrow.png' alt='arrow right' className='arrow right' onClick={()=> handleClick('right')}  />
            
            <div className="slide slide1">   
                <div className="container">                
                    <div className="item">                        
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src='media/eduremote.png' alt='something'/>
                                    <h2>ONE</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nostrum distinctio accusantium et adipisci labore atque tempore dignissimos saepe similique, ducimus deserunt quidem.
                                    </p>
                                </div>
                            </div>
                        </div>                            
                        <div className="right">
                            Diabeł tkwi w szczegółach. Jest wiele aplikacji. Nie oznacza to że nie trzeba włożyć wysiłku. 
                        </div>
                    </div>      
                </div>
            </div>

            <div className="slide slide2">   
                <div className="container">                
                    <div className="item">                        
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src='media/eduremote.png' alt='something'/>
                                    <h2>TWO</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nostrum distinctio accusantium et adipisci labore atque tempore dignissimos saepe similique, ducimus deserunt quidem.
                                    </p>
                                </div>
                            </div>
                        </div>                            
                        <div className="right">
                            Diabeł tkwi w szczegółach. Jest wiele aplikacji. Nie oznacza to że nie trzeba włożyć wysiłku. 
                        </div>
                    </div>      
                </div>
            </div>

            <div className="slide slide3">   
                <div className="container">                
                    <div className="item">                        
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src='media/eduremote.png' alt='something'/>
                                    <h2>THREE</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nostrum distinctio accusantium et adipisci labore atque tempore dignissimos saepe similique, ducimus deserunt quidem.
                                    </p>
                                </div>
                            </div>
                        </div>                            
                        <div className="right">
                            Diabeł tkwi w szczegółach. Jest wiele aplikacji. Nie oznacza to że nie trzeba włożyć wysiłku. 
                        </div>
                    </div>      
                </div>
            </div>

            

            <div className='sentence'> 
                  <h4> Jeden język ustawia Cię w korytarzu życia. <br/> Dwa języki otwierają każde drzwi po drodze. 
            </h4>
            
            <h5>– Frank Smith, psycholingwista </h5>  
            </div>

        </div>
    )
}

export default Method
