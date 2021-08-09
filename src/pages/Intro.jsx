import React from 'react';
import './intro.scss';
import Typewriter from 'react-simple-typewriter';
import 'react-simple-typewriter/dist/index.css';

const Intro = () => {
    return (
        <div className='intro' id='intro' >

            {/*<video src='/media/globe.mp4' autoPlay loop muted /> */}

            {/* <video src='/media/neurons.mov' autoPlay loop muted />  */}

            
            <h1> WELCOME! <br/> {' '} </h1>
            
            {/* // <h2> ZDALNA  NAUKA  ANGIELSKIEGO</h2> */}
                
            <h2>
                   <span style={{ color: 'white', fontSize: '5vmin', fontWeight:'bolder', textAlign: 'center' }}>
                        <Typewriter
                            loop
                            cursor
                            cursorStyle='_'
                            typeSpeed={60}
                            deleteSpeed={10}
                            delaySpeed={3400}
                            // words={['zrozum..', '', 'zapamiętaj..','zastosuj..', 'HOORAY!']}
                            // words={['Zakuj. Zdaj. Zapomnij. .....???', 'Zrozum. Zapamiętaj. Zastosuj. 😀']}
                             words={[
                                 'ZDALNA NAUKA ANGIELSKIEGO',
                                 'to właśnie to co robię.',
                                 'Jestem w tym całkiem dobra.', 
                                 'Możesz spytać mojej mamy', 
                                 '😉', 
                                 'Lubię uczyć języka i się uczyć.', 
                                 '(Lubię też mango i upały.)', 
                                 '😊', 
                                //  'Zasada trzech zet brzmi:', 
                                //  'Zakuj. Zdaj. Zapomnij.',
                                //  'Moja zasada brzmi:',
                                //  'Zrozum. Zapamiętaj. Zastosuj. 😀',  
                                    ]}
                        />
                    </span> 
            </h2> 
                
                
            {/* <h4> Jeden język ustawia Cię w korytarzu życia. Dwa języki otwierają każde drzwi po drodze. 
            </h4>
            
            <h5>– Frank Smith, psycholingwista </h5> */}



                {/* <img src='/media/introImg.jpg' alt='girl learnig remotely'/>  */}

            

        </div>
    )
}

export default Intro

// „With languages, you are at home anywhere” – Edmund de Waal
// „Znając języki wszędzie czujesz się jak w domu”
// “Gra­nice mo­jego języ­ka są gra­nica­mi mo­jego świata.” – Ludwig Wittgenstein
// „One language sets you in a corridor for life. Two Languages open every door along the way.”

//Lekcja w toku... Proszę nie przeszkadzać chyba że masz czekoladę albo znasz angielski 

// words={['zrozum..', '', 'zapamiętaj..','zastosuj..', 'HOORAY!']}
// words={['Lekcja w toku...', '', 'Proszę nie przeszkadzać','..chyba że masz czekoladę albo znasz angielski']}