import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const FollowUpAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [patients, setPatients] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [form, setForm] = useState({ id: '', patientName: '', followUpDate: '', notes: '', doctorId: '' });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetchAppointments();
        fetchPatients();
        fetchDoctors();
    }, []);

    const fetchAppointments = async () => {
        try {
            const response = await axios.get('http://localhost:8080/follow-up-appointments', { withCredentials: true });
            setAppointments(response.data);
        } catch (error) {
            console.error('Error fetching follow-up appointments:', error);
        }
    };

    const fetchPatients = async () => {
        try {
            const response = await axios.get('http://localhost:8080/patients', { withCredentials: true });
            setPatients(response.data);
        } catch (error) {
            console.error('Error fetching patients:', error);
        }
    };

    const fetchDoctors = async () => {
        try {
            const response = await axios.get('http://localhost:8080/doctors', { withCredentials: true });
            setDoctors(response.data);
        } catch (error) {
            console.error('Error fetching doctors:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const today = new Date().toISOString().split('T')[0];
        if (form.followUpDate < today) {
            alert('Follow-up date cannot be in the past');
            return;
        }
        try {
            if (isEditing) {
                await axios.put(`http://localhost:8080/follow-up-appointments/${form.id}`, form, { withCredentials: true });
            } else {
                await axios.post('http://localhost:8080/follow-up-appointments', form, { withCredentials: true });
            }
            fetchAppointments();
            setForm({ id: '', patientName: '', followUpDate: '', notes: '', doctorId: '' });
            setIsEditing(false);
        } catch (error) {
            console.error('Error saving follow-up appointment:', error);
        }
    };

    const handleEdit = (appointment) => {
        setForm(appointment);
        setIsEditing(true);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/follow-up-appointments/${id}`, { withCredentials: true });
            fetchAppointments();
        } catch (error) {
            console.error('Error deleting follow-up appointment:', error);
        }
    };

    return (
        <div>
            <h3>Lịch tái khám</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Bệnh nhân</label>
                    <select className="form-control" name="patientName" value={form.patientName} onChange={handleInputChange} required>
                        <option value="">Chọn bệnh nhân</option>
                        {patients.map(patient => (
                            <option key={patient.id} value={patient.id}>{patient.fullname}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Bác sĩ</label>
                    <select className="form-control" name="doctorId" value={form.doctorId} onChange={handleInputChange} required>
                        <option value="">Chọn bác sĩ</option>
                        {doctors.map(doctor => (
                            <option key={doctor.id} value={doctor.id}>{doctor.fullname}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Ngày tái khám</label>
                    <input type="date" className="form-control" name="followUpDate" value={form.followUpDate} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label>Ghi chú</label>
                    <textarea className="form-control" name="notes" value={form.notes} onChange={handleInputChange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">{isEditing ? 'Cập nhật' : 'Thêm'}</button>
            </form>
            <table className="table table-striped mt-3">
                <thead>
                <tr>
                    <th>Bệnh nhân</th>
                    <th>Bác sĩ</th>
                    <th>Ngày tái khám</th>
                    <th>Ghi chú</th>
                    <th>Hành động</th>
                </tr>
                </thead>
                <tbody>
                {appointments.map(appointment => (
                    <tr key={appointment.id}>
                        <td>{appointment.patient_name}</td>
                        <td>{appointment.doctor_name}</td>
                        <td>{new Date(appointment.follow_up_date).toLocaleDateString()}</td>
                        <td>{appointment.notes}</td>
                        <td>
                                <button className="btn-icon edit-icon m-2" onClick={() => handleEdit(appointment)} title="Sửa">
                                    <i className="bi bi-pencil-fill"></i>
                                </button>
                                <button
                                    className="btn-icon delete-icon"
                                    onClick={() => {
                                        if (window.confirm('Bạn có chắc chắn muốn xóa lịch tái khám này không?')) {
                                            handleDelete(appointment.id);
                                        }
                                    }}
                                    title="Xóa"
                                >
                                    <i className="bi bi-trash-fill"></i>
                                </button>
                            </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default FollowUpAppointments;