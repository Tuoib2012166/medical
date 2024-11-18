import React from 'react';
import Header from './header';
import Footer from './footer';
import '../../assets/css/priceList.css';
import Sidebar from './sidebar';

function Pricelist() {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="main-content">
          {/* Nội dung bảng giá dịch vụ */}
          <section id="price-list">
        <h1>Bảng Giá Dịch Vụ Dán Sứ Veneer</h1>
        <table>
          <thead>
            <tr>
              <th>Thương Hiệu</th>
              <th>Xuất Xứ</th>
              <th>Bảo Hành</th>
              <th>Giá Niêm Yết/Răng</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>IPS Emax</td><td>Đức</td><td>10 năm</td><td>6.000.000</td></tr>
            <tr><td>Lisi</td><td>Mỹ</td><td>10 năm</td><td>7.000.000</td></tr>
            <tr><td>Celtra</td><td>Đức</td><td>10 năm</td><td>8.000.000</td></tr>
            <tr><td>Ceramoy Concept</td><td>Đức</td><td>10 năm</td><td>9.000.000</td></tr>
            <tr><td>IPS Emax Press</td><td>Đức</td><td>15 năm</td><td>8.000.000</td></tr>
            <tr><td>Lisi Press</td><td>Mỹ</td><td>15 năm</td><td>10.000.000</td></tr>
            <tr><td>Celtra Press</td><td>Đức</td><td>15 năm</td><td>12.000.000</td></tr>
            <tr><td>Ceramoy Concept Press</td><td>Đức</td><td>15 năm</td><td>14.000.000</td></tr>
          </tbody>
        </table>
        <p>Giá trên chưa bao gồm ưu đãi tốt nhất của tháng. Quý khách vui lòng liên hệ để nhận bảng giá ưu đãi chi tiết.</p>
      </section>

      {/* Bảng giá dịch vụ Bọc Răng Sứ */}
      <section id="price-list">
        <h1>Bảng giá dịch vụ Bọc Răng Sứ</h1>
        <table>
          <thead>
            <tr>
              <th>Thương Hiệu</th>
              <th>Xuất Xứ</th>
              <th>Bảo Hành</th>
              <th>Giá Răng</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Răng sứ Katana</td><td>Đức</td><td>3 năm</td><td>2.500.000</td></tr>
            <tr><td>Răng sứ Venus</td><td>Đức</td><td>3 năm</td><td>3.000.000</td></tr>
            <tr><td>Chốt sứ thạch anh</td><td>Đức</td><td>10 năm</td><td>1.500.000</td></tr>
            <tr><td>Chốt ziconia</td><td>Đức</td><td>10 năm</td><td>3.000.000</td></tr>
            <tr><td>Inlay/onlay Emax Press</td><td>Đức</td><td>10 năm</td><td>5.000.000</td></tr>
            <tr><td>Răng sứ Ziconia Full</td><td>Đức</td><td>10 năm</td><td>5.500.000</td></tr>
            <tr><td>Răng sứ Ceramill</td><td>Đức</td><td>10 năm</td><td>5.000.000</td></tr>
            <tr><td>Răng sứ Cercon</td><td>Đức</td><td>10 năm</td><td>8.500.000</td></tr>
            <tr><td>Răng sứ DD Bio</td><td>Đức</td><td>10 năm</td><td>6.000.000</td></tr>
            <tr><td>Răng sứ naera da lớp</td><td>Đức</td><td>10 năm</td><td>7.000.000</td></tr>
            <tr><td>Răng sứ HT Smile</td><td>Đức</td><td>7.000.000</td><td>7.000.000</td></tr>
            <tr><td>Răng sứ Lava Plus</td><td>Mỹ</td><td>15 năm</td><td>8.000.000</td></tr>
            <tr><td>Răng sứ Orodont High Translucent</td><td>Italia</td><td>19 năm</td><td>10.000.000</td></tr>
            <tr><td>Răng sứ Orodont Bleach</td><td>Italia</td><td>19 năm</td><td>12.000.000</td></tr>
            <tr><td>Răng sứ Ceramill - Vt</td><td>Đức</td><td>15 năm</td><td>8.500.000</td></tr>
            <tr><td>Răng sứ Emax - Ex</td><td>Đức</td><td>15 năm</td><td>9.500.000</td></tr>
            <tr><td>Răng sứ Emax - Cr</td><td>Đức</td><td>15 năm</td><td>9.500.000</td></tr>
            <tr><td>Răng sứ Naera da lớp - Nt</td><td>Đức</td><td>15 năm</td><td>10.500.000</td></tr>
            <tr><td>Răng sứ HT Smile - G</td><td>Đức</td><td>15 năm</td><td>10.500.000</td></tr>
            <tr><td>Răng sứ Orodont High Translucent - Tosoh</td><td>Italia</td><td>15 năm</td><td>13.000.000</td></tr>
            <tr><td>Răng sứ Orodont Bleach - Tosoh</td><td>Italia</td><td>15 năm</td><td>15.000.000</td></tr>
          </tbody>
        </table>
        <p>Giá trên chưa bao gồm ưu đãi tốt nhất của tháng. Quý khách vui lòng liên hệ để nhận bảng giá ưu đãi chi tiết.</p>

      <table>
  <thead>
    <tr>
      <th>DỊCH VỤ</th>
      <th>ĐVT</th>
      <th>GIÁ DỊCH VỤ VNĐ (Giá chưa bao gồm Thuế GTGT)</th>
      <th>Thuế GTGT</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Khám tổng quát</td>
      <td>Lần</td>
      <td>Miễn phí</td>
      <td>KCT</td>
    </tr>
    <tr>
      <td>Cạo vôi răng</td>
      <td>2 Hàm</td>
      <td>400.000</td>
      <td>KCT</td>
    </tr>
    <tr>
      <td>Điều trị viêm nha chu Cấp 1-2</td>
      <td>Răng</td>
      <td>300.000 – 1.000.000</td>
      <td>KCT</td>
    </tr>
    <tr>
      <td>Điều trị tủy</td>
      <td>Răng</td>
      <td>500.000 – 2.000.000</td>
      <td>KCT</td>
    </tr>
    <tr>
      <td>Điều trị tủy lại</td>
      <td>Răng</td>
      <td>2.000.000 – 3.000.000</td>
      <td>KCT</td>
    </tr>
    <tr>
      <td>Chốt sợi không kim loại mức 1-2</td>
      <td>Răng</td>
      <td>700.000 – 1.100.000</td>
      <td>KCT</td>
    </tr>
    <tr>
      <td>Trám răng sữa</td>
      <td>Răng</td>
      <td>200.000</td>
      <td>KCT</td>
    </tr>
    <tr>
      <td>Trám răng thẩm mỹ</td>
      <td>Răng</td>
      <td>500.000</td>
      <td>KCT</td>
    </tr>
    <tr>
      <td>Trám cổ răng</td>
      <td>Răng</td>
      <td>600.000</td>
      <td>KCT</td>
    </tr>
    <tr>
      <td>Nhổ răng sữa</td>
      <td>Răng</td>
      <td>100.000</td>
      <td>KCT</td>
    </tr>
    <tr>
      <td>Nhổ chân răng, răng lung lay</td>
      <td>Răng</td>
      <td>300.000</td>
      <td>KCT</td>
    </tr>
    <tr>
      <td>Nhổ răng cửa R1-2-3</td>
      <td>Răng</td>
      <td>500.000</td>
      <td>KCT</td>
    </tr>
    <tr>
      <td>Nhổ răng nhiều chân R4-5-6-7</td>
      <td>Răng</td>
      <td>800.000</td>
      <td>KCT</td>
    </tr>
    <tr>
      <td>Tiểu phẫu răng khôn – Mọc thẳng</td>
      <td>Răng</td>
      <td>1.000.000</td>
      <td>KCT</td>
    </tr>
    <tr>
      <td>Tiểu phẫu răng khôn – Khó độ I</td>
      <td>Răng</td>
      <td>1.800.000</td>
      <td>KCT</td>
    </tr>
    <tr>
      <td>Tiểu phẫu răng khôn – Khó độ II</td>
      <td>Răng</td>
      <td>2.500.000</td>
      <td>KCT</td>
    </tr>
    <tr>
      <td>Tiểu phẫu răng khôn – Khó độ III</td>
      <td>Răng</td>
      <td>3.500.000</td>
      <td>KCT</td>
    </tr>
    <tr>
      <td>Tiểu phẫu răng khôn – Khó độ IV</td>
      <td>Răng</td>
      <td>5.000.000</td>
      <td>KCT</td>
    </tr>
    <tr>
      <td>Thuốc tẩy trắng tại nhà</td>
      <td>1 Ống</td>
      <td>320.000</td>
      <td>8%</td>
    </tr>
    <tr>
      <td>Tẩy trắng răng tại nhà</td>
      <td>2 Hàm</td>
      <td>1.300.000</td>
      <td>8%</td>
    </tr>
    <tr>
      <td>Tẩy trắng răng tại phòng khám</td>
      <td>2 Hàm</td>
      <td>3.000.000</td>
      <td>8%</td>
    </tr>
    <tr>
      <td>Tẩy trắng răng tại phòng khám và tại nhà</td>
      <td>Liệu trình</td>
      <td>3.500.000</td>
      <td>8%</td>
    </tr>
    <tr>
      <td>Răng giả tháo lắp</td>
      <td>Răng</td>
      <td>400.000 – 1.000.000</td>
      <td>KCT</td>
    </tr>
    <tr>
      <td>Khung hàm tháo lắp</td>
      <td>1 Hàm</td>
      <td>5.000.000 – 6.000.000</td>
      <td>KCT</td>
    </tr>
    <tr>
      <td>Răng sứ kim loại Titan</td>
      <td>Răng</td>
      <td>3.000.000</td>
      <td>8%</td>
    </tr>
    <tr>
      <td>Răng toàn sứ Argen</td>
      <td>Răng</td>
      <td>6.000.000</td>
      <td>8%</td>
    </tr>
    <tr>
      <td>Răng toàn sứ Sage Shine</td>
      <td>Răng</td>
      <td>8.800.000</td>
      <td>8%</td>
    </tr>
    <tr>
      <td>Răng toàn sứ Bio Shine HT</td>
      <td>Răng</td>
      <td>10.500.000</td>
      <td>8%</td>
    </tr>
    <tr>
      <td>Dán sứ Viva Shine</td>
      <td>Răng</td>
      <td>8.800.000</td>
      <td>8%</td>
    </tr>
    <tr>
      <td>Dán sứ Viva Ultrathin</td>
      <td>Răng</td>
      <td>12.800.000</td>
      <td>8%</td>
    </tr>
    <tr>
      <td>Trụ Implant Biotem</td>
      <td>Trụ</td>
      <td>21.000.000</td>
      <td>KCT</td>
    </tr>
    <tr>
      <td>Trụ Implant Dio</td>
      <td>Trụ</td>
      <td>21.000.000</td>
      <td>KCT</td>
    </tr>
    <tr>
      <td>Trụ Implant Megagen Anyridge</td>
      <td>Trụ</td>
      <td>25.000.000</td>
      <td>KCT</td>
    </tr>
    <tr>
      <td>Trụ Implant Nobel Biocare</td>
      <td>Trụ</td>
      <td>35.000.000</td>
      <td>KCT</td>
    </tr>
    <tr>
      <td>Phẫu thuật ghép xương</td>
      <td>1 Bên</td>
      <td>10.000.000</td>
      <td>KCT</td>
    </tr>
    <tr>
      <td>Cấy ghép Implant thành công</td>
      <td>Răng</td>
      <td>15.000.000</td>
      <td>KCT</td>
    </tr>
    <tr>
      <td>Phục hình trên Implant</td>
      <td>Răng</td>
      <td>8.000.000</td>
      <td>KCT</td>
    </tr>
  </tbody>
</table>
<p>
  Lưu ý: Bảng giá có thể thay đổi theo thời gian, vui lòng liên hệ trực tiếp với Nha Khoa Kim để biết thông tin chi tiết và chính xác nhất.
</p>

      </section>
          
          {/* Thêm bảng giá dịch vụ khác */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Pricelist;
