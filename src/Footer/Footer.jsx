import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className='countact-us'>
               <div className="count">
                  <div className="sd">
                    <h3>اتصل بنا :</h3>
                    <span>هاتف
                    : <a>01028975932</a></span>
                    <br/>
                    <span>بريد إلكتروني : <a href="https://hamirsalama@gmail.com">
                    hamirsalama@gmail.com</a></span>
                    <br/>
                    <span>جت هاب : <a href="https://GitHub.com/amirsalama2002">amirsalama2002</a></span>
                    
                     </div>
                  <div className="sd">
                    <h3>قنوات التيم </h3>
                     <a href=""><i class="fa-brands fa-facebook"></i></a>
                     <a href="https://hamirsalama@gmail.com"><i class="fa-brands fa-google"></i></a>
                  
                     <a href="https://GitHub.com/amirsalama2002"><i class="fa-brands fa-github"></i></a>
                     <a href="https://web.whatsapp.com/"><i class="fa-brands fa-whatsapp"></i></a>
                     </div>
                     <div className="sd">
                    <h3>مطورين التيم</h3>
                  <h4>حسام الدين عبدالمنعم عبدربة</h4>
                 <h4>علي عبدالفتاح علي علي</h4>
                  <h4>شهندة احمد عبدالرحمن السيد</h4>
                  <h4>احمد عادل حسن علي حسن</h4>
                  <h4>حسن يسري حسن حنفي</h4>
                 <h4>طارق اشرف محمد ابو اليزيد</h4>
                 <h4>عبدالرحمن محمد فاروق مدبولي</h4>
                  <h4>نورهان مجمد علي سيد</h4>
                  <h4>أمير سلامة حسن عبدالعال</h4>
                  <h4>عبدالرحمن فوزي ابراهيم مصطفي</h4>
                  <h4>ندي سليمان محمد سليمان</h4>
                     </div>
                     <div className="sd">
                    <h3>التخصص</h3>
                 <h4>ui & ux Design</h4>
                 <h4>Front-End Developer</h4>
                 <h4>Front-End Developer</h4>
                 <h4>Front-End Developer</h4>
                 <h4>Front-End Developer</h4>
                 <h4>Back-End Developer</h4>
                  <h4>Back-End Developer </h4>
                 <h4>Bac-End Developer</h4>
                 <h4>Back-End Developer</h4>
                 <h4>The book</h4>
                 <h4>The book</h4>
                 
                     </div>
                  <div className="sd">
                    <h3>لغة</h3>
                  <h4>انجليزي</h4>
                 <h4>عربي</h4>
                     </div>
               </div>
               <h1> <span>  Shorouk Academy © </span>جميع الحقوق محفوظة </h1>
        </div>
    );
}

export default Footer;
