import React, { useState } from 'react';
import { Navbar, Nav, Button, Form } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../../store/userStore';
import '../../assets/css/admin/header.css'; // Đảm bảo đường dẫn đúng

const DoctorHeader = () => {
  const [showProfileForm, setShowProfileForm] = useState(false);
  const userProfile = useUserStore((state) => state.user.profile);
  const clearUser = useUserStore((state) => state.clearUser);
  const [, , removeCookie] = useCookies(['token']);
  const navigate = useNavigate();

  const handleRefresh = () => {
    window.location.reload(); // Làm mới trang
  };

  const toggleProfileForm = () => {
    setShowProfileForm(!showProfileForm); // Chuyển trạng thái hiển thị form
  };

  const handleLogout = () => {
    // Clear the cookie token using react-cookie
    removeCookie('token', { path: '/' });

    // Remove token from localStorage
    localStorage.removeItem('token');

    // Clear user state
    clearUser();

    // Redirect to home page
    navigate('/');
  };

  return (
      <Navbar expand="lg" className="header px-3">
        <Navbar.Brand href="#home">
          <img
              src="/img/logo.png" // Đường dẫn tới hình ảnh logo
              alt="Admin Dashboard Logo"
              style={{ height: '40px', width: 'auto' }} // Điều chỉnh kích thước hình ảnh nếu cần
          />
        </Navbar.Brand>
        <Nav className="d-flex align-items-center" style={{ marginLeft: 'auto' }}> {/* Sử dụng marginLeft: 'auto' để căn lề phải */}
          <Button variant="outline-light" className="me-2" onClick={handleRefresh}>
            <i className="bi bi-arrow-clockwise"></i> {/* Icon Refresh */}
          </Button>
          {userProfile ? (
              <>
              <Button variant="outline-light" onClick={toggleProfileForm}>
                <i className="bi bi-person-circle"></i> Hello, <span className="profile-name">{userProfile.fullname}</span>
            </Button>
              <Button variant="danger" onClick={handleLogout} className="ms-2">
                <i className="bi bi-box-arrow-right"></i> {/* Icon Logout */}
              </Button>
              </>
          ) : (
              <Button variant="outline-light" onClick={() => navigate('/login')}>
                Login
              </Button>
          )}
        </Nav>
      </Navbar>
  );
};

export default DoctorHeader;