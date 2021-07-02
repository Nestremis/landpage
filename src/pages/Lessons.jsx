import React from 'react';
import './lessons.scss';
import {FcCollaboration} from 'react-icons/fc';


const Method = () => {
    return (

        <div className='lessons' id='lekcje'>           
            {/* <video src='/media/neurons.mov' autoPlay loop muted />  */}
            <div className="headline">
                <h4> &#160; lekcje </h4>
            </div>
            <div className="container">   

                <div className='left'>        
                    <p> 
                    <span style={{color:'red'}}> METODA MA WPŁYW NA SZYBKOŚĆ I STOPIEŃ PRZYSWAJANIA WIEDZY. </span> 
                    Szkolnictwo niestety nie daje wskazówek JAK sie uczyć
                    Nauka słówek - aby wykopać dół można to zrobić dłońmi, łopatą, koparką. Zależnie od tego, jakie narzędzie mamy tak szybko lub wolno to idzie. <br/>
                    Zrozumieć zapamiętać zastosować ZDALNIE
                    Znaczenie ma metoda. Wiedza jest jak bumerang - wróci do Ciebie, ale musisz rzucić mocno i umiejętnie. Trzeba pracować nei ciężko, a mądrze.AF 177, 180. 
                        Nie ma prostego języka      
                    </p>
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, beatae eos praesentium velit assumenda impedit. Sed deserunt rerum fugit culpa facilis, laboriosam quia, consequuntur, sint minus exercitationem ducimus neque accusantium?
                     </p>
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, beatae eos praesentium velit assumenda impedit.
                     </p>
                </div>

                <div className='right'>        
                    <video src='/media/mechanism.mov' autoPlay loop muted >
                        <FcCollaboration/>
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Method
