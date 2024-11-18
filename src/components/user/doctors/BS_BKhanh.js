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
            <h4>BS. Nguyễn Gia Bảo Khánh</h4>
            <img src="img/bs/bs_bkhanh.png" alt="Bác sĩ Khánh" />
            <div className="caption">Bác sĩ Nguyễn Gia Bảo Khánh</div>
            <h5><i className="bi bi-telephone-fill"></i> Liên hệ</h5>
            <ul>
              <li><i className="bi bi-phone"></i> SĐT: 0399.386 783</li>
              <li><i className="bi bi-envelope-fill"></i> Email: drbaokhanh158@gmail.com</li>
            </ul>
          </div>

          {/* Cột bên phải: Nội dung chính */}
          <div className="col-md-7">
            <div className="content">
              <h2><i className="bi bi-info-circle-fill"></i> Giới thiệu</h2>
              <p>
                Bác sĩ Nguyễn Gia Bảo Khánh – Tốt nghiệp Chuyên khoa Răng Hàm Mặt, Trường Đại học Y Dược Cần Thơ. Với kinh nghiệm hơn 4 năm hoạt động trong lĩnh vực niềng răng và chỉnh nha chuyên sâu. Không chỉ có kỹ năng tốt, bác sĩ Nguyễn Gia Bảo Khánh còn thường xuyên tham gia các khóa học để nâng cao trình độ, kiến thức cho bản thân nhằm mang lại kết quả tốt nhất cho khách hàng. Với phong cách làm việc chuyên nghiệp và sự tận tâm với sức khỏe răng miệng của từng khách hàng. Bác sĩ Nguyễn Gia Bảo Khánh đã nhận được sự tín nhiệm và lòng tin từ rất nhiều khách hàng, và trở thành sự lựa chọn hàng đầu cho việc chăm sóc răng miệng và mang đến nụ cười hoàn hảo.
              </p>
              
              <h3><i className="bi bi-person-bounding-box"></i> Tiểu sử - Kinh nghiệm công tác</h3>
              <ul>
                <li><i className="bi bi-calendar-event"></i> Năm 2021 – nay: Công tác tại Hệ thống Nha Khoa Dental Care</li>
              </ul>
              
              <h3><i className="bi bi-graduation-cap"></i> Trình độ học vấn</h3>
              <p>Bác sĩ chuyên sâu chỉnh nha</p>
              <p>Tốt nghiệp Chuyên khoa Răng Hàm Mặt – Trường Đại học Y Dược Cần Thơ</p>
              
              <h3><i className="bi bi-file-earmark-text-fill"></i> Chứng chỉ & Đào tạo</h3>
              <ul>
                <li><i className="bi bi-award"></i> Chứng chỉ Chẩn đoán và lập kế hoạch điều trị chỉnh nha lâm sàng (Bệnh viện Răng Hàm Mặt Hồ Chí Minh)</li>
                <li><i className="bi bi-award"></i> Chứng chỉ Điều trị chỉnh nha dựa trên sinh học và kiểm soát mặt phẳng nhai theo 3 chiều không gian – Giáo sư Enrique García Romero</li>
                <li><i className="bi bi-award"></i> Chứng chỉ Kỹ thuật dây cung thẳng liên tục (Tổ chức Ortho Organizers)</li>
                <li><i className="bi bi-award"></i> Chứng nhận Khóa học Chỉnh nha với khay trong suốt</li>
                <li><i className="bi bi-award"></i> Chứng nhận đào tạo liên tục Chỉnh nha thời đại mới – Thách thức và xu hướng</li>
                <li><i className="bi bi-award"></i> Chứng chỉ khóa học “Sinh cơ học chỉnh nha – Từ lý thuyết cốt lõi đến ứng dụng lâm sàng” – GS. Kwangchul Choy</li>
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
