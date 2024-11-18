import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Sidebar from '../sidebar';
import '../../../assets/css/bs.css';

function BS_Trang() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row w-100">
          {/* Cột bên trái: Sidebar - rộng hơn */}
          <div className="col-md-5">
            <a>Bác sĩ Nha khoa Dental Care</a>
            <h4>BS. Mai Thị Trang</h4>
            <img src="img/bs/bs_trang.png" alt="Bác sĩ Trang" />
            <div className="caption">Bác sĩ Mai Thị Trang</div>
            <h5><i className="bi bi-telephone-fill"></i> Liên hệ</h5>
            <ul>
              <li><i className="bi bi-phone"></i> SĐT: 0839.637.383</li>
              <li><i className="bi bi-envelope-fill"></i> Email: Maitranghmu@gmail.com</li>
            </ul>
          </div>

          {/* Cột bên phải: Nội dung chính */}
          <div className="col-md-7">
            <div className="content">
              <h2><i className="bi bi-info-circle-fill"></i> Giới thiệu</h2>
              <p>
                Bác sĩ Mai Thị Trang là bác sĩ chỉnh nha được đánh giá là người luôn tận tâm, chu đáo, luôn đặt yếu tố sức khỏe khách hàng lên hàng đầu. Đó cũng là lý do bác sĩ Mai Trang đã được khách hàng tín nhiệm, trao gửi nụ cười của mình. Với sự thành công của nhiều case niềng răng do bác sĩ Mai Trang thực hiện, bạn hoàn toàn có thể an tâm lựa chọn bác sĩ làm người bạn đồng hành trên con đường tìm đến cái đẹp.
              </p>
              
              <h3><i className="bi bi-person-bounding-box"></i> Tiểu sử - Kinh nghiệm công tác</h3>
              <ul>
                <li><i className="bi bi-calendar-event"></i> Năm 2021 – nay: Công tác tại Hệ thống Nha khoa VIET SMILE</li>
              </ul>
              
              <h3><i className="bi bi-graduation-cap"></i> Trình độ học vấn</h3>
              <p>Bác sĩ chuyên sâu chỉnh nha</p>
              <p>Tốt Nghiệp Trường Đại học Y Hà Nội – Chuyên khoa Răng – Hàm – Mặt</p>
              
              <h3><i className="bi bi-file-earmark-text-fill"></i> Chứng chỉ & Đào tạo</h3>
              <ul>
                <li><i className="bi bi-award"></i> Chứng chỉ chỉnh nha hay phẫu thuật ở bệnh nhân có sai hình xương</li>
                <li><i className="bi bi-award"></i> Chứng chỉ kiểm soát torque với mắc cài kim loại tự buộc</li>
                <li><i className="bi bi-award"></i> Chứng nhận tham gia Hội thảo Điều trị chỉnh nha sớm của Bệnh viện Răng hàm mặt Trung Ương</li>
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

export default BS_Trang;
