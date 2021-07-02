import React, {useState} from 'react';
import './application.scss';


const Method = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
          id: "1",
          icon: "media/eduremote.png",
          title: "Koncept",
          desc:
            "METHOD jest moim narzędziem pracy, które zaprojektowałam w oparciu o doświadczenia z dwóch dziedzin tj. z prowadzonych przeze mnie terapii dla dzieci i młodzieży z trudnościami w nauce oraz własnych doświadczeń związanych z nauką angielskiego. Nie znalazłam odpowiedniego narzędzia. Są oczywiście lepsze i gorsze aplikacje, ale żadna nie spełniała w pełni moich oczekiwań. Diabeł tkwi w szczegółach. Wtedy zrodził się pomysł stworzenia własnego projektu i przekazania go do realizacji. KONCEPT polega na użyciu go przeze mnie jako narzędzia podczas lekcji oraz jako aplikacji do samodzielnej nauki dla innych. ",
          img:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
          id: "2",
          icon: "",
          title: "slajd 2",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
          id: "3",
          icon: "",
          title: "slajd 3",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
      ];

    const handleClick = (e) => {
    e==='left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
    return (

        <div className='application' id='aplikacja'>           
            {/* <video src='/media/neurons.mov' autoPlay loop muted />  */}
            {/* <div className="headline">
                <h4> &#160; aplikacja </h4>
            </div> */}

            <img src='media/arrow.png' alt='arrow left' className='arrow left' onClick={() => handleClick('left')}  />
            <img src='media/arrow.png' alt='arrow right' className='arrow right' onClick={() => handleClick()}  />

            <div 
                className='slider' 
                style={{transform:`translateX(-${currentSlide *102}vw)`}} 
            >              
             {data.map((d) => (
                <div className='container' id=''>                
                    <div className='slide'>  
                        <div className="left-slide-part">
                            <div className="leftContainer">
                               
                                 <div className="imgContainer">
                                    <img src={d.icon} alt='grafika zdalna nauka'/>
                                </div>

                                <h2>{d.title}</h2>

                                <p>{d.desc}</p>
                            </div>
                        </div>  
                       {/*  <img src={d.icon} alt="" />
                        </div>
                        <h2>{d.title}</h2>
            <p>{d.desc}</p> */}

                        <div className="right-slide-part">
                            <p>Diabeł tkwi w szczegółach. Jest wiele aplikacji. Nie oznacza to że nie trzeba włożyć wysiłku.</p>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius pariatur distinctio provident deleniti aut, dignissimos inventore debitis omnis, quae voluptas id, earum enim dolor impedit quam ad quod. Rerum, enim.
                            </p> 
                        </div>
                    </div>      
                </div>               
            ))}
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


                   
