import React, {useEffect} from 'react';
import AdminHeader from './header';
import Sidebar from './sidebar';
import AdminFooter from './footer';
import AppointmentList from './AppointmentList';
import DoctorList from './DoctorList';
import PatientList from './PatientList';
import MedicalRecordList from './MedicalRecordList';
import SpecialtyList from './SpecialtyList';
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./Dashboard";
import useUserStore from "../../store/userStore";
import axios from "axios";

const Admin = () => {
    const { setUser } = useUserStore();

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
            try {
                const response = await axios.get('http://localhost:8080/me', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log('User data:', response.data);
                setUser(response.data);
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    window.location.href = '/';
                } else {
                    console.error('Failed to fetch user data', error);
                }
            }
        };

        fetchUserData();

        return () => {
            // Cleanup logic if needed
        };
    }, [setUser]);

    return (
        <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
            <AdminHeader />
            <div className="d-flex">
                <Sidebar />
                <div className="flex-grow-1 p-3" style={{ backgroundColor: '#f0f2f5' }}>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="appointments" element={<AppointmentList />} />
                        <Route path="doctors" element={<DoctorList />} />
                        <Route path="patients" element={<PatientList />} />
                        <Route path="specialties" element={<SpecialtyList />} /> {/* Add this route */}
                        <Route path="medical-records" element={<MedicalRecordList />} />
                    </Routes>
                </div>
            </div>
            <AdminFooter />
        </div>
    );
};

export default Admin;