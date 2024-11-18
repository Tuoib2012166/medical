import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import Sidebar from './sidebar'; // Đảm bảo Sidebar được import
import '../../assets/css/doctorList.css'; // Đảm bảo đã tạo và tạo kiểu cho file CSS này

function DoctorList() {
    const [doctors, setDoctors] = useState([]);
    const navigate = useNavigate(); // Dùng để điều hướng

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get('http://localhost:8080/doctors');
                setDoctors(response.data);
            } catch (error) {
                console.error('Error fetching doctors:', error);
            }
        };

        fetchDoctors();
    }, []);

    // Hàm xử lý khi nhấn vào bác sĩ
    const handleDoctorClick = (doctor) => {
        // Dựa trên tên bác sĩ, điều hướng đến trang chi tiết
        navigate(`/${doctor.fullname.replace(/ /g, '-').toLowerCase()}`);
    };

    return (
        <div style={{ display: 'flex' }}>
            <section id="doctor-list">
                <h1>Danh Sách Bác Sĩ</h1>
                <div className="doctor-cards">
                    {doctors.map((doctor, index) => (
                        <div className="doctor-card" key={index} onClick={() => handleDoctorClick(doctor)}>
                            <img src={`http://localhost:8080/${doctor.image}`} alt={`Ảnh của ${doctor.fullname}`} />
                            <h2>{doctor.name}</h2>
                            <p>{doctor.fullname}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default DoctorList;
