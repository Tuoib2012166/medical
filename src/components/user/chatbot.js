// Chatbot.js
import React, { useEffect } from 'react';
// import '../../assets/css/chatbot.css';

const Chatbot = () => {
  const handleAppointmentClick = () => {
    // Xử lý khi nút "Đặt lịch hẹn" được nhấn
    alert("Đặt lịch hẹn được nhấn!");
  };

  useEffect(() => {
    // // Thêm script cho chatbot
    // const script = document.createElement('script');
    // script.src = 'https://cdn.fchat.vn/assets/embed/webchat.js?id=66f6418bb8486d35ca68dfc2';
    // script.async = true;
    // document.body.appendChild(script);

    // Xóa script khi component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed-panel">
      {/*<button className="appointment-button" onClick={handleAppointmentClick}>*/}
      {/*  <i className="fas fa-calendar-alt"></i> Đặt lịch hẹn*/}
      {/*</button>*/}
      {/*<div className="chatbot-container">*/}
      {/*  /!* Khu vực chatbot sẽ tự động được chèn bởi script *!/*/}
      {/*  <p>Chatbot sẽ hiển thị ở đây</p>*/}
      {/*</div>*/}
    </div>
  );
};

export default Chatbot;
