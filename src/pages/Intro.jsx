import React from 'react';
import './intro.scss';
import Typewriter from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index.css'

const Intro = () => {
    return (
        <div className='intro' id='intro' >

            {/*<video src='/media/globe.mp4' autoPlay loop muted /> */}

            {/* <video src='/media/neurons.mov' autoPlay loop muted />  */}

            
            <h1> WELCOME! <br/> {' '} </h1>
            
            <h2> ZDALNA NAUKA ANGIELSKIEGO </h2>
                
            <h3>
                   <span style={{ color: 'hsl(0,0%,15%)', fontSize: '600', textAlign: 'center', }}>
                    <Typewriter
                        loop
                        cursor
                        cursorStyle='_'
                        typeSpeed={50}
                        deleteSpeed={10}
                        delaySpeed={3000}
                        // words={['zrozum..', '', 'zapamiętaj..','zastosuj..', 'HOORAY!']}
                        words={['Zakuj. Zdaj.Zapomnij.', '...?', 'Zrozum.  Zapamiętaj.  Zastosuj. ', '😀']}
                    />
                    </span> 
            </h3>
                
                
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