import React from 'react';
import './method.scss';

const Method = () => {
    return (

        <div className='method' id='metoda'>           
            {/* <video src='/media/neurons.mov' autoPlay loop muted />  */}
            <div className="headline">
                <h4> &#160; metoda</h4>
            </div>
            <div className="container">   

                <div className='left'>        
                    Metoda ma ogromny wpływ na szybkość i stopień przyswajania wiedzy. Szkolnictwo niestety nie daje wskazówek JAK sie uczyć
                    Nauka słówek - aby wykopać dół można to zrobić dłońmi, łopatą, koparką. Zależnie od tego, jakie narzędzie mamy tak szybko lub wolno to idzie. 
                    Zrozumieć zapamiętać zastosować ZDALNIE
                    Znaczenie ma metoda. Wiedza jest jak bumerang - wróci do Ciebie, ale musisz rzucić mocno i umiejętnie. Trzeba pracować nei ciężko, a mądrze.AF 177, 180. 
                        Nie ma prostego języka                
                </div>

                <div className='right'>        
                    <video src='/media/mechanism.mov' autoPlay loop muted />
                </div>
            </div>
        </div>
    )
}

export default Method
