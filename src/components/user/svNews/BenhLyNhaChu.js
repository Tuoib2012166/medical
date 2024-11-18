import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Sidebar from '../sidebar';
import '../../../assets/css/svNews.css'; // Nhớ import file CSS mới tạo

function BenhLyNhaChu() {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="main-content">
            <h4>Bệnh Nha Chu Là Gì?</h4>
            <p>Bệnh nha chu là một bệnh nhiễm trùng nướu làm tổn thương mô mềm và phá hủy xương xung quanh răng. Trường hợp nhiễm trùng trở nên nghiêm trọng có thể khiến răng bị lỏng hoặc dẫn đến mất răng.</p>

            <h4>Nguyên Nhân và Dấu Hiệu Viêm Nha Chu Cần Điều Trị</h4>
            <h6>Nguyên nhân dẫn đến bệnh viêm nha chu</h6>
            <p>Nguyên nhân chính của bệnh viêm nha chu là do vệ sinh răng miệng kém tạo điều kiện cho các mảng bám vi khuẩn tồn đọng trên răng, nướu. Lâu ngày, các mảng bám đó trở thành vôi (cao) răng và dẫn đến viêm nha chu nếu không được điều trị đúng cách, kịp thời.</p>

            <h6>Triệu chứng của bệnh viêm nha chu</h6>
            <ul>
                <li>Vôi răng, cao răng đóng thành mảng ở cổ răng.</li>
                <li>Sưng nướu, lợi. Có thể thấy dịch mủ chảy ra.</li>
                <li>Chảy máu ở lợi, nướu, đặc biệt là khi chải răng hoặc nhai thức ăn.</li>
                <li>Nướu không bao chặt răng, làm cho răng trông dài hơn bình thường.</li>
                <li>Hôi miệng.</li>
                <li>Răng bị lung lay.</li>
                <li>Răng thưa do bị di lệch.</li>
            </ul>
            <img src="img/svNews/nhachu.jpg"  />
          <div className="caption">Các trường hợp viêm nha chu cần được điều trị</div>
            <h4>Điều Trị Viêm Nha Chu Tại Dental Care</h4>
            <h6>Quy trình chữa viêm nha chu tại Dental Care</h6>
            <p>Với kinh nghiệm lâm sàng phong phú và được hỗ trợ bởi máy móc hiện đại, các bác sĩ Dental Care sẽ giúp bạn xử lý nhanh và dứt điểm bệnh viêm nha chu qua quy trình sau:</p>
            <ol>
                <li>Bác sĩ thăm khám, chụp X-quang kiểm tra tình trạng răng miệng và tư vấn điều trị.</li>
                <li>Điều trị viêm nha chu tùy vào từng giai đoạn bệnh lý cụ thể.</li>
                <li>Hướng dẫn chăm sóc răng miệng đúng cách sau khi điều trị.</li>
            </ol>
            <img src="img/svNews/nhachu2.png"  />
          <div className="caption">Đội ngũ bác sĩ Nha Khoa Kim trực tiếp thăm khám và điều trị cho khách hàng</div>
            <h4>Điều trị viêm nha chu hiệu quả tại Dental Care</h4>
            <p>Dental Care là địa chỉ chăm sóc răng miệng uy tín hàng đầu được nhiều khách hàng tin tưởng lựa chọn. Dù đang ở giai đoạn nào của bệnh lý viêm nha chu, khi đến Dental Care, khách hàng cũng có thể yên tâm về kết quả nhận được.</p>
            <ul>
                <li>Đội ngũ bác sĩ giỏi chuyên môn, tay nghề cao, có chứng chỉ hành nghề trực tiếp thăm khám, tư vấn và thực hiện nhẹ nhàng giúp khách hàng cảm thấy thoải mái, yên tâm.</li>
                <li>Hệ thống máy móc, công nghệ chẩn đoán và điều trị hiện đại, như: máy chụp X-quang, CT Cone Beam 3D… giúp bác sĩ chẩn đoán chính xác tình trạng răng miệng, từ đó lên kế hoạch điều trị chi tiết.</li>
                <li>Hệ thống thanh trùng trung tâm: 100% dụng cụ được tiệt trùng, mỗi khách hàng một bộ dụng cụ và phòng điều trị riêng biệt đảm bảo an toàn, chống lây nhiễm chéo.</li>
                <li>Dịch vụ nha khoa đạt chứng nhận GCR (Hoa Kỳ) và ISO 9001:2015: Đặt lịch hẹn thăm khám tiện lợi tại tất cả hệ thống hơn 30 phòng khám Dental Care trên toàn quốc; Đội ngũ nhân viên, bác sĩ tận tâm tư vấn, chăm sóc; Hệ thống quản lý theo dõi và chăm sóc khách hàng theo từng giai đoạn điều trị.</li>
            </ul>
            <img src="img/svNews/nhachu3.png"  />
          <div className="caption">Hệ thống thanh trùng trung tâm: 100% dụng cụ được tiệt trùng, mỗi khách hàng một bộ dụng cụ và phòng điều trị riêng biệt đảm bảo an toàn, chống lây nhiễm chéo.</div>
            <h4>Phòng Bệnh Nha Chu Như Thế Nào?</h4>
            <ul>
                <li>Vệ sinh răng miệng đúng cách: Đánh răng trong 2 phút, ít nhất 2 lần/ngày vào buổi sáng và trước khi đi ngủ, kết hợp dùng chỉ nha khoa, nước súc miệng… để loại bỏ các mảng bám tích tụ trên răng nướu.</li>
                <li>Khám răng miệng định kỳ: Ít nhất 6 đến 12 tháng một lần nên đến nha khoa kiểm tra để phát hiện và điều trị kịp thời các bệnh lý răng miệng, tránh những biến chứng ảnh hưởng sức khỏe toàn diện sau này.</li>
                <li>Chế độ ăn uống lành mạnh: Ăn nhiều thực phẩm giàu chất xơ và vitamin (rau xanh, các loại đậu, cá…); bỏ thói quen uống nhiều rượu bia, hút thuốc lá – tác nhân gây bệnh viêm nha chu phổ biến nhất.</li>
            </ul>
            <img src="img/svNews/nhachu4.png"  />
          <div className="caption">Vệ sinh răng miệng đúng cách là một trong những biện pháp phòng bệnh nha chu tốt nhất</div>
            <p><strong>Dental Care</strong> sẽ là địa chỉ điều trị viêm nha chu uy tín mà bạn có thể tin tưởng lựa chọn. Chúng tôi hân hạnh được đón tiếp và phục vụ quý khách hàng đến thăm khám, tư vấn và chỉnh nha vào tất cả các ngày trong tuần!</p>
            </div>
      </div>
      <Footer />
    </div>
  );
}

export default BenhLyNhaChu;
