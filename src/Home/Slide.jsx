// import React from 'react';
// import './Slide.css';
// const Slide = () => {
//     return (
//         <div className="slide">
//       <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
//   <ol className="carousel-indicators">
//     <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
//     <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
//     <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
//     {/* <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
//     <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
//     <li data-target="#carouselExampleCaptions" data-slide-to="5"></li> */}
//   </ol>
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <div className="kloom">
//         <div className="hed1">
//           Amir Salama Hassan 
//         </div>
//         <div className="hed2">
//         Amir Salama Hassan
//         </div>
//         <div className="hed3">
//         Amir Salama Hassan
//         </div>
//         <div className="hed4">
//         Amir Salama Hassan
//         </div>
//       </div>
//       {/* <img src="/imgss/name1 (1).jpeg" className="d-block w-100" alt="..."/> */}
//     </div>
//     <div className="carousel-item">
//       <h1>Amir Salama Hassan</h1>
//       {/* <img src="/imgss/name1 (6).jpeg" className="d-block w-100" alt="..."/> */}
//     </div>
//     <div className="carousel-item">
//       {/* <img src="/imgss/name1 (5).jpeg" className="d-block w-100" alt="..."/> */}
//     </div>
//     <div className="carousel-item">
//       {/* <img src="/imgss/name1 (4).jpeg" className="d-block w-100" alt="..."/> */}
//     </div>
//     <div className="carousel-item">
//       {/* <img src="/imgss/name1 (3).jpeg" className="d-block w-100" alt="..."/> */}
//     </div>
//     <div className="carousel-item">
//       {/* <img src="/imgss/name1 (2).jpeg" className="d-block w-100" alt="..."/> */}
//     </div>
//   </div>
  
//   <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="sr-only">Previous</span>
//   </a>
//   <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="sr-only">Next</span>
//   </a>
// </div>
//       </div>
//     );
// }

// export default Slide;


// Slider.js
import React, { useState } from 'react';
import './Slide.css'; // Optional for styling

const images = [
       "https://aitificial.blog/wp-content/uploads/2024/02/ai-image-generators.jpg",
       "https://assets.justinmind.com/wp-content/uploads/2018/07/10-hero-image-website-ideas-to-inspire-you-7.png",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhBim1rF5VYzlBEm8MBQxbexa7olXbUV2MQ&s",
       "https://www.zarla.com/images/zarla-it-website-examples-3840x2400-20240730.webp?crop=16:9,smart&width=1200&dpr=2",
       "https://autogpt.net/wp-content/uploads/2023/08/Pogla_Explore_Nvidias_Perfusion_a_compact_yet_powerful_AI_image_72a99ad1-f594-4139-a44a-9b026034a3ba-768x512.jpg",
       "https://media.istockphoto.com/id/1058262630/vector/creation-responsive-internet-website-for-multiple-platforms-building-mobile-interface-on.jpg?s=612x612&w=0&k=20&c=BwGASPtAVnQu9_l-g7R-jW9gRxCQsmSMtRsA-jDPQz0=",
       "https://www.shutterstock.com/image-photo/woman-ues-laptop-computer-social-260nw-2372562547.jpg",
       "https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ=",
    ];

const Slide = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + images.length) % images.length
        );
    };

   

    return (
        <div className="slider">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            <button className='btn2' onClick={prevSlide}>Previous</button>
            <button className='btn1' onClick={nextSlide}>Next</button>
        </div>
    );
};

export default Slide;
