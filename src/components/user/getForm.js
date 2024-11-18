import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, MenuItem, Select, InputLabel, Box } from '@mui/material';
import '../../assets/css/getForm.css';

const GetForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    address: '',
    gender: 'Nam',
    birthYear: '',
    content: '',
    appointmentDate: new Date().toISOString().split('T')[0],
    appointmentTime: '',
    doctorId: '',
    specialtyId: '',
    userId: '',
  });

  const [doctors, setDoctors] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  const [uniqueAppointments, setUniqueAppointments] = useState([]);
  const [bookedTimes, setBookedTimes] = useState([]);
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
        setFormData(prevFormData => ({
          ...prevFormData,
          userId: response.data.profile.id,
          fullname: response.data.profile.fullname,
          phone: response.data.profile.phone,
          address: response.data.profile.address
        }));
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

    if (isFirstRender.current) {
      fetchSpecialties();
      isFirstRender.current = false;
    }
  }, []);

  useEffect(() => {
    const fetchUniqueAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:8080/appointments/appointmenthavebook');
        setUniqueAppointments(response.data);
      } catch (error) {
        console.error('Error fetching unique appointments:', error);
      }
    };

    fetchUniqueAppointments();
  }, []);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'specialtyId' && value) {
      try {
        const response = await axios.get(`http://localhost:8080/doctors?specialtyId=${value}`);
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    }

    if (name === 'doctorId' || name === 'appointmentDate') {
      const filteredAppointments = uniqueAppointments.filter(appointment =>
        appointment.doctor_id === (name === 'doctorId' ? value : formData.doctorId) &&
        new Date(appointment.appointment_date).toISOString().split('T')[0] === (name === 'appointmentDate' ? value : formData.appointmentDate)
      );
      setBookedTimes(filteredAppointments.map(appointment => appointment.appointment_time.substring(0, 5)));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/appointments/book-appointment', formData);
      if (response.status === 200) {
        // Sử dụng SweetAlert2 để hiển thị thông báo thành công
        Swal.fire({
          title: 'Thành công!',
          text: 'Bạn đã đặt lịch khám thành công! Vui lòng tới trung tâm đúng ngày và giờ hẹn.',
          icon: 'success',
          confirmButtonText: 'OK',
        });

        // Reset form sau khi gửi thành công
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
        // Thông báo lỗi nếu có vấn đề
        Swal.fire({
          title: 'Lỗi!',
          text: 'Không thể gửi form, vui lòng thử lại!',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      // Xử lý lỗi và hiển thị thông báo lỗi
      Swal.fire({
        title: 'Lỗi!',
        text: 'Có lỗi xảy ra khi gửi form, vui lòng thử lại!',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="contact" className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow-lg" style={{ maxWidth: '600px', width: '100%' }}>
        <h2  className="custom-header">Đặt lịch ngay</h2>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <input type="hidden" name="userId" value={formData.userId} />

          <TextField
            label="Họ và tên"
            name="fullname"
            required
            value={formData.fullname}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Số điện thoại"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Địa chỉ"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            fullWidth
          />

          <FormControl required>
            <FormLabel>Giới tính</FormLabel>
            <RadioGroup
              row
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <FormControlLabel value="Nam" control={<Radio />} label="Nam" />
              <FormControlLabel value="Nữ" control={<Radio />} label="Nữ" />
            </RadioGroup>
          </FormControl>

          <TextField
            label="Năm sinh"
            name="birthYear"
            required
            type="number"
            value={formData.birthYear}
            onChange={handleChange}
            placeholder="YYYY"
            InputProps={{
              inputProps: { min: 1900, max: 2023 }
            }}
            fullWidth
          />

          <FormControl required>
            <InputLabel id="specialtyId-label">Chọn dịch vụ</InputLabel>
            <Select
              labelId="specialtyId-label"
              name="specialtyId"
              value={formData.specialtyId}
              onChange={handleChange}
              label="Chọn dịch vụ"
              fullWidth
            >
              <MenuItem value="">--Chọn dịch vụ--</MenuItem>
              {specialties.map((specialty) => (
                <MenuItem value={specialty.id} key={specialty.id}>
                  {specialty.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl required>
            <InputLabel id="doctorId-label">Chọn bác sĩ</InputLabel>
            <Select
              labelId="doctorId-label"
              name="doctorId"
              value={formData.doctorId}
              onChange={handleChange}
              label="Chọn bác sĩ"
              fullWidth
            >
              <MenuItem value="">--Chọn bác sĩ--</MenuItem>
              {doctors.map((doctor) => (
                <MenuItem value={doctor.id} key={doctor.id}>
                  {doctor.fullname}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            label="Ngày hẹn"
            name="appointmentDate"
            required
            type="date"
            value={formData.appointmentDate}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              min: today,
            }}
            fullWidth
          />

          <FormControl required>
            <FormLabel>Chọn giờ</FormLabel>
            <RadioGroup
              row
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleChange}
            >
              {['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'].map(time => (
                !bookedTimes.includes(time) && (
                  <FormControlLabel
                    key={time}
                    value={time}
                    control={<Radio className="square-radio" />}
                    label={time}
                    className={`time-slot ${formData.appointmentTime === time ? 'active' : ''}`}
                  />
                )
              ))}
            </RadioGroup>
          </FormControl>


          <TextField
            label="Nội dung"
            name="content"
            value={formData.content}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
          />

          <Button variant="contained" color="primary" type="submit" fullWidth>
            Đặt lịch
          </Button>
        </Box>
      </div>
    </section>
  );
};

export default GetForm;
