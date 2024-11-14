import React from "react";
import './Contaner.css';
const Countaner = () => {
  return (
    <div className="contaner">
      <div className="hed">
        <div className="icon">
        <i class="fa-solid fa-percent"></i>
          <h6>إدارة المشروع</h6>
        </div>
        <div className="icon">
        <i class="fa-solid fa-code"></i>
          <h6>مديري المطورين</h6>
        </div>
        <div className="icon">
        <i class="fa-solid fa-building-shield"></i>
          <h6>مشروع بناء</h6>
        </div>
        <div className="icon">
        <i class="fa-solid fa-sign-hanging"></i>
          <h6>إدارة المطور</h6>
        </div>
        <div className="icon">
        <i class="fa-solid fa-house-medical"></i>
          <h6>شركة الوساطة</h6>
        </div>
      </div>
    </div>
  );
};

export default Countaner;
