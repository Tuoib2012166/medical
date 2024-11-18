import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCheck, FaTimes } from 'react-icons/fa';
import useUserStore from "../../store/userStore";

const AppointmentList = () => {
    const [appointments, setAppointments] = useState([]);
    const [services, setServices] = useState([]); // Thêm state cho services
    const { user, setUser } = useUserStore();

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token'); // Lấy token từ localStorage
            const response = await axios.get('http://localhost:8080/me', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUser(response.data);
            const name = response.data.profile.fullname;

            const fetchAppointments = async () => {
                try {
                    const response = await axios.get('http://localhost:8080/appointments');
                    const filteredAppointments = response.data.filter(appointment => appointment.doctor_name === name);
                    setAppointments(filteredAppointments);
                } catch (error) {
                    console.error('Error fetching appointments:', error);
                }
            };

            const fetchServices = async () => {
                try {
                    const response = await axios.get('http://localhost:8080/specialties');
                    // Lọc các dịch vụ để chỉ giữ lại những dịch vụ mà bác sĩ có tên bằng 'name'
                    const filteredServices = response.data.filter(specialty => specialty.sevice === name);
                    setServices(filteredServices); // Cập nhật trạng thái 'services' với danh sách đã lọc
                } catch (error) {
                    console.error('Error fetching services:', error);
                }
            };

            fetchAppointments(); // Gọi hàm fetchAppointments
            fetchServices(); // Gọi hàm fetchServices
        };

        fetchUserData();
    }, [setUser]);

    const checkForDuplicates = (appointment, index) => {
        return appointments.some((otherAppointment, otherIndex) =>
            otherIndex !== index &&
            appointment.appointment_date === otherAppointment.appointment_date &&
            appointment.appointment_time === otherAppointment.appointment_time &&
            appointment.doctor_name === otherAppointment.doctor_name
        );
    };

    const confirmAppointment = async (id) => {
        try {
            await axios.put(`http://localhost:8080/appointments/${id}/confirm`);
            setAppointments(appointments.map(appointment =>
                appointment.id === id ? { ...appointment, status: 'accept' } : appointment
            ));
        } catch (error) {
            console.error('Error confirming appointment:', error);
        }
    };

    const rejectAppointment = async (id) => {
        try {
            await axios.put(`http://localhost:8080/appointments/${id}/reject`);
            setAppointments(appointments.map(appointment =>
                appointment.id === id ? { ...appointment, status: 'reject' } : appointment
            ));
        } catch (error) {
            console.error('Error rejecting appointment:', error);
        }
    };

    return (
        <div>
            <h3>Danh sách đặt lịch</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Họ và tên</th>
                        <th>Số điện thoại</th>
                        <th>Địa chỉ</th>
                        <th>Giới tính</th>
                        <th>Năm sinh</th>
                        <th>Ngày hẹn</th>
                        <th>Giờ hẹn</th>
                        <th>Bác sĩ</th>
                        <th>Bác sĩ</th>
                        <th>Nội dung</th>
                        <th>Ngày tạo</th>
                        <th>Trạng thái</th>
                        <th>Chấp nhận/ Từ chối</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment, index) => (
                        <tr key={appointment.id}>
                            <td className={checkForDuplicates(appointment, index) ? 'highlight' : ''}>{appointment.id}</td>
                            <td className={checkForDuplicates(appointment, index) ? 'highlight' : ''}>{appointment.fullname}</td>
                            <td className={checkForDuplicates(appointment, index) ? 'highlight' : ''}>{appointment.phone}</td>
                            <td className={checkForDuplicates(appointment, index) ? 'highlight' : ''}>{appointment.address}</td>
                            <td className={checkForDuplicates(appointment, index) ? 'highlight' : ''}>{appointment.gender}</td>
                            <td className={checkForDuplicates(appointment, index) ? 'highlight' : ''}>{appointment.birth_year}</td>
                            <td className={checkForDuplicates(appointment, index) ? 'highlight' : ''}>{new Date(appointment.appointment_date).toLocaleDateString('en-GB')}</td>
                            <td className={checkForDuplicates(appointment, index) ? 'highlight' : ''}>{appointment.appointment_time}</td>
                            <td className={checkForDuplicates(appointment, index) ? 'highlight' : ''}>{appointment.doctor_name}</td>
                            <td className={checkForDuplicates(appointment, index) ? 'highlight' : ''}>{appointment.doctor_name}</td>
                            <td className={checkForDuplicates(appointment, index) ? 'highlight' : ''}>{appointment.content}</td>
                            <td className={checkForDuplicates(appointment, index) ? 'highlight' : ''}>{new Date(appointment.appointment_date).toLocaleString('en-GB')}</td>
                            <td className={checkForDuplicates(appointment, index) ? 'highlight' : ''}>
                                {appointment.status === 'accept' ? 'Đã xác nhận' : appointment.status === 'reject' ? 'Đã từ chối' : 'Đang chờ'}
                            </td>
                            <td>
                                {appointment.status !== 'accept' && appointment.status !== 'reject' && (
                                    <>
                                        <FaCheck onClick={() => confirmAppointment(appointment.id)} style={{ cursor: 'pointer', color: 'green', marginRight: '10px' }} />
                                        <FaTimes onClick={() => rejectAppointment(appointment.id)} style={{ cursor: 'pointer', color: 'red' }} />
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentList;
