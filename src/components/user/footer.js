import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/footer.css';

function Footer() {
    useEffect(() => {
        const script = document.createElement('script');
        //script.src = 'https://cdn.fchat.vn/assets/embed/webchat.js?id=66f6418bb8486d35ca68dfc2';
        script.async = true;

        script.onload = () => {
            console.log('Script loaded successfully.');
        };

        script.onerror = () => {
            console.error('Error loading script.');
        };

        if (!customElements.get('chat-widget')) {
            document.body.appendChild(script);
        } else {
            console.log('chat-widget is already defined.');
        }

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <footer >
            <div className="container-fluid p-4" >
                <div className="row">
                    {/* Cột Nội dung Footer */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h5 className="mb-3" ><i className="fas fa-gem me-3"></i>Nha khoa Dental Care</h5>
                        <p>
                            Chúng tôi cung cấp các dịch vụ nha khoa chất lượng cao để bảo vệ nụ cười của bạn.
                            Hãy để chúng tôi chăm sóc sức khỏe răng miệng của bạn.
                        </p>
                    </div>
                    {/* Cột Dịch Vụ */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h5 className="text-uppercase fw-bold mb-4">Dịch vụ</h5>
                        <div className="row">
                            <div className="col-6">
                                <p><a href="/RangSu" className="text-reset">Bọc răng sứ</a></p>
                                <p><a href="/Implant" className="text-reset">Cấy ghép Implant</a></p>
                                <p><a href="/NiengRang" className="text-reset">Niềng Răng Thẩm mỹ</a></p>
                                <p><a href="/MatDanSuVeneer" className="text-reset">Mặt Dán Sứ Veneer</a></p>
                                <p><a href="/TayTrangRang" className="text-reset">Tẩy Trắng Răng</a></p>
                            </div>
                            <div className="col-6">
                                <p><a href="/NhoRangKhon" className="text-reset">Nhổ Răng Khôn</a></p>
                                <p><a href="/BenhLyNhaChu" className="text-reset">Bệnh Lý Nha Chu</a></p>
                                <p><a href="/DieuTriTuy" className="text-reset">Điều Trị Tủy</a></p>
                                <p><a href="/HanTramRang" className="text-reset">Hàn Trám Răng</a></p>
                                <p><a href="/ChamSocRangMieng" className="text-reset">Chăm Sóc Răng Miệng</a></p>
                            </div>
                        </div>
                    </div>
                    {/* Cột Opening Hours */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h5 className="mb-3">Opening Hours</h5>
                        <table className="table">
                            <tbody>
                                <tr><td>Mon - Fri:</td><td>8am - 9pm</td></tr>
                                <tr><td>Sat - Sun:</td><td>8am - 1am</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="text-center p-3" >
                © 2024 Copyright:
                <a >Nha khoa Dental Care</a>
            </div>
        </footer>
    );
}

export default Footer;
