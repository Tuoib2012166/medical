import { React, useEffect } from 'react';
import axios from 'axios';
import useUserStore from '../../store/userStore';
import DoctorHeader from './header';
import Sidebar from './sidebar';
import DoctorFooter from './footer';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../doctor/Dashboard';
import MedicalRecordList from '../doctor/MedicalRecordList';
import FollowUpAppointments from './FollowUpAppointments';
import AppointmentList from './AppointmentList';

const AdminPage = () => {
    const { setUser, user } = useUserStore();

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
            try {
                const response = await axios.get('http://localhost:8080/me', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(response.data);
                console.log('User data:', response.data);
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
            <DoctorHeader />
            <div className="d-flex">
                <Sidebar />
                <div className="flex-grow-1 p-3" style={{ backgroundColor: '#f0f2f5' }}>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="medical-records" element={<MedicalRecordList />} />
                        <Route path="appointments" element={<AppointmentList />} />
                        <Route path="follow-up-appointments" element={<FollowUpAppointments />} />
                    </Routes>
                </div>
            </div>
            <DoctorFooter />
        </div>
    );
};

export default AdminPage;