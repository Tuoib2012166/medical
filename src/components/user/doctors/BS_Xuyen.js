import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Sidebar from '../sidebar';
import '../../../assets/css/bs.css';

function BS_Xuyen() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row w-100">
          {/* Cột bên trái: Sidebar - rộng hơn */}
          <div className="col-md-5">
            <a>Bác sĩ Nha khoa Dental Care</a>
            <h4>BS. Đặng Thị Hà Xuyên</h4>
            <img src="img/bs/bs_xuyen.png" alt="Bác sĩ Xuyên" />
            <div className="caption">Bác sĩ Đặng Thị Hà Xuyên</div>
            <h5><i className="bi bi-telephone-fill"></i> Liên hệ</h5>
            <ul>
              <li><i className="bi bi-phone"></i> SĐT: 0964.868.345</li>
              <li><i className="bi bi-envelope-fill"></i> Email: dangthihaxuyen@gmail.com</li>
            </ul>
          </div>

          {/* Cột bên phải: Nội dung chính */}
          <div className="col-md-7">
            <div className="content">
              <h2><i className="bi bi-info-circle-fill"></i> Giới thiệu</h2>
              <p>
                Hiện tại, Bác sĩ Xuyên đang làm việc tại chuyên khoa Chỉnh nha tại Hệ thống Nha khoa Dental Care. Bác sĩ Xuyên là người đã mang lại rất nhiều sự an tâm, giúp khách hàng kiên trì trong suốt hành trình niềng răng của mình. Khách hàng tới thăm khám niềng răng, điều trị nha khoa tổng quát đều nhận xét bác sĩ vô cùng ân cần, kỹ càng và kiên nhẫn lắng nghe mong muốn của họ, dựa trên các dữ liệu đã thu thập được cùng chuyên môn, kinh nghiệm của mình để lên phác đồ điều trị một cách chính xác nhất.
              </p>
              
              <h3><i className="bi bi-person-bounding-box"></i> Tiểu sử - Kinh nghiệm công tác</h3>
              <ul>
                <li><i className="bi bi-calendar-event"></i> Năm 2022 – nay: Công tác tại Nha khoa Dental Care</li>
              </ul>
              
              <h3><i className="bi bi-graduation-cap"></i> Trình độ học vấn</h3>
              <p>Tốt nghiệp Chuyên khoa Răng Hàm Mặt – Đại học Y Hà Nội</p>
              <p>Bác sĩ chuyên sâu Chỉnh nha tại Hệ thống nha khoa Dental Care</p>
              
              <h3><i className="bi bi-file-earmark-text-fill"></i> Chứng chỉ & Đào tạo</h3>
              <ul>
                <li><i className="bi bi-award"></i> Chứng nhận Chỉnh nha toàn diện SSO – Y Company</li>
                <li><i className="bi bi-award"></i> Chứng nhận tham gia Hội thảo “Điều trị chỉnh nha sớm”</li>
                <li><i className="bi bi-award"></i> Chứng chỉ khóa học “Sinh cơ học chỉnh nha – Từ lý thuyết cốt lõi đến ứng dụng lâm sàng” – GS. Kwangchul Choy</li>
                <li><i className="bi bi-award"></i> Chứng chỉ khóa học đào tạo liên tục “Chỉnh hình răng mặt – ĐH Y Hà Nội”</li>
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

export default BS_Xuyen;
