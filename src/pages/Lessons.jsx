import React from 'react';
import './lessons.scss';
// import {FcCollaboration} from 'react-icons/fc';
import video from './media/mechanism.mov';
import thumb1 from './media/thumb1.jpg';
import thumb2 from './media/thumb2.jpg';
import thumb3 from './media/thumb3.jpg';
import thumb4 from './media/thumb4.jpg';
import thumb5 from './media/thumb5.jpg';
import thumb6 from './media/thumb6.jpg';




const Method = () => {
    return (

        <div className='lessons' id='lekcje'>    
            <div className="container">   
                <div className='left'>  

                <div className="headline">
                    <h4> Lekcje </h4>
                </div>
                    <p>                   
                    NO PAIN NO GAIN. NAUKA to złożony proces. Nauka nie musi boleć. Trzeba pracować nie ciężko, a mądrze.METODA MA WPŁYW NA SZYBKOŚĆ I STOPIEŃ PRZYSWAJANIA WIEDZY.
                    W szkołach mówi się czego się nauczyć. Ale bez wyjasnień <span style={{color:'orange'}}> JAK
                    </span> można to robić. Dzieci i młodzież muszą samemu dojść jakimi metodami to robić. 
                    Nauka słówek - aby wykopać dół można to zrobić dłońmi, łopatą, koparką. Zależnie od tego, jakie narzędzie mamy tak szybko lub wolno to idzie. <br/>
                    Zrozumieć zapamiętać zastosować ZDALNIE.
                    Znaczenie ma metoda. Wiedza jest jak bumerang - wróci do Ciebie, ale musisz rzucić mocno i umiejętnie.    
                    </p>
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, beatae eos praesentium velit assumenda impedit. Sed deserunt rerum fugit culpa facilis, laboriosam quia, consequuntur, sint minus exercitationem ducimus neque accusantium?
                     </p>
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, beatae eos praesentium velit assumenda impedit.
                    </p>                   
                </div>

                <div className='right'>        
                    {/* <video src='/media/mechanism.mov' autoPlay loop muted > 
                        <FcCollaboration /> 
                    </video> */}
                    <video src={video} autoPlay loop muted /> 
                </div>
            </div>

            <div className='gallery'>             
                    <img src={thumb1} alt="boy thumb up" className="photos" />
                    <img src={thumb2} alt="girl happy face" className='photos' />
                    <img src={thumb3} alt="3 teens thumbs up" className='photos' />
                    <img src={thumb4} alt="3 kids thumbs up" className='photos' />
                    <img src={thumb5} alt="girl thumb up" className='photos' />
                    <img src={thumb6} alt="teen thumb up" className='photos' />
            </div>

        </div>        
    )
}

export default Method
