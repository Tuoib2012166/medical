import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DoctorDetail() {
    const { doctorName } = useParams(); // Lấy tên bác sĩ từ URL
    const [doctor, setDoctor] = useState(null);

    useEffect(() => {
        const fetchDoctorDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/doctors/${doctorName}`);
                setDoctor(response.data);
            } catch (error) {
                console.error('Error fetching doctor details:', error);
            }
        };

        fetchDoctorDetails();
    }, [doctorName]);

    if (!doctor) return <div>Loading...</div>;

    return (
        <section id="doctor-detail">
            <h1>Chi Tiết Bác Sĩ</h1>
            <div className="doctor-info">
                <img src={`http://localhost:8080/${doctor.image}`} alt={`Ảnh của ${doctor.fullname}`} />
                <h2>{doctor.fullname}</h2>
                <p><strong>Chuyên khoa:</strong> {doctor.specialty}</p>
                <p><strong>Kinh nghiệm:</strong> {doctor.experience}</p>
                <p><strong>Giới thiệu:</strong> {doctor.bio}</p>
            </div>
        </section>
    );
}

export default DoctorDetail;
