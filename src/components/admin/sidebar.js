import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import '../../assets/css/admin/sidebar.css';

const Sidebar = () => {
    const location = useLocation();

    return (
        <div className="sidebar">
            <Nav defaultActiveKey="#dashboard" className="flex-column">
                <Nav.Link as={Link} to="/admin" className={`nav-link ${location.pathname === '/admin' ? 'active' : ''}`}>Quản trị</Nav.Link>
                <Nav.Link as={Link} to="/admin/patients" className={`nav-link ${location.pathname === '/admin/patients' ? 'active' : ''}`}>Quản lý bệnh nhân</Nav.Link>
                <Nav.Link as={Link} to="/admin/doctors" className={`nav-link ${location.pathname === '/admin/doctors' ? 'active' : ''}`}>Quản lý bác sĩ</Nav.Link>
                <Nav.Link as={Link} to="/admin/appointments" className={`nav-link ${location.pathname === '/admin/appointments' ? 'active' : ''}`}>Quản lý đặt lịch</Nav.Link>
                <Nav.Link as={Link} to="/admin/specialties" className={`nav-link ${location.pathname === '/admin/specialties' ? 'active' : ''}`}>Quản lý dịch vụ</Nav.Link> {/* Add this link */}
                <Nav.Link as={Link} to="/admin/medical-records" className={`nav-link ${location.pathname === '/admin/medical-records' ? 'active' : ''}`}>Quản lý bệnh án</Nav.Link>
            </Nav>
        </div>
    );
};

export default Sidebar;