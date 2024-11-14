import React from 'react';
import './CountactServer.css';
const CountactServer = () => {
    const users = [
        {
          id: 1,
          title: "مزاد الخادم",
          name: "انخفاض الأسعار وتصاعد الإثارة. ضع عروض الأسعار في مزاد الخادم الخاص بنا!",
          imgs: "/imgss/web-design.png",
           price:"يبدأ من 35.70 يورو"
        },
        {
          id: 2,
          title: "خادم مخصص",
          name: "خوادم جذر مخصصة لتلبية أي حاجة. أعلى أداء مع اتصال ممتاز.",
          imgs: "/imgss/app-dev.png",
           price:"يبدأ من 54.74 يورو"
        },
        {
          id: 3,
          title: "سحاب",
          name: "القليل من المال يمنحك الكثير من السحابة. خوادم سحابية مرنة مزودة بأجهزة متطورة.",
          imgs: "/imgss/custom.png",
           price:"يبدأ من 4.51 يورو"
        },
        {
          id: 4,
          title: "الخوادم المدارة",
          name: "اتصال خادم خالي من التوتر. سنهتم بالأمور التقنية.",
          imgs: "/imgss/erp.png",
           price:"يبدأ من 40.46 يورو"
        },
        {
          id: 5,
          title: "استضافة الويب",
          name: "الطريقة السريعة والرخيصة للوصول إلى صفحتك الرئيسية. الأسعار للمبتدئين والشركات.",
          imgs: "/imgss/outsourcing.png",
           price:"ابتداء من 2.09 يورو"
        },
        {
          id: 6,
          title: "حصة التخزين",
          name: "تخزين الملفات ومشاركتها بسهولة. يمكنك الوصول إلى بياناتك في أي وقت ومن أي مكان باستخدام مشاركة التخزين.",
          imgs: "/imgss/ecommerce.png",
          price:"ابتداء من 5.11 يورو"
        },
      ];

    return (
        <div className='countactserver'>
             <div className="cen">
             <h1>نظرة عامة على الخدمات  للشركات:</h1>
             </div>
             <div className="hed">
         {users.map(user => (
         <div key={user.id} className="card">
         <img src={user.imgs} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{user.title}</h5>
        <p className="card-text">{user.name}</p>
        <div className="price">
            <h3>{user.price}</h3>
            <button  className='btn btn-danger'>OverView</button>
        </div>
      </div>
    </div>
    ))}
  </div>
        </div>
    );
}

export default CountactServer;
