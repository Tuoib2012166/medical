import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, MenuItem, Select, InputLabel, Box } from '@mui/material';

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

    // if (name === 'doctorId' || name === 'appointmentDate') {
    //   console.log(formData.appointmentDate)
    //   console.log(formData.doctorId)
    //   const filteredAppointments = uniqueAppointments.filter(appointment =>
    //     appointment.doctor_id === (name == 'doctorId' ? value : formData.doctorId) &&
    //     new Date(appointment.appointment_date).toISOString().split('T')[0] === (name === 'appointmentDate' ? value : formData.appointmentDate)

    //   );
    //   console.log("filteredAppointments", filteredAppointments);
    //   console.log("filteredAppointments", uniqueAppointments);
    //   setBookedTimes(filteredAppointments.map(appointment => appointment.appointment_time.substring(0, 5)));
    // }
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
  console.log("bookedTimes", bookedTimes);

  useEffect(() => {
    const fetchBookedTimes = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/appointments?today=${formData.appointmentDate}`);
        const hours = response.data.map(i => i.hour);
       
        setBookedTimes(hours);
      } catch (error) {
        console.error('Error fetching booked times:', error);
      }
    };

    if (formData.appointmentDate) {
      fetchBookedTimes();
    }
  }, [formData.appointmentDate]);

  return (
    <section id="contact" className="contact container mt-5">
      <h2 className="text-center mb-4">Đặt lịch ngay</h2>

      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <input type="hidden" name="userId" value={formData.userId} />

        <TextField
          label="Họ và tên"
          name="fullname"
          required
          value={formData.fullname}
          onChange={handleChange}
        />

        <TextField
          label="Số điện thoại"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
        />

        <TextField
          label="Địa chỉ"
          name="address"
          required
          value={formData.address}
          onChange={handleChange}
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
        />

        <FormControl required>
          <InputLabel id="specialtyId-label">Chọn dịch vụ</InputLabel>
          <Select
            labelId="specialtyId-label"
            name="specialtyId"
            value={formData.specialtyId}
            onChange={handleChange}
            label="Chọn dịch vụ"
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
        />


<FormControl required>
  <FormLabel>Chọn giờ</FormLabel>
  <RadioGroup
    row
    name="appointmentTime"
    value={formData.appointmentTime}
    onChange={handleChange}
    sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px' }}
  >
    {[...Array(10)].map((_, index) => {
      const hour = 8 + index; // Tạo giờ từ 08:00 đến 17:00
      const timeLabel = `${hour.toString().padStart(2, '0')}:00`;

      // Chuyển đổi mảng bookedTimes từ dạng [9, 0] thành mảng ['09:00'] để so sánh
      const bookedTimesFormatted = bookedTimes.map(
        time => `${time.toString().padStart(2, '0')}:00`
      );

      // Kiểm tra nếu giờ hiện tại có trong bookedTimesFormatted
      const isDisabled = bookedTimesFormatted.includes(timeLabel);

      return (
        <FormControlLabel
          key={timeLabel}
          value={timeLabel}
          control={<Radio />}
          label={timeLabel}
          disabled={isDisabled} // Disable nếu giờ đã có trong `bookedTimesFormatted`
          sx={{ margin: '5px' }}
        />
      );
    })}
  </RadioGroup>
</FormControl>




        <TextField
          label="Nội dung"
          name="content"
          required
          multiline
          rows={4}
          value={formData.content}
          onChange={handleChange}
        />

        <Button variant="contained" color="primary" type="submit">
          Gửi
        </Button>
      </Box>
    </section>
  );
};

export default GetForm;