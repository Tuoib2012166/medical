import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../assets/css/bs.css';

const GetForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    address: '',
    gender: 'Nam',
    birthYear: '',
    content: '',
    appointmentDate: '',
    appointmentTime: '',
    doctorId: '',
    specialtyId: '',
    userId: '',
  });

  const [doctors, setDoctors] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        return;
      }

      try {
        const response = await axios.get('http://localhost:8080/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setFormData(prevFormData => ({ ...prevFormData, userId: response.data.profile.id }));
      } catch (error) {
        // Handle error here
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchSpecialties = async () => {
      try {
        const response = await axios.get('http://localhost:8080/specialties');
        setSpecialties(response.data);
      } catch (error) {
        console.error('Error fetching specialties:', error);
      }
    };

    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:8080/doctors');
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    if (isFirstRender.current) {
      fetchSpecialties();
      fetchDoctors();
      isFirstRender.current = false;
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/appointments/book-appointment', formData);
      if (response.status === 200) {
        toast.success('Bạn đã đặt lịch khám thành công! Vui lòng tới trung tâm đúng ngày và giờ hẹn!', { autoClose: 3000 });
        setFormData({
          fullname: '',
          phone: '',
          address: '',
          gender: '',
          birthYear: '',
          content: '',
          appointmentDate: '',
          appointmentTime: '',
          doctorId: '',
          specialtyId: '',
          userId: '',
        });
      } else {
        toast.error('Failed to submit form', { autoClose: 3000 });
      }
    } catch (error) {
      toast.error('An error occurred while submitting the form', { autoClose: 3000 });
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="contact" className="contact">
      <h2>Đặt lịch ngay</h2>
      <div className="form-container">
        <form id="contactForm" onSubmit={handleSubmit}>
          <input type="hidden" name="userId" value={formData.userId} />
          <label htmlFor="fullname">Họ và tên:</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            required
            value={formData.fullname}
            onChange={handleChange}
          />

          <label htmlFor="phone">Số điện thoại:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
          />

          <label htmlFor="address">Địa chỉ:</label>
          <input
            type="text"
            id="address"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
          />

          <div className="gender-container">
            <label>Giới tính:</label>
            <div className="gender-options">
              <label className="gender-option">
                <input
                  type="radio"
                  name="gender"
                  value="Nam"
                  onChange={handleChange}
                  checked={formData.gender === 'Nam'}
                />
                <span className="custom-radio"></span> Nam
              </label>
              <label className="gender-option">
                <input
                  type="radio"
                  name="gender"
                  value="Nữ"
                  onChange={handleChange}
                  checked={formData.gender === 'Nữ'}
                />
                <span className="custom-radio"></span> Nữ
              </label>
            </div>
          </div>

          <label htmlFor="birthYear">Năm sinh:</label>
          <input
            type="number"
            id="birthYear"
            name="birthYear"
            required
            value={formData.birthYear}
            onChange={handleChange}
            placeholder="YYYY"
            min="1900"
            max="2023"
            style={{ width: '200px' }}
          />

          <label htmlFor="appointmentDate">Ngày hẹn:</label>
          <input
            type="date"
            id="appointmentDate"
            name="appointmentDate"
            required
            value={formData.appointmentDate}
            onChange={handleChange}
            min={today}
          />

          <label htmlFor="appointmentTime">Giờ hẹn:</label>
          <input
            type="time"
            id="appointmentTime"
            name="appointmentTime"
            required
            value={formData.appointmentTime}
            onChange={handleChange}
          />

          <label htmlFor="specialtyId">Chọn dịch vụ:</label>
          <select
            id="specialtyId"
            name="specialtyId"
            required
            value={formData.specialtyId}
            onChange={handleChange}
          >
            <option value="">--Chọn dịch vụ--</option>
            {specialties.map((specialty) => (
              <option value={specialty.id} key={specialty.id}>
                {specialty.name}
              </option>
            ))}
          </select>

          <label htmlFor="doctorId">Chọn bác sĩ:</label>
          <select
            id="doctorId"
            name="doctorId"
            required
            value={formData.doctorId}
            onChange={handleChange}
          >
            <option value="">--Chọn bác sĩ--</option>
            {doctors.map((doctor) => ( // Hiển thị tất cả bác sĩ
              <option value={doctor.id} > {/* Thêm key cho mỗi tùy chọn */}
                {doctor.fullname}   {/* Hiển thị họ tên và chuyên khoa của bác sĩ */}
              </option>
            ))}
          </select>

          <label htmlFor="content">Nội dung:</label>
          <textarea
            id="content"
            name="content"
            required
            value={formData.content}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="submit-button">Gửi</button>
        </form>
      </div>
    </section>
  );
};

export default GetForm;
