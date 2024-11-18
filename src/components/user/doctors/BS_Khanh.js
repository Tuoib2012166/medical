import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Sidebar from '../sidebar';
import '../../../assets/css/bs.css';

function BS_Khanh() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row w-100">
          {/* Cột bên trái: Sidebar - rộng hơn */}
          <div className="col-md-5">
            <a>Bác sĩ Nha khoa Dental Care</a>
            <h4>BS. Đinh Ngọc Khánh</h4>
            <img src="img/bs/bs_khanh.png" alt="Bác sĩ Khánh" />
            <div className="caption">Bác sĩ Đinh Ngọc Khánh</div>
            <h5><i className="bi bi-telephone-fill"></i> Liên hệ</h5>
            <ul>
              <li><i className="bi bi-phone"></i> SĐT: 0123456789</li>
              <li><i className="bi bi-envelope-fill"></i> Email: dr.khanh@gmail.com</li>
            </ul>
          </div>

          {/* Cột bên phải: Nội dung chính */}
          <div className="col-md-7">
            <div className="content">
              <h2><i className="bi bi-info-circle-fill"></i> Giới thiệu</h2>
              <p>
                Bác sĩ Đinh Ngọc Khánh được đào tạo chuyên sâu về tiểu phẫu, implant, với khả năng sử dụng thành thạo các thiết bị công nghệ cao trong nha khoa, các kỹ thuật chuyên sâu trong cấy ghép implant. Với nhiều năm kinh nghiệm khám, tư vấn và điều trị trong ngành nha khoa, bác sĩ Khánh luôn đặt yếu tố an toàn – chính xác lên chất lượng, đưa đến cho khách hàng những trải nghiệm an toàn, hiệu quả nhất.
              </p>
              
              <h3><i className="bi bi-person-bounding-box"></i> Tiểu sử - Kinh nghiệm công tác</h3>
              <ul>
                <li><i className="bi bi-calendar-event"></i> Năm 2018 – 2020: Công tác tại bệnh viện Hữu Nghị Việt Nam – Cuba Hà Nội</li>
                <li><i className="bi bi-calendar-event"></i> Năm 2020 – 2021: Công tác tại nha khoa Bảo Việt Hà Nội</li>
                <li><i className="bi bi-calendar-event"></i> Năm 2021 – 2023: Công tác tại nha khoa Việt Smile</li>
              </ul>
              
              <h3><i className="bi bi-graduation-cap"></i> Trình độ học vấn</h3>
              <p>Bác sĩ chuyên sâu Phục hình sứ – Implant – Tiểu phẫu</p>
              <p>Tốt Nghiệp Trường Đại học Y Hà Nội – Chuyên khoa Răng – Hàm – Mặt</p>
              
              <h3><i className="bi bi-file-earmark-text-fill"></i> Chứng chỉ & Đào tạo</h3>
              <ul>
                <li><i className="bi bi-award"></i> Chứng chỉ implant Viện đào tạo Răng – Hàm – Mặt – Đại học Y Hà Nội</li>
                <li><i className="bi bi-award"></i> Chứng nhận Thực hành về phẫu thuật tăng thể tích xương - nâng xoang trong implant</li>
                <li><i className="bi bi-award"></i> Hội thảo Cách mạng mới trong implant – Bệnh viện Răng Hàm Mặt TP.HCM</li>
              </ul>
               <h3><i className="bi bi-hospital"></i> Nơi làm việc chính</h3>
              <p>Nha khoa Dental Care</p>
              <h5><i className="bi bi-geo-alt"></i> Địa chỉ</h5>
              <p>Cần Thơ</p>
              <h5><i className="bi bi-clock"></i> Giờ làm việc</h5>
              <p>
                Thứ Hai, Thứ Ba, Thứ Tư, Thứ Sáu, Thứ Bảy, Chủ Nhật: 08:30 – 19:00<br />
                Thứ Năm: 08:30 – 17:30
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BS_Khanh;
