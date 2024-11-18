import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Tooltip } from '@mui/material';
import { CheckCircle, Cancel } from '@mui/icons-material';

const AppointmentList = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get('http://localhost:8080/appointments');
                setAppointments(response.data);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };

        fetchAppointments();
    }, []);

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
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Họ và tên</TableCell>
                        <TableCell>Ngày hẹn</TableCell>
                        <TableCell>Giờ hẹn</TableCell>
                        <TableCell>Bác sĩ</TableCell>
                        <TableCell>Nội dung</TableCell>
                        <TableCell>Ngày tạo</TableCell>
                        <TableCell>Trạng thái</TableCell>
                        <TableCell>Hành động</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {appointments.map((appointment) => (
                        <TableRow key={appointment.id}>
                            <TableCell>{appointment.fullname}</TableCell>
                            <TableCell>{new Date(appointment.appointment_date).toLocaleDateString('en-GB')}</TableCell>
                            <TableCell>{appointment.appointment_time}</TableCell>
                            <TableCell>{appointment.doctor_name}</TableCell>
                            <TableCell>{appointment.content}</TableCell>
                            <TableCell>{new Date(appointment.created_at).toLocaleDateString('en-GB')}</TableCell>
                            <TableCell>
                                {appointment.status === 'accept' 
                                    ? 'Đã xác nhận' 
                                    : appointment.status === 'reject' 
                                    ? 'Đã từ chối' 
                                    : 'Đang chờ'}
                            </TableCell>
                            <TableCell>
                                {appointment.status === 'pending' && (
                                    <>
                                        <Tooltip title="Xác nhận">
                                            <IconButton
                                                onClick={() => confirmAppointment(appointment.id)}
                                                color="success"
                                            >
                                                <CheckCircle />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Từ chối">
                                            <IconButton
                                                onClick={() => rejectAppointment(appointment.id)}
                                                color="error"
                                            >
                                                <Cancel />
                                            </IconButton>
                                        </Tooltip>
                                    </>
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default AppointmentList;
