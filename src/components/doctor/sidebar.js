import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import '../../assets/css/admin/sidebar.css';

const Sidebar = () => {
    const location = useLocation();

    return (
        <div className="sidebar">
            <Nav defaultActiveKey="#dashboard" className="flex-column">
                <Nav.Link as={Link} to="/doctor" className={`nav-link ${location.pathname === '/doctor' ? 'active' : ''}`}>Quản trị</Nav.Link>
                <Nav.Link as={Link} to="/doctor/medical-records" className={`nav-link ${location.pathname === '/doctor/medical-records' ? 'active' : ''}`}>Quản lý bệnh án</Nav.Link>
                <Nav.Link as={Link} to="/doctor/appointments" className={`nav-link ${location.pathname === '/doctor/appointments' ? 'active' : ''}`}>Danh sách đặt lịch</Nav.Link>
                <Nav.Link as={Link} to="/doctor/follow-up-appointments" className={`nav-link ${location.pathname === '/doctor/follow-up-appointments' ? 'active' : ''}`}>Lịch tái khám</Nav.Link>
            </Nav>
        </div>
    );
};

export default Sidebar;