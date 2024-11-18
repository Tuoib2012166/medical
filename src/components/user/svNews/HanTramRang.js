import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Sidebar from '../sidebar';
import '../../../assets/css/svNews.css'; // Nhớ import file CSS mới tạo

function HanTramRang() {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="main-content">
             <h4>Hàn Trám Răng Là Gì?</h4>
            <p>Hàn trám răng là kỹ thuật mà bác sĩ sẽ sử dụng vật liệu trám bít để khôi phục lại hình dáng và chức năng của răng. Phương pháp này được sử dụng phổ biến trong nha khoa bởi mang lại ý nghĩa cả về thẩm mỹ lẫn điều trị và phòng ngừa bệnh lý răng miệng.</p>

            <h6>Các Trường Hợp Nên Trám Răng?</h6>
            <p>Kỹ thuật này thường được chỉ định và mang lại hiệu quả cao trong các trường hợp răng có khuyết điểm.</p>
            <ul>
                <li>Răng bị sâu</li>
                <li>Răng bị thương tổn chưa phạm đến tủy</li>
                <li>Răng bị sứt mẻ, thương tổn do viêm tủy</li>
                <li>Răng bị mòn men, đen chân răng</li>
                <li>Răng thưa ở mức độ vừa phải, khoảng cách giữa các răng không quá lớn</li>
                <li>Muốn khắc phục tình trạng răng gãy, mẻ mà không phải mài răng bọc sứ</li>
            </ul>
            <img src="img/svNews/han.png"  />
          <div className="caption">Hàn trám răng là phương pháp giúp phục hồi khiếm khuyết răng hiệu quả</div>
            <h4>Tại Sao Phục Hình Với Trám Răng Được Ưa Thích?</h4>
            <h5>Đa dạng hình thức: </h5>
            <p>Hàn trám răng có nhiều phương pháp trám khác nhau để giúp phục hình hiệu quả cho răng đó là trám trực tiếp và trám răng gián tiếp Inlay/Onlay. Tùy vào tình trạng răng và mục đích hàn trám mà bác sĩ sẽ tư vấn cho bạn phương pháp, chất liệu hiệu quả và phù hợp nhất.</p>
            <p>+ Hàn Trám Răng Điều Trị: Giúp phục hồi và điều trị trong trường hợp răng bị sâu, chấn thương gây mẻ, vỡ, răng bị mòn men…</p>
            <p>+ Hàn Trám Răng Phòng Ngừa: Sử dụng vật liệu trám mỏng phủ lên răng để phòng tránh các bệnh lý răng miệng hoặc tác hại từ axit, thực phẩm…</p>
            <p>+ Hàn Trám Răng Phòng Ngừa: Sử dụng khi muốn che đi một số khuyết điểm, chỉnh hình và giúp răng đều đẹp hơn.</p>
            <h5>Đa Dạng Các Vật Liệu</h5>
            <h6>Vật Liệu Hàn Trám Amalgam:</h6>
            <p>Amalgam là chất liệu hàn trám truyền thống (hỗn hợp gồm bạc, thiếc, kẽm, đồng và thủy ngân), thường có màu bạc. Chất liệu này khá bền chắc nhưng thẩm mỹ không cao nên thường sử dụng khi hàn trám các răng bên trong, phổ biến nhất là răng hàm.</p>
            <img src="img/svNews/han2.png"  />
          <div className="caption">Hàn trám răng bằng Amalgam khá bền chắc nhưng thẩm mỹ không cao</div>
            <h6>Trám Răng Với Kim Loại Quý:</h6>
            <p>Chất liệu kim loại thông thường là: vàng, bạc, đồng. Về độ bền chắc thì kim loại quý cứng hơn cả amalgam nên đảm bảo ăn nhai tốt. Chất liệu này cũng thường được sử dụng trong hàn trám các răng ăn nhai.</p>
            <img src="img/svNews/han3.png"  />
          <div className="caption">Trám răng bằng Composite có sắc trắng tương đồng răng thật</div>
            <h6>Vật Liệu Trám Răng Composite:</h6>
            <p>Composite là vật liệu hàn trám được đánh giá cao về màu sắc và có độ khít sát cao với răng, và đang được sử dụng nhiều và phổ biến nhất. Chất liệu này thường được sử dụng hàn trám cho những chiếc răng yêu cầu cao về thẩm mỹ.</p>
             <img src="img/svNews/han4.png"  />
          <div className="caption">Sử dụng vật liệu sứ Inlay/Onlay có độ bám dính tốt, độ bền cao</div>
            <h6>Sử Dụng Vật Liệu Sứ Inlay/Onlay:</h6>
            <p>Là một kỹ thuật phổ biến hiện nay có màu sắc gần giống răng tự nhiên, phù hợp với những trường hợp răng bị sứt mẻ lớn. Phương pháp này sử dụng công nghệ CAD/CAM chế tác theo tình trạng răng nên bám dính tốt, độ bền cao.</p>

            <h6>Hàn Trám Răng Có Đau Không?</h6>
            <p>Hàm trám răng có đau không sẽ tùy thuộc vào tình trạng răng của khách hàng. Trường hợp răng thưa, hở hoặc sứt mẻ nhỏ thì bác sĩ chỉ thực hiện làm sạch vùng răng cần điều trị rồi đắp vật liệu trám lên là kết thúc. Thời gian thực hiện rất nhanh chóng và hoàn toàn không đau.</p>

            <p>Trong trường hợp răng sâu nặng, mẻ lớn ảnh hưởng đến tủy thì bác sĩ sẽ tiến hành điều trị tủy trước rồi mới thực hiện hàn trám. Khi điều trị tủy, khách hàng sẽ có cảm giác hơi ê buốt. Tuy nhiên, trước đó bác sĩ đã tiêm thuốc tê nên cảm giác đau sẽ không quá khó chịu.</p>

            <p>Ngoài ra, trên thực tế, trám răng có đau hay không còn tùy thuộc vào tay nghề của bác sĩ và công nghệ điều trị tại nha khoa. Vì vậy, bạn cần lựa chọn nha khoa uy tín, quy tụ đội ngũ bác sĩ chuyên môn và đầu tư máy móc hiện đại để thực hiện.</p>

            <h6>Quy Trình Hàn Trám Răng Chất Lượng Cao Tại Dental Care</h6>
            <h6>Bước 1: Kiểm Tra Tình Trạng Răng Và Tư Vấn Cụ Thể</h6>
            <p>Khách hàng sẽ được kiểm tra cụ thể, xác định khuyết điểm răng đang gặp phải và mức độ cụ thể, từ đó cho tư vấn phù hợp nhất. Bạn cũng sẽ được giải đáp về phương pháp hàn trám răng, các thắc mắc có liên quan để yên tâm khi lựa chọn dịch vụ. Đồng thời đưa ra bảng giá trám răng Dental Care công khai.</p>

            <h6>Bước 2: Vệ Sinh Răng Miệng Sạch Sẽ</h6>
            <p>Vệ sinh răng miệng là bước bắt buộc khi muốn hàn trám răng hiệu quả cao. Các bác sĩ sẽ tiến hành súc miệng và vệ sinh sạch sẽ răng cũng như khoang miệng cho bạn. Nếu bị sâu răng hay bệnh lý nha chu, bác sĩ cũng có biện pháp xử lý trước khi chính thức thực hiện, tránh tình trạng nhiễm trùng hay lây lan bệnh lý răng miệng.</p>

            <h6>Bước 3: Thực Hiện Hàn Trám Răng</h6>
            <p>Bác sĩ sẽ làm sạch vị trí hàn trám và xử lý bề mặt răng bằng dung dịch làm tăng độ bám dính giữa răng với vật liệu trám. Sau đó, sẽ thực hiện trám và sử dụng đèn chiếu để hoàn tất.</p>

            <h6>Bước 4: Hướng Dẫn Chăm Sóc Răng Miệng Sau Khi Hàn Trám Răng</h6>
            <p>Hoàn tất quá trình, khách hàng sẽ được bác sĩ dặn dò chu đáo về cách chăm sóc, vệ sinh răng miệng cũng chế độ ăn uống để duy trì kết quả lâu dài nhất.</p>

            <h6>Hàn Trám Răng Tại Dental Care Đẹp, Bền</h6>
            <img src="img/svNews/han5.png"  />
          <div className="caption">Hình ảnh răng khách hàng trước và sau khi hàn trám răng</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HanTramRang;
