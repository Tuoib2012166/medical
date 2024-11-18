import React, { useState } from 'react';
import Header from '../header';
import Footer from '../footer';
import Sidebar from '../sidebar';
import GetForm from '../getForm';
import '../../../assets/css/bs.css';

function BS_Tan() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Hàm mở/đóng modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row w-100">
          {/* Cột bên trái: Sidebar - rộng hơn */}
          <div className="col-md-5">
            <a>Bác sĩ Nha khoa Dental Care</a>
            <h4>BS. Nguyễn Hữu Tân</h4>
            <img src="img/bs/bs_tan.png" alt="Bác sĩ Tân" />
            <div className="caption">Bác sĩ Nguyễn Hữu Tân</div>
            <h5><i className="bi bi-telephone-fill"></i> Liên hệ</h5>
            <ul>
              <li><i className="bi bi-phone"></i> SĐT: 0975.729.687</li>
              <li><i className="bi bi-envelope-fill"></i> Email: huutan1993@gmail.com</li>
            </ul>
          </div>

          {/* Cột bên phải: Nội dung chính */}
          <div className="col-md-7">
            <div className="content">
              <h2><i className="bi bi-info-circle-fill"></i> Giới thiệu</h2>
              <p>
                Bác sĩ Nguyễn Hữu Tân là bác sĩ chuyên sâu về tiểu phẫu – phục hình – implant. Với nhiều năm kinh nghiệm trong nghề, bác sĩ Tân được các khách hàng đặt niềm tin và an tâm sử dụng dịch vụ, cải thiện tình trạng răng. Bác sĩ Tân có trình độ tay nghề cao, năng lực chẩn đoán chính xác, điều trị hiệu quả giúp khách hàng được khắc phục hoàn toàn những vấn đề như: đau, nhức, mất răng,…
              </p>
              
              <h3><i className="bi bi-person-bounding-box"></i> Tiểu sử - Kinh nghiệm công tác</h3>
              <ul>
                <li><i className="bi bi-calendar-event"></i> Năm 2017 – 2022: Công tác tại nha khoa Trâu Quỳ</li>
                <li><i className="bi bi-calendar-event"></i> Năm 2022 – nay: Công tác tại Nha khoa Dental Care</li>
              </ul>
              
              <h3><i className="bi bi-graduation-cap"></i> Trình độ học vấn</h3>
              <p>Bác sĩ chuyên sâu implant</p>
              <p>Tốt nghiệp Đại học Y Dược Hải Phòng</p>
              
              <h3><i className="bi bi-file-earmark-text-fill"></i> Chứng chỉ & Đào tạo</h3>
              <ul>
                <li><i className="bi bi-award"></i> Chứng chỉ hành nghề số 045873/BYT-CCHN</li>
                <li><i className="bi bi-award"></i> Chứng chỉ implant Viện đào tạo Răng – Hàm – Mặt – Đại học Y Hà Nội</li>
              </ul>
              
              <h3><i className="bi bi-hospital"></i> Nơi làm việc chính</h3>
              <p>Nha khoa Dental Care</p>
              <h5><i className="bi bi-geo-alt"></i> Địa chỉ</h5>
              <p>397-399 Bạch Mai, Q.Hai Bà Trưng, Hà Nội, HN 100000</p>
              <h5><i className="bi bi-clock"></i> Giờ làm việc</h5>
              <p>
                Thứ Hai, Thứ Ba, Thứ Tư, Thứ Sáu, Thứ Bảy, Chủ Nhật: 08:30 – 19:00<br />
                Thứ Năm: 08:30 – 17:30
              </p>
            </div>
             {/* Modal - Form đặt lịch */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BS_Tan;
