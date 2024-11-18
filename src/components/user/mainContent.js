import React, { useState } from 'react';
import '../../assets/css/mainContent.css';
import GetForm from './getForm';
import { Radio } from 'antd';
import Swal from 'sweetalert2';

function MainContent() {
  

  return (
    <main>
      {/* Phần Hero */}
      <section id="home" className="hero">
        <h1 className="hero-title">Chào mừng đến với Phòng Khám Nha Khoa</h1>
        <p className="hero-description">Chăm sóc nụ cười của bạn, tận tâm từng phút giây</p>
      </section>

      <section id="News" className="news-section">
        <h2>
          Giới thiệu về <a href="#"><img src="img/logo.png" alt="Logo" className="logo" /></a>
        </h2>
        <p>
          DENTAL CARE được xây dựng và phát triển với hướng đi là trung tâm nha khoa kỹ thuật cao, chuyên sâu, phục vụ mọi nhu cầu của khách hàng về sức khỏe răng miệng. Chúng tôi cung cấp một loạt các dịch vụ mũi nhọn như dán sứ veneer, chỉnh nha, bọc răng sứ, cấy ghép implant, điều trị cười hở lợi và nhổ răng khôn.
        </p>
        <p>
          Để thực hiện được sứ mệnh đó, DENTAL CARE hiểu rằng chúng tôi phải tập trung đầu tư vào con người và hệ thống trang thiết bị công nghệ hiện đại. Đội ngũ bác sĩ của chúng tôi là những chuyên gia hàng đầu trong lĩnh vực nha khoa, có nhiều năm kinh nghiệm và được đào tạo chuyên sâu. Chúng tôi cam kết mang đến cho khách hàng dịch vụ nha khoa an toàn, hiệu quả và tiện lợi nhất.
        </p>
        <p>
          Chúng tôi cũng rất chú trọng đến không gian làm việc và trải nghiệm của khách hàng. Tại DENTAL CARE, mọi dịch vụ đều được thực hiện trong môi trường thân thiện, sạch sẽ và tiện nghi, nhằm tạo sự thoải mái và yên tâm cho khách hàng khi đến với chúng tôi.
        </p>

        <h3>Đội ngũ bác sĩ – Chìa khóa cho sự thành công</h3>
        <p>
          DENTAL CARE hiểu rằng, sự phát triển và thành công phải xuất phát từ hiệu quả điều trị, sự hài lòng của khách hàng. Do đó, đội ngũ bác sĩ chất lượng chuyên môn cao, đào tạo chuyên sâu theo phân khoa luôn được chú trọng phát triển số 1 tại DENTAL CARE.
        </p>
        <p>
          Bác sĩ tại DENTAL CARE không chỉ được đào tạo chính quy khoa Răng – Hàm – Mặt mà còn thường xuyên tham gia các hội thảo khoa học, các khóa học nâng cao chuyên môn để không ngừng cập nhật kiến thức và công nghệ mới để áp dụng vào điều trị.
        </p>
        <a href="#"><img src="img/doctor/doctor1.png" alt="Doctor" className="Doctor" /></a>
        <h4>Chuyên khoa Chỉnh nha:</h4>
        <p>
          Chuyên khoa chỉnh nha tại DENTAL CARE do Bác sĩ Chuyên khoa I Nguyễn Thị Hường phụ trách chuyên môn. Là một bác sĩ chỉnh nha, Bác sĩ Hường luôn tuân thủ các nguyên tắc về khớp cắn và thẩm mỹ nụ cười.
        </p>
        <p>
          Đội ngũ bác sĩ chuyên khoa chỉnh nha chuyên sâu với nhiều năm kinh nghiệm.
        </p>
        <a href="#"><img src="img/doctor/doctor2.png" alt="Doctor" className="Doctor" /></a>
        <h4>Hệ thống chứng chỉ các bác sĩ đang công tác tại DENTAL CARE:</h4>
        <ul>
          <li>Tốt nghiệp Khoa Răng – Hàm – Mặt – Đại học Y Hà Nội</li>
          <li>Bác sĩ Chuyên khoa I – Đại học Y Hà Nội</li>
          <li>Chứng chỉ ứng công nghệ GEAW vào niềng răng bởi Giáo sư Dr.Akiyoshi Shirasu</li>
          <li>Chứng chỉ chuyên sâu điều trị cắn hở hiệu quả và ổn định – GS.Tae-Woo Kim – Đại học Seoul</li>
          <li>Chứng chỉ Thực hành mắc cài mặt lưỡi đa rãnh – Viện trưởng viện đào tạo Răng – Hàm – Mặt chứng nhận.</li>
          <li>Chứng chỉ điều trị sai khớp cắn hạng II và III với kỹ thuật Meaw – Dr. Nelson Oppermann – University of Illinois at Chicago United States.</li>
          <li>Chứng chỉ kiểm soát răng đơn – tổng thể và mô mềm với TADS – Prof. Kee Joon Lee – Department Of Orthodontics Yonsei University, Seoul, Korea.</li>
          <li>Chứng chỉ khóa học Chỉnh nha hiệu quả – Từ kế hoạch đến kết quả by Moe Razavi – Assistant Clinical Professor Case Western Reserve University, USA.</li>
          <li>Chứng chỉ và account riêng do Invisalign – Niềng khay trong suốt cấp.</li>
        </ul>
        <a href="#"><img src="img/doctor/doctor3.png" alt="Doctor" className="Doctor" /></a>
        <p>
          Các khách hàng khi đến khám tư vấn dù sử dụng dịch vụ hay không cũng đều được bác sĩ gửi kế hoạch điều trị chi tiết để biết rõ vấn đề mình gặp phải và phương pháp điều trị.
        </p>
        <p>
          Đến với DENTAL CARE, bạn sẽ được bác sĩ chuyên khoa khám tư vấn và tiến hành điều trị với kết quả tốt nhất. Mọi kế hoạch và chi phí sẽ được thông báo chi tiết và rõ ràng trong kế hoạch điều trị trước khi khách hàng đồng ý tiếp nhận.
        </p>
      </section>
    </main>
  );
}
export default MainContent;
