import React from 'react';
import './lessons.scss';
// import {FcCollaboration} from 'react-icons/fc';


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
                    <video src='/public/media/mechanism.mov' autoPlay loop muted /> 
                </div>
            </div>

            <div className='gallery'>             
                    <img src="media/thumb-1.jpg" alt="boy thumb up" className="photos" />
                    <img src="media/thumb-2.jpg" alt="happy face" className='photos' />
                    <img src="media/thumb-3.jpg" alt="three teens thumbs up" className='photos' />
                    <img src="media/thumb-4.jpg" alt="three kids thumbs up" className='photos' />
                    <img src="media/thumb-5.jpg" alt="girl thumb up" className='photos' />
                    <img src="media/thumb-6.jpg" alt="teen thumb up" className='photos' />
            </div>

        </div>        
    )
}

export default Method
