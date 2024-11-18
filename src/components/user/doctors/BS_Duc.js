import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Sidebar from '../sidebar';
import '../../../assets/css/bs.css';

function BS_Duc() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row w-100">
          {/* Cột bên trái: Sidebar - rộng hơn */}
          <div className="col-md-5">
            <a>Bác sĩ Nha khoa Dental Care</a>
            <h4>BS. Đỗ Văn Đức</h4>
            <img src="img/bs/bs_duc.png" alt="Bác sĩ Đức" />
            <div className="caption">Bác sĩ Đỗ Văn Đức</div>
            <h5><i className="bi bi-telephone-fill"></i> Liên hệ</h5>
            <ul>
              <li><i className="bi bi-phone"></i> SĐT: 0928.637.383</li>
              <li><i className="bi bi-envelope-fill"></i> Email: dovanduca1@gmail.com</li>
              <li><i className="bi bi-facebook"></i> <a href="https://www.facebook.com/profile.php?id=61554943435788" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>
          </div>

          {/* Cột bên phải: Nội dung chính */}
          <div className="col-md-7">
            <div className="content">
              <h2><i className="bi bi-info-circle-fill"></i> Giới thiệu</h2>
              <p>
                Bác sĩ Đỗ Văn Đức là bác sĩ được đào tạo chuyên sâu về tiểu phẫu, implant, có khả năng sử dụng thành thạo những công nghệ, kỹ thuật tiên tiến nhất. Với kinh nghiệm và sự tận tâm của mình, bác sĩ Đức đã mang lại hàm răng khỏe mạnh cho khách hàng và nhận được nhiều đánh giá tích cực.
              </p>
              
              <h3><i className="bi bi-person-bounding-box"></i> Tiểu sử - Kinh nghiệm công tác</h3>
              <ul>
                <li><i className="bi bi-calendar-event"></i> Năm 2015 – 2021: Học bác sĩ chuyên khoa Răng – Hàm – Mặt, Đại học Y Dược Thái Nguyên.</li>
                <li><i className="bi bi-calendar-event"></i> Năm 2021 – nay: Công tác tại nha khoa Dental Care</li>
              </ul>
              
              <h3><i className="bi bi-graduation-cap"></i> Trình độ học vấn</h3>
              <p>Bác sĩ nha khoa tổng quát, tiểu phẫu – implant</p>
              <p>Tốt nghiệp chuyên khoa Răng – Hàm – Mặt, Đại học Y Dược Thái Nguyên</p>
              
              <h3><i className="bi bi-file-earmark-text-fill"></i> Chứng chỉ & Đào tạo</h3>
              <ul>
                <li><i className="bi bi-award"></i> Chứng chỉ implant K27</li>
                <li><i className="bi bi-award"></i> Chứng nhận tham gia hội thảo: Điều trị tuỷ lại và xử lý các trường hợp phức tạp trong nội nha Dr Moh’d Hammo</li>
                <li><i className="bi bi-award"></i> Chứng nhận tham gia khoá học: Thực hành trám răng thẩm mỹ</li>
                <li><i className="bi bi-award"></i> Chứng nhận tham gia khoá học: Nội nha thực chiến TS. Nguyễn Quang Tâm</li>
                <li><i className="bi bi-award"></i> Chứng nhận tham gia hội thảo: Ứng dụng lâm sàng nâng cao của phẫu thuật laser Diode</li>
                <li><i className="bi bi-award"></i> Chứng nhận tham gia hội nghị: Khoa học và triển lãm RHM quốc tế VIDEC 2023</li>
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

export default BS_Duc;
