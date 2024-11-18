import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';

// Khởi tạo component Dashboard
const Dashboard = () => {
    // Sử dụng state để lưu trữ thống kê (patients, appointments, medicalRecords)
    const [stats, setStats] = useState({
        patients: 0,          // Số lượng bệnh nhân
        appointments: 0,      // Số lượng lịch hẹn
        medicalRecords: 0     // Số lượng bệnh án
    });

    // Sử dụng useEffect để gọi API lấy thống kê ngay khi component được mount
    useEffect(() => {
        // Hàm bất đồng bộ để lấy dữ liệu từ các API
        const fetchStats = async () => {
            try {
                // Gọi API lấy số liệu về bệnh nhân, lịch hẹn và bệnh án
                const [patientsRes, appointmentsRes, medicalRecordsRes] = await Promise.all([
                    axios.get('http://localhost:8080/patients'),             // Lấy danh sách bệnh nhân
                    axios.get('http://localhost:8080/appointments'),          // Lấy danh sách lịch hẹn
                    axios.get('http://localhost:8080/medical-records')        // Lấy danh sách bệnh án
                ]);

                // Cập nhật state stats với số lượng bệnh nhân, lịch hẹn và bệnh án
                setStats({
                    patients: patientsRes.data.length,           // Lấy số lượng bệnh nhân
                    appointments: appointmentsRes.data.length,   // Lấy số lượng lịch hẹn
                    medicalRecords: medicalRecordsRes.data.length // Lấy số lượng bệnh án
                });
            } catch (error) {
                // Thông báo lỗi nếu có vấn đề xảy ra khi gọi API
                toast.error('Failed to fetch statistics');
            }
        };

        // Gọi hàm fetchStats
        fetchStats();
    }, []); // useEffect với mảng rỗng [] để chạy một lần khi component được render lần đầu

    // Render giao diện Dashboard
    return (
        <div>
            <h3>Bảng điều khiển</h3>
            <div className="row">
                {/* Thẻ thống kê bệnh nhân */}
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Bệnh nhân</h4>
                            <p className="card-text">{stats.patients}</p> {/* Hiển thị số lượng bệnh nhân */}
                        </div>
                    </div>
                </div>
                
                {/* Thẻ thống kê lịch hẹn */}
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Lịch hẹn</h4>
                            <p className="card-text">{stats.appointments}</p> {/* Hiển thị số lượng lịch hẹn */}
                        </div>
                    </div>
                </div>
                
                {/* Thẻ thống kê bệnh án */}
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Bệnh án</h4>
                            <p className="card-text">{stats.medicalRecords}</p> {/* Hiển thị số lượng bệnh án */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Xuất component Dashboard để sử dụng trong các file khác
export default Dashboard;
