import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'antd';
import '../../assets/css/sidebar.css';

const Sidebar = () => {
    const carouselRef = useRef(null);
    const [autoplayInterval, setAutoplayInterval] = useState(5000); 

    useEffect(() => {
        const interval = setInterval(() => {
            carouselRef.current.next();
        }, autoplayInterval);

        return () => {
            clearInterval(interval);
        };
    }, [autoplayInterval]);

    return (
        <div className="sidebar">
            <div className="sidebar-section">
                <h3>Bài Viết Dịch Vụ</h3>
                <ul>
                    <li><a href="/NiengRang" className="text-reset">Nắn răng </a></li>
                    <li><a href="/implant" className="text-reset">Cấy ghép Implant</a></li>
                    <li><a href="/rangsu" className="text-reset">Bọc răng sứ</a></li>
                    <li><a href="/MatDanSuVeneer" className="text-reset">Dán sứ veneer</a></li>
                    <li><a href="taytrangrang" className="text-reset">Tẩy trắng răng</a></li>
                    <li><a href="/NhoRangKhon" className="text-reset">Nhổ răng khôn</a></li>
                    <li><a href="/BenhLyNhaChu" className="text-reset">Bệnh Lý Nha Chu</a></li>
                    <li><a href="/DieuTriTuy" className="text-reset">Điều Trị Tủy</a></li>
                    <li><a href="/HanTramRang" className="text-reset">Hàn Trám Răng</a></li>
                    <li><a href="/ChamSocRangMieng" className="text-reset">Chăm Sóc Răng Miệng Cho Phụ Nũ Mang Thai</a></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3>Đội Ngũ Bác Sĩ</h3>
                <img src="img/sidebar/doctor-sb.png" alt="Đội ngũ bác sĩ" className="sidebar-image" />
            </div>
            <div className="sidebar-section">
                <h3>Thông Tin Ưu Đãi</h3>
                <Carousel
                    ref={carouselRef}
                    autoplay={false}
                    dotPosition="bottom"
                    effect="fade"
                    speed={1500}
                >
                    <div>
                        <img src="./img/sidebar/sale1.jpg" alt="banner cua trang chu" style={{ width: "100%", height: "100%" }} />
                    </div>
                    <div>
                        <img src="./img/sidebar/sale2.jpg" alt="banner cua trang chu" style={{ width: "100%", height: "100%" }} />
                    </div>
                    <div>
                        <img src='./img/sidebar/sale3.jpg' alt="banner cua trang chu" style={{ width: "100%", height: "100%" }} />
                    </div>
                </Carousel>
            </div>
            <div className="sidebar-section">
                <h3>kiến thức nha khoa</h3>
                <ul>
                    <li><a href="/news" className="text-reset">Kiến thức niềng răng</a></li>
                    <li><a href="/newsImplant" className="text-reset">Kiến thức cấy ghép implant</a></li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3>Hệ Thống Chi Nhánh</h3>
                <ul className="branch-info">
                    <li>Hà Nội: Xuân Khánh, Ninh Kiều, Cần Thơ</li>
                </ul>
                <div className="contact-info">
                    <p>Hotline 24/7: 0123456789</p>
                    <p>Đăng ký: 0123456789</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
