import React, {useEffect, useRef, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import useUserStore from '../../store/userStore';
import '../../assets/css/header.css';
import axios from "axios";
import Swal from 'sweetalert2';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isUserLoggedIn = useUserStore((state) => state.isUserLoggedIn());
  const userProfile = useUserStore((state) => state.user.profile);
  const clearUser = useUserStore((state) => state.clearUser);
  const navigate = useNavigate();
  const [, , removeCookie] = useCookies(['token']);

  const setUser = useUserStore((state) => state.setUser);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8080/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

       
        if (response.data.user.role == 'admin') {
          navigate('/admin')
        }
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (isFirstRender.current) {
      fetchUserData();
      isFirstRender.current = false;
    }
  }, []);

  const handleLogout = () => {
    removeCookie('token', { path: '/' });
    localStorage.removeItem('token');
    clearUser();
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Hàm hiển thị thông báo khi chưa đăng nhập
  const showLoginPrompt = () => {
    Swal.fire({
      title: 'Bạn chưa đăng nhập',
      text: 'Bạn cần đăng nhập để đặt lịch khám. Vui lòng đăng nhập hoặc đăng ký',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Đăng nhập',
      cancelButtonText: 'Đăng ký',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login'); // Chuyển hướng đến trang đăng nhập
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        navigate('/register'); // Chuyển hướng đến trang đăng ký
      }
    });
  };

  return (
      <header>
        <div className="logo">
          <Link to="/">
            <img src="img/logo.png" alt="Phòng Khám Nha Khoa Logo" />
          </Link>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
        <nav className={`main-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li className="dropdown">
              <a href="#">Xem dịch vụ và bảng giá &#9662;</a>
              <ul className="dropdown-content">
                <li><Link to="/service">Dịch vụ</Link></li>
                <li><Link to="/priceList">Bảng giá</Link></li>
              </ul>
            </li>
            <li>
              <a href="/doctorList">Thông tin bác sĩ</a>
            </li>
            <li className="dropdown">
              <a href="#">Kiến thức nha khoa &#9662;</a>
              <ul className="dropdown-content">
                <li><Link to="/news">Kiến thức niềng răng</Link></li>
                <li><Link to="/newsImplant">Kiến thức cấy ghép Implant</Link></li>
              </ul>
            </li>
            <li>
              <a href="/AppointmentForm" onClick={(e) => {
                if (!isUserLoggedIn) {
                  e.preventDefault();
                  showLoginPrompt();
                }
              }}>Đặt lịch khám</a>
            </li>
            {
                isUserLoggedIn &&
                <li className="dropdown">
                  <a href="#">Xin chào, {userProfile.fullname}</a>
                  <ul className="dropdown-content">
                    <li><Link to="/appointments">Danh sách đặt lịch</Link></li>
                    <li><a href="#" id="logout_btn_idx" onClick={handleLogout}>Đăng xuất</a></li>
                  </ul>
                </li>
            }
            {!isUserLoggedIn && <li><Link to="/login">Đăng nhập</Link></li>}
            {!isUserLoggedIn && <li><Link to="/register">Đăng ký</Link></li>}
          </ul>
        </nav>
      </header>
  );
}

export default Header;
