import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Sidebar from '../sidebar';
import '../../../assets/css/bs.css';

function BS_HoaiAnh() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row w-100">
          {/* Cột bên trái: Sidebar - rộng hơn */}
          <div className="col-md-5">
            <a>Bác sĩ Nha khoa Dental Care</a>
            <h4>BS. Lê Thị Hoài Anh</h4>
            <img src="img/bs/bs_anh.png" alt="Bác sĩ Hoài Anh" />
            <div className="caption">Bác sĩ Lê Thị Hoài Anh</div>
            <h5><i className="bi bi-telephone-fill"></i> Liên hệ</h5>
            <ul>
              <li><i className="bi bi-phone"></i> SĐT: 0975.729.687</li>
              <li><i className="bi bi-envelope-fill"></i> Email: Hoaianhlethi308@gmail.com</li>
            </ul>
          </div>

          {/* Cột bên phải: Nội dung chính */}
          <div className="col-md-7">
            <div className="content">
              <h2><i className="bi bi-info-circle-fill"></i> Giới thiệu</h2>
              <p>
                Bác sĩ Lê Thị Hoài Anh là bác sĩ chuyên sâu trong lĩnh vực chỉnh nha, có nhiều năm kinh nghiệm. Sự tận tâm và nhiệt tình của bác sĩ Hoài Anh đã thu hút sự tin tưởng của nhiều khách hàng, cùng với sự chuyên nghiệp và sự nhẹ nhàng, hỗ trợ tận tình mà bác sĩ luôn mang đến. Với hàng nghìn khách hàng đã trải qua liệu trình điều trị của bác sĩ Hoài Anh, họ đã có được nụ cười mới, với hàm răng đều đẹp và rất hài lòng với quá trình niềng răng cũng như kết quả của mình.
              </p>
              
              <h3><i className="bi bi-person-bounding-box"></i> Tiểu sử - Kinh nghiệm công tác</h3>
              <ul>
                <li><i className="bi bi-calendar-event"></i> Năm 2020 – 2021: Thực hành tại Bệnh viện Đại học Y Hà Nội</li>
                <li><i className="bi bi-calendar-event"></i> Năm 2021 – nay: BS chỉnh nha tại hệ thống Nha khoa Dental Care</li>
              </ul>
              
              <h3><i className="bi bi-graduation-cap"></i> Trình độ học vấn</h3>
              <p>Bác sĩ chuyên sâu chỉnh nha</p>
              <p>Tốt nghiệp chuyên khoa Răng – Hàm – Mặt Đại học Y Hà Nội</p>
              
              <h3><i className="bi bi-file-earmark-text-fill"></i> Chứng chỉ & Đào tạo</h3>
              <ul>
                <li><i className="bi bi-award"></i> Chứng chỉ Điều trị chỉnh nha dựa trên nguyên tắc sinh học và kiểm soát mặt phẳng nha ba chiều – MEAW Technique</li>
                <li><i className="bi bi-award"></i> Chứng chỉ chỉnh nha trong suốt Invissalign tập đoàn Align</li>
                <li><i className="bi bi-award"></i> Chứng chỉ Khóa học về Phương pháp bẻ dây với kỹ thuật Geaw – GS Shirasu</li>
                <li><i className="bi bi-award"></i> Chứng chỉ đào tạo liên tục “Cuộc cách mạng của MSE trong điều trị hẹp XHT và các ứng dụng nâng cao ở người trưởng thành” – GS. Won Moon</li>
                <li><i className="bi bi-award"></i> Chứng nhận “Sinh cơ học Chỉnh nha” – GS Kwangchul Choy</li>
                <li><i className="bi bi-award"></i> Chứng nhận “Chỉnh nha cho trẻ em đang tăng trưởng” – Prof. Enrique Garcia Romero</li>
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

export default BS_HoaiAnh;
