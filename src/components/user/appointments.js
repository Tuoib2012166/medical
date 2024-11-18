import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Header from './header';
import Footer from './footer';
import '../../assets/css/priceList.css';
import Sidebar from './sidebar';
import useUserStore from '../../store/userStore';

function Appointments() {
    const [appointments, setAppointments] = useState([]);
    const [filteredFollowUpAppointments, setFilteredFollowUpAppointments] = useState([]);
    const [medicalRecords, setMedicalRecords] = useState([]);  // Thêm state để lưu trữ bệnh án
    const { user, setUser } = useUserStore();

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:8080/me', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setUser(response.data);
            console.log('User data:', response.data);
        };

        fetchUserData();
    }, [setUser]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get('http://localhost:8080/appointments');
                const followUpResponse = await axios.get('http://localhost:8080/follow-up-appointments');
                console.log('Appointments:', response.data);
                console.log('Follow-up Appointments:', followUpResponse.data);
                const filteredAppointments = response.data.filter(appointment => appointment.user_id == user.profile.id);
                const filteredFollowUpAppointments = followUpResponse.data.filter(appointment => appointment.patient_id == user.profile.id);
                setAppointments(filteredAppointments);
                setFilteredFollowUpAppointments(filteredFollowUpAppointments);
                
                // Fetch dữ liệu bệnh án của bệnh nhân hiện tại (dựa trên user.profile.id)
                const medicalResponse = await axios.get(`http://localhost:8080/medical-records?patient_id=${user.profile.id}`);
                setMedicalRecords(medicalResponse.data);

            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };

        if (user && user.profile) {
            fetchAppointments();
        }
    }, [user]);

    return (
        <div>
            <Header />
            <section id="price-list">
                <h1>Danh Sách Đặt Lịch</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Họ và tên</th>
                        <th>Số điện thoại</th>
                        <th>Địa chỉ</th>
                        <th>Giới tính</th>
                        <th>Năm sinh</th>
                        <th>Ngày hẹn</th>
                        <th>Giờ hẹn</th>
                        <th>Bác sĩ</th>
                        <th>Dịch vụ</th>
                        <th>Nội dung</th>
                        <th>Trạng thái</th>
                        <th>Ngày tạo</th>
                    </tr>
                    </thead>
                    <tbody>
                    {appointments.map(appointment => (
                        <tr key={appointment.id}>
                            <td>{appointment.fullname}</td>
                            <td>{appointment.phone}</td>
                            <td>{appointment.address}</td>
                            <td>{appointment.gender}</td>
                            <td>{appointment.birth_year}</td>
                            <td>{new Date(appointment.appointment_date).toLocaleDateString('en-GB')}</td>
                            <td>{appointment.appointment_time}</td>
                            <td>{appointment.doctor_name}</td>
                            <td>{appointment.specialty}</td>
                            <td>{appointment.content}</td>
                            <td>
                                {appointment.status === 'accept' ? 'Đã xác nhận' : appointment.status === 'reject' ? 'Đã bị từ chối' : 'Đang chờ'}
                            </td>
                            <td>{new Date(appointment.created_at).toLocaleString('en-GB')}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>
            <section id="price-list">
                <h1>Lịch tái khám</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Bệnh nhân</th>
                        <th>Bác sĩ</th>
                        <th>Ngày tái khám</th>
                        <th>Ghi chú</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredFollowUpAppointments.map(appointment => (
                        <tr key={appointment.id}>
                            <td>{appointment.patient_name}</td>
                            <td>{appointment.doctor_name}</td>
                            <td>{new Date(appointment.follow_up_date).toLocaleDateString('en-GB')}</td>
                            <td>{appointment.notes}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>
            
            <Footer />
        </div>
    );
}

export default Appointments;
