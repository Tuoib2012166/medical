import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import '../../assets/css/serviceList.css'; 

function ServiceList() {
    const [services, setServices] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchSpecialties = async () => {
            try {
                const response = await axios.get('http://localhost:8080/specialties');
                setServices(response.data);
            } catch (error) {
                console.error('Error fetching specialties:', error);
            }
        };

        fetchSpecialties();
    }, []);

    const handleServiceClick = (service) => {
        switch(service.name) {
            case 'Bọc răng sứ':
                navigate('/rangsu');
                break;
            case 'Cấy ghép implant':
                navigate('/implant');
                break;
            case 'Niềng răng thẩm mỹ':
                navigate('/niengrang');
                break;
            case 'Mặt dán sứ Veneer':
                navigate('/MatDanSuVeneer');
                break;
            case 'Tẩy trắng răng':
                navigate('/taytrangrang');
                break;
            case 'Nhổ răng khôn':
                navigate('/nhorangkhon');
                break;
            case 'Bệnh lý nha chu':
                navigate('/BenhLyNhaChu');
                break;
            case 'Điều trị tủy':
                navigate('/dieutrituy');
                break;
            case 'Hàn trám răng':
                navigate('/hantramrang');
                break;
            case 'Chăm sóc răng miệng cho phụ nữ mang thai':
                navigate('/chamsocrangmieng');
                break;
            default:
                break;
        }
    };

    return (
        <section id="service-list">
            <h1>Danh Sách Dịch Vụ</h1>
            <div className="service-cards">
                {services.map((service, index) => (
                    <div className="service-card" key={index} onClick={() => handleServiceClick(service)}>
                        <h2>{service.name}</h2>
                        <img src={`http://localhost:8080/${service.image}`} alt={`Image of ${service.name}`} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ServiceList;
