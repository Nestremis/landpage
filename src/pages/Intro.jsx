import React from 'react';
import './intro.scss';
// import Typewriter from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index.css'

const Intro = () => {
    return (
        <div className='intro' id='intro' >

            {/*<video src='/media/globe.mp4' autoPlay loop muted /> */}

            {/* <video src='/media/neurons.mov' autoPlay loop muted />  */}

            
                <h1> WELCOME! <br/> {' '}
                    {/*  (Welcome! Nice to see you, Hello) */}
                   {/* <span style={{ color: 'orange', fontWeight: 'bold', textAlign: 'center', }}>
                    <Typewriter
                        loop
                        cursor
                        cursorStyle='_'
                        typeSpeed={350}
                        deleteSpeed={50}
                        delaySpeed={1400}
                        words={['zrozum..', '', 'zapamiętaj..','zastosuj..']}
                    />
                    </span> */}
                </h1>
                <h4> ZDALNA NAUKA ANGIELSKIEGO </h4>

                {/* <img src='/media/introImg.jpg' alt='girl learnig remotely'/>  */}

            

        </div>
    )
}

export default Intro
