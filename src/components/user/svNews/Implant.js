import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Sidebar from '../sidebar';
import '../../../assets/css/svNews.css'; // Nhớ import file CSS mới tạo

function Implant() {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="main-content">
            <h4>Cấy Ghép Implant Là Gì?</h4>
            <p>Cấy ghép Implant (hay cắm Implant) là phương pháp dùng một trụ chân răng nhân tạo bằng Titanium đặt vào trong xương hàm tại vị trí răng đã mất. Trụ chân răng này sẽ thay thế chân răng thật, sau đó dùng răng sứ gắn lên trụ răng Implant tạo thành răng hoàn chỉnh. Đến thời điểm hiện tại, cấy implant vẫn là phương pháp phục hồi răng mất hiện đại mang lại hiệu quả cao nhất hiện nay. Không chỉ khôi phục vẻ ngoài tự tin, implant còn giúp người bệnh khôi phục khả năng ăn nhai và ngăn ngừa các bệnh lý về răng miệng, tiêu xương vô cùng hiệu quả.</p>    
            <img src="img/svNews/implant.jpg" alt="Bọc 18 răng sứ Lava Plus màu trắng trong" />
            <div className="caption">Cấy ghép implant là phương pháp phục hồi răng mất an toàn, hiệu quả nhất hiện nay</div>
            <div>
                <h4>Lợi Ích Của Cấy Ghép Implant</h4>
                <p>
                    Cấy implant mang đến rất nhiều lợi ích, bao gồm:
                </p>
                <ul>
                    <li><strong>Tính thẩm mỹ cao:</strong> So với các phương pháp trồng răng giả khác, cấy implant mang đến tính thẩm mỹ cao với kích thước, hình dáng và màu sắc tương đồng như răng thật.</li>
                    <li><strong>Khả năng ăn nhai cao:</strong> Thông qua việc sử dụng trụ implant thay cho phần chân răng đã mất, phương pháp này mang lại khả năng ăn nhai giống như răng thật.</li>
                    <li><strong>Ngăn ngừa tiêu xương:</strong> Cấy implant giúp khôi phục phần chân răng đã mất bằng trụ titan, ngăn ngừa tiêu xương và các bệnh lý răng miệng khác như tụt nướu, chạy răng, hôi miệng...</li>
                    <li><strong>Tuổi thọ cao:</strong> Trụ implant có tuổi thọ trung bình từ 20 – 30 năm, và nếu sử dụng đúng cách, có thể kéo dài suốt đời.</li>
                </ul>
            </div>
            <div className="cosmetic-dental-procedure">
            <h4>Khi Nào Nên Và Không Nên Cấy Ghép Implant?</h4>
            <p><strong>Khi Nào Nên Cấy Ghép Implant:</strong></p>
            <ul>
                <li>Mất 1 hoặc nhiều răng nhưng không muốn can thiệp bằng phương pháp bọc răng sứ.</li>
                <li>Trường hợp mất răng nhưng các chân răng bên cạnh không đủ khỏe để làm trụ cầu.</li>
                <li>Trường hợp mất răng nhiều hoặc toàn hàm, cần can thiệp bằng implant nhằm hạn chế tiêu xương hàm.</li>
            </ul>
            
            <p><strong>Khi Nào Không Nên Cấy Ghép Implant:</strong></p>
            <ul>
                <li>Những người có bệnh lý về tiểu đường, tim mạch, huyết áp,…</li>
                <li>Phụ nữ đang mang thai.</li>
                <li>Những người có bệnh lý về răng miệng gây viêm và ảnh hưởng đến vị trí đặt implant.</li>
                <li>Trường hợp người bệnh đã từng xạ trị xương hàm.</li>
            </ul>
            <img src="img/svNews/cay-ghep-implant.jpg"  />
            <div className="caption">Implant được sử dụng cho các trường hợp mất 1 hoặc nhiều răng</div>
            <div className="implant-methods">
            <h4>Các Phương Pháp Cấy Ghép Implant</h4>
            <p>Có 4 phương pháp cấy ghép implant chính là implant đơn lẻ, implant toàn hàm và cầu răng sứ trên implant. Tùy vào tình trạng răng miệng và số lượng răng mất mà bác sĩ sẽ chỉ định phương pháp phù hợp.</p>
            
            <h5>Trụ Implant Đơn Lẻ</h5>
            <p>Đối với trường hợp khách hàng bị mất một hoặc mất nhiều răng (nhưng các răng mất không liền kề nhau) có thể thực hiện phương pháp cấy ghép Implant đơn lẻ tại từng vị trí răng đã mất.</p>
            <img src="img/svNews/cay-ghep-implant-don-le.jpg" alt="Cấy ghép implant đơn lẻ" />
            <div className="caption"> Cấy ghép implant đơn lẻ được sử dụng cho trường hợp mất 1 hoặc nhiều răng không liền kề nhau.</div>

            <h5>Cầu Răng Sứ Trên Implant</h5>
            <p>Đối với trường hợp khách hàng bị mất 3 răng liên tiếp, bác sĩ sẽ tiến hành cắm Implant ở 2 vị trí mất răng ngoài cùng, sau đó bọc mão sứ bắc cầu cho cả 3 răng. Lúc này, 2 răng được trồng bằng trụ Implant sẽ là 2 răng đỡ cho cả dãy 3 răng bị mất.</p>
            <img src="img/svNews/cau-rang-su-tren-implant.jpg" alt="Cầu răng sứ trên Implant" />
            <div className="caption"> Cầu răng sứ trên Implant được chỉ định cho trường hợp khách hàng bị mất 3 răng liên tiếp.</div>

            <h5>Cấy Ghép Implant Toàn Hàm (Thực Hiện Tại Bệnh Viện)</h5>
            <p>Trồng răng bằng cấy ghép Implant toàn hàm là giải pháp phục hồi răng toàn diện, đem lại trải nghiệm chân thật cho khách hàng mất răng toàn bộ nhưng vẫn muốn có được hàm răng trắng sáng, ăn nhai tự nhiên.</p>
            <img src="img/svNews/cay-ghep-implant-toan-ham.jpg" alt="Cấy ghép implant toàn hàm" />
            <div className="caption"> Implant toàn hàm đảm bảo tính thẩm mỹ và chức năng ăn nhai như răng thật.</div>

            <div >
                <h4>Quy Trình Cấy Ghép Implant Chuẩn Y Khoa</h4>
                <p>Các bước thực hiện cấy Implant cần được thực hiện một cách an toàn, khoa học nhằm hạn chế tối đa biến chứng, không gây đau nhức, ê buốt răng trong và sau khi hoàn thiện.</p>

                <h6>Bước 1: Đánh Giá và Lập Kế Hoạch</h6>
                <p>Bước đầu tiên là thăm khám và đánh giá tình trạng răng miệng của bệnh nhân. Nha sĩ sẽ sử dụng X-quang hoặc CT scan để xác định vị trí cấy ghép và đảm bảo rằng có đủ xương hỗ trợ implant, lấy dấu bằng kỹ thuật số Scan, làm máng 3D và xét nghiệm tổng quát đảm bảo sức khỏe cho thủ thuật cấy ghép Implant.</p>

                <h6>Bước 2: Gây Tê và Chuẩn Bị Vị Trí Cấy Ghép Implant</h6>
                <p>Implant, thường làm từ titanium, được đặt vào xương hàm. Một số trường hợp có thể cần thêm xương ghép để đảm bảo implant ổn định. Cắm trụ Implant (làm phục hình tạm ngay nếu cần).</p>

                <h6>Bước 3: Tái Khám Lành Thương</h6>
                <p>Tái khám sau 1 – 2 tuần kể từ ngày cắm Implant.</p>

                <h6>Bước 4: Thời Gian Lành Thương và Đặt Abutment</h6>
                <p>Khám sau 4 tuần từ ngày cắm Implant, lấy dấu bằng công nghệ số Scan làm răng sứ sau 4 tuần – 6 tháng (tùy loại dịch vụ implant, thường sau 4 tuần từ ngày cắm).</p>

                <h6>Bước 5: Lắp Mão Răng</h6>
                <p>Cuối cùng, mão răng giả được làm theo kích thước và hình dáng phù hợp với răng thật của bệnh nhân sẽ được lắp đặt lên trên abutment. Gắn sứ sau lấy dấu kỹ thuật số, hiện nay nhanh chóng chỉ trong 24h – 72h (thường là 24h).</p>

                <h6>Bước 6: Theo Dõi và Chăm Sóc Sau Cấy Ghép</h6>
                <p>Bệnh nhân sẽ cần thăm nha sĩ định kỳ 6 tháng để kiểm tra và chăm sóc implant cũng như vệ sinh răng miệng đúng cách.</p>

                <h6>Công Nghệ Cấy Ghép Implant Safest</h6>
                <p>Hiện tại, Nha Khoa Kim cấy ghép răng bằng công nghệ Safest với nhiều ưu điểm vượt trội:</p>
                <ul>
                    <li><strong>Safest</strong> là viết tắt của <strong>Safe</strong> (an toàn) – <strong>Aesthetic</strong> (thẩm mỹ) – <strong>Fast</strong> (nhanh chóng) – <strong>Exact</strong> (chính xác) – <strong>Saving</strong> (tiết kiệm) – <strong>Technology</strong> (công nghệ). Đây là công nghệ mới trong cấy ghép Implant được Nha Khoa Kim ứng dụng đồng bộ trên toàn hệ thống nhằm mang đến cho khách hàng trải nghiệm nhẹ nhàng, thoải mái khi điều trị với những đặc điểm:</li>
                    <li>Cấy ghép Implant 100% bằng máng định vị in 3D, thời gian thực hiện nhanh chóng, chỉ 5 – 15 phút 1 trụ Implant hoặc sử dụng Robot X-Guide công nghệ hàng đầu thế giới cấy ghép implant với độ chính xác lên đến 0,1mm.</li>
                    <li>Hạn chế xâm lấn tối đa. Trường hợp mô nướu khách hàng thuận lợi thì bác sĩ sẽ không cần dùng dao, không rạch nướu (lợi) nên gần như không chảy máu, không đau, lành thương nhanh sau thực hiện.</li>
                    <li>Với phần mềm kỹ thuật số R2Gate dựa trên dữ liệu chi tiết từ chụp X-quang Conebeam CT 3D và máy scan trong miệng 3D Trios, iTero, bác sĩ sẽ lên mô phỏng, tính toán kỹ lưỡng cắm Implant chính xác tuyệt đối và khách hàng sẽ thấy được kết quả trước khi điều trị nên không còn cảm thấy lo lắng.</li>
                </ul>
                <img src="img/svNews/Robot-xGuide.jpg"  />
                <div className="caption"> Quy trình cấy ghép Implant chuẩn y khoa tại Nha Khoa Kim</div>
            </div>
        </div>
        </div>    
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Implant;
