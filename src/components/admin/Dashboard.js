import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const Dashboard = () => {
    const [stats, setStats] = useState({
        patients: 0,
        doctors: 0,
        appointments: 0,
        specialties: 0,
        medicalRecords: 0
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const [patientsRes, doctorsRes, appointmentsRes, specialtiesRes, medicalRecordsRes] = await Promise.all([
                    axios.get('http://localhost:8080/patients'),
                    axios.get('http://localhost:8080/doctors'),
                    axios.get('http://localhost:8080/appointments'),
                    axios.get('http://localhost:8080/specialties'),
                    axios.get('http://localhost:8080/medical-records')
                ]);

                setStats({
                    patients: patientsRes.data.length,
                    doctors: doctorsRes.data.length,
                    appointments: appointmentsRes.data.length,
                    specialties: specialtiesRes.data.length,
                    medicalRecords: medicalRecordsRes.data.length
                });
            } catch (error) {
                toast.error('Failed to fetch statistics');
            }
        };

        fetchStats();
    }, []);

    const data = {
        labels: ['Bệnh nhân', 'Bác sĩ', 'Lịch hẹn', 'Dịch vụ', 'Bệnh án'],
        datasets: [
            {
                label: 'Thống kê',
                data: [
                    stats.patients,
                    stats.doctors,
                    stats.appointments,
                    stats.specialties,
                    stats.medicalRecords
                ],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(153, 102, 255, 0.8)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Thống kê dữ liệu'
            },
            datalabels: {
                anchor: 'end',
                align: 'top',
                color: '#000',
                font: {
                    weight: 'bold',
                    size: 14
                },
                formatter: (value) => value // Hiển thị số liệu trực tiếp
            }
        }
    };

    return (
        <div>
            <h3>Bảng điều khiển</h3>
            <Bar data={data} options={options} />
        </div>
    );
};

export default Dashboard;
