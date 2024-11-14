import React from "react";
import './Count.css';
const Count = () => {
  const users = [
    {
      id: 1,
      title: "تصميم الموقع",
      name : "it Time company provides information technology consulting services, which is an important service aimed at helping customers understand and analyze their technological challenges and provide them with appropriate solutions.",
      email: "john.doe@example.com",
      imgs: "/imgss/web-design.png"
    },
    {
      id: 2,
      title: "تطوير التطبيقات",
      name : "One of the main services provided by Time Company, smart phone applications are considered one of the most important and best means of communication and interaction with customers and users in the current digital age.",
      email: "jane.smith@example.com",
      imgs: "/imgss/app-dev.png"
    },
    {
      id: 3,
      title: "تكنولوجيا المعلومات",
      name: "it Time company provides information technology consulting services, which is an important service aimed at helping customers understand and analyze their technological challenges and provide them with appropriate solutions.",
      email: "bob.johnson@example.com",
      imgs: "/imgss/custom.png"
    },
    {
      id: 4,
      title: "إدارة الشركات",
      name: "We provide integrated software systems that help companies manage and organize all their operations, from planning to implementation, using the Odoo system, which is distinguished by its ability to adapt to different businesses.",
      email: "bob.johnson@example.com",
      imgs: "/imgss/erp.png"
    },
    {
      id: 5,
      title: "تطوير البرمجة",
      name: "We provide specialized software development service as an innovative and specialized software solution that meets the basics accurately and effectively by creating customized application programs according to the client’s requirements.",
      email: "bob.johnson@example.com",
      imgs: "/imgss/outsourcing.png"
    },
    {
      id: 6,
      title: "  تصميم متجر الكتروني",
      name: "It provides the service of designing and developing electronic stores, which is the process of creating and preparing an online platform that enables companies and individuals to display and sell all their products or services via the web",
      email: "bob.johnson@example.com",
      imgs: "/imgss/ecommerce.png"
    },
  ];
  return (
    <div className="count">
    <div className="hed">
    {users.map(user => (
      <div key={user.id} className="card">
      <img src={user.imgs} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{user.title}</h5>
        <p className="card-text">{user.name}</p>
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
    ))}
  </div>
  </div>
  );
};

export default Count;
