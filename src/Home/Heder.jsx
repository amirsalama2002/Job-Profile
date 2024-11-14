import React from 'react';
import './Home.css';
const Heder = () =>{
    return(
        <div className='home'>
          <div className="hed">
            <div className="clom">
            <h1>نحن <strong>المبدعون
            شركة التحول<br/>في عالم </strong>التكنولوجيا</h1>
                <p>استخدام قوة الإبداع لبناء مستقبل أفضل<br/>
                لشعبنا وكوكبنا وعملائنا ومجتمعاتنا
                </p>
                <button className='falcon'>توظيف عملائنا </button>
            </div>
          </div>
        </div>
    );
};

export default Heder;