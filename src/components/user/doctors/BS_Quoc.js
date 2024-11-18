import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Sidebar from '../sidebar';
import '../../../assets/css/bs.css';

function BS_Quoc() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row w-100">
          {/* Cột bên trái: Sidebar - rộng hơn */}
          <div className="col-md-5">
            <a>Bác sĩ Nha khoa Dental Care</a>
            <h4>BS. Phạm Ngọc Quốc</h4>
            <img src="img/bs/bs_quoc.png" alt="Bác sĩ Quốc" />
            <div className="caption">Bác sĩ Phạm Ngọc Quốc</div>
            <h5><i className="bi bi-telephone-fill"></i> Liên hệ</h5>
            <ul>
              <li><i className="bi bi-phone"></i> SĐT: 0343.637.383</li>
              <li><i className="bi bi-envelope-fill"></i> Email: quocakiorhm@gmail.com</li>
            </ul>
          </div>

          {/* Cột bên phải: Nội dung chính */}
          <div className="col-md-7">
            <div className="content">
              <h2><i className="bi bi-info-circle-fill"></i> Giới thiệu</h2>
              <p>
                Bác sĩ Phạm Ngọc Quốc hiện đang công tác tại nha khoa Dental Care – là bác sĩ chuyên sâu về tiểu phẫu – phục hình – implant. Với kinh nghiệm và sự tận tâm, chuyên nghiệp, chu đáo, bác sĩ Ngọc Quốc đã mang đến cho khách hàng sự an tâm, tin tưởng, cảm thấy thoải mái, đạt hiệu quả cao nhất khi điều trị. Bác sĩ Ngọc Quốc luôn không ngừng nâng cao trình độ chuyên môn, ứng dụng công nghệ hiện đại vào quá trình thực hiện để giúp khách hàng có trải nghiệm dịch vụ chất lượng nhất.
              </p>
              
              <h3><i className="bi bi-person-bounding-box"></i> Tiểu sử - Kinh nghiệm công tác</h3>
              <ul>
                <li><i className="bi bi-calendar-event"></i> Năm 2019 – 2023: Công tác tại nha khoa Lucci</li>
                <li><i className="bi bi-calendar-event"></i> Năm 2021 – 2022: Thực hành tại Bệnh viện Đại học Y Hà Nội</li>
                <li><i className="bi bi-calendar-event"></i> Năm 2023 – nay: Công tác tại Nha khoa Dental Care</li>
              </ul>
              
              <h3><i className="bi bi-graduation-cap"></i> Trình độ học vấn</h3>
              <p>Bác sĩ chuyên sâu implant</p>
              <p>Tốt nghiệp chuyên khoa Răng – Hàm – Mặt, Trường Đại học Y Dược Thái Nguyên</p>
              
              <h3><i className="bi bi-file-earmark-text-fill"></i> Chứng chỉ & Đào tạo</h3>
              <ul>
                <li><i className="bi bi-award"></i> Chứng chỉ Cấy ghép implant nha khoa</li>
                <li><i className="bi bi-award"></i> Chứng chỉ kiểm soát nhiễm khuẩn bệnh viện, nha khoa</li>
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

export default BS_Quoc;
