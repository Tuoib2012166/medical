import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, TextField, Select, MenuItem, FormControl, InputLabel, Dialog, DialogActions, DialogContent, DialogTitle, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// Component quản lý danh sách bác sĩ
const DoctorList = () => {
    const [doctors, setDoctors] = useState([]); // Danh sách bác sĩ
    const [specialties, setSpecialties] = useState([]); // Danh sách chuyên khoa
    const [editingDoctor, setEditingDoctor] = useState(null); // Bác sĩ đang chỉnh sửa
    const [newDoctor, setNewDoctor] = useState({ // Dữ liệu bác sĩ mới
        username: '',
        password: '',
        fullname: '',
        specialty: '',
        phone: '',
        address: '',
        gender: '',
        birth_year: '',
        image: null
    });
    const [showAddForm, setShowAddForm] = useState(false); // Hiển thị form thêm bác sĩ

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get('http://localhost:8080/doctors');
                setDoctors(response.data);
            } catch (error) {
                console.error('Error fetching doctors:', error);
            }
        };

        const fetchSpecialties = async () => {
            try {
                const response = await axios.get('http://localhost:8080/specialties');
                setSpecialties(response.data);
            } catch (error) {
                console.error('Error fetching specialties:', error);
            }
        };

        fetchDoctors();
        fetchSpecialties();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewDoctor({ ...newDoctor, [name]: value });
    };

    const handleFileChange = (e) => {
        setNewDoctor({ ...newDoctor, image: e.target.files[0] });
    };

    const handleAddDoctor = async () => {
        const formData = new FormData();
        Object.keys(newDoctor).forEach(key => {
            formData.append(key, newDoctor[key]);
        });

        try {
            const response = await axios.post('http://localhost:8080/doctors', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setDoctors([...doctors, response.data]);
            setNewDoctor({
                username: '',
                password: '',
                fullname: '',
                specialty: '',
                phone: '',
                address: '',
                gender: '',
                birth_year: '',
                image: null
            });
            setShowAddForm(false);
            window.location.reload();
        } catch (error) {
            console.error('Error adding doctor:', error);
        }
    };

    const handleEditDoctor = (doctor) => {
        setEditingDoctor(doctor);
    };

    const handleUpdateDoctor = async () => {
        const formData = new FormData();
        Object.keys(editingDoctor).forEach(key => {
            formData.append(key, editingDoctor[key]);
        });

        try {
            const response = await axios.put(`http://localhost:8080/doctors/${editingDoctor.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setDoctors(doctors.map(doc => (doc.id === editingDoctor.id ? response.data : doc)));
            setEditingDoctor(null);
            window.location.reload();
        } catch (error) {
            console.error('Error updating doctor:', error);
        }
    };

    const handleDeleteDoctor = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/doctors/${id}`);
            setDoctors(doctors.filter(doc => doc.id !== id));
        } catch (error) {
            console.error('Error deleting doctor:', error);
        }
    };

    return (
        <div>
            <h3>Quản lý Bác sĩ</h3>
            <Button variant="contained" color="primary" onClick={() => setShowAddForm(!showAddForm)}>Thêm Bác sĩ</Button>

            {/* Form Thêm Bác sĩ */}
            <Dialog open={showAddForm} onClose={() => setShowAddForm(false)}>
                <DialogTitle>Thêm Bác sĩ</DialogTitle>
                <DialogContent>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleAddDoctor();
                    }}>
                        <TextField
                            fullWidth
                            label="Username"
                            name="username"
                            value={newDoctor.username}
                            onChange={handleInputChange}
                            required
                            sx={{ mb: 2 }} // Thêm margin-bottom giữa các trường
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            name="password"
                            value={newDoctor.password}
                            onChange={handleInputChange}
                            required
                            sx={{ mb: 2 }} // Thêm margin-bottom
                        />
                        <TextField
                            fullWidth
                            label="Họ và Tên"
                            name="fullname"
                            value={newDoctor.fullname}
                            onChange={handleInputChange}
                            required
                            sx={{ mb: 2 }} // Thêm margin-bottom
                        />

                        <FormControl fullWidth required sx={{ mb: 2 }}>
                            <InputLabel>Dịch vụ</InputLabel>
                            <Select
                                name="specialty"
                                value={newDoctor.specialty}
                                onChange={handleInputChange}
                            >
                                <MenuItem value=""><em>Chọn Dịch vụ</em></MenuItem>
                                {specialties.map(specialty => (
                                    <MenuItem key={specialty.id} value={specialty.id}>{specialty.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <TextField
                            fullWidth
                            label="Số Điện Thoại"
                            name="phone"
                            value={newDoctor.phone}
                            onChange={handleInputChange}
                            required
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Địa Chỉ"
                            name="address"
                            value={newDoctor.address}
                            onChange={handleInputChange}
                            required
                            sx={{ mb: 2 }}
                        />

                        <FormControl fullWidth required sx={{ mb: 2 }}>
                            <InputLabel>Giới Tính</InputLabel>
                            <Select
                                name="gender"
                                value={newDoctor.gender}
                                onChange={handleInputChange}
                            >
                                <MenuItem value="0">Nam</MenuItem>
                                <MenuItem value="1">Nữ</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            fullWidth
                            label="Năm Sinh"
                            type="number"
                            name="birth_year"
                            value={newDoctor.birth_year}
                            onChange={handleInputChange}
                            required
                            sx={{ mb: 2 }}
                        />
                        <input type="file" name="image" onChange={handleFileChange} />

                        <DialogActions>
                            <Button type="submit" color="primary">Thêm</Button>
                            <Button onClick={() => setShowAddForm(false)} color="secondary">Hủy</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Table Bác sĩ */}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Username</TableCell>
                            <TableCell>Họ và Tên</TableCell>
                            <TableCell>Dịch vụ</TableCell>
                            <TableCell>Số Điện Thoại</TableCell>
                            <TableCell>Giới Tính</TableCell>
                            <TableCell>Năm Sinh</TableCell>
                            <TableCell>Hình Ảnh</TableCell>
                            <TableCell>Hành Động</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {doctors.map((doctor) => (
                            <TableRow key={doctor.id}>
                                <TableCell>{doctor.username}</TableCell>
                                <TableCell>{doctor.fullname}</TableCell>
                                <TableCell>{doctor.specialty_name}</TableCell>
                                <TableCell>{doctor.phone}</TableCell>
                                <TableCell>{doctor.gender === '0' ? 'Nam' : 'Nữ'}</TableCell>
                                <TableCell>{doctor.birth_year}</TableCell>
                                <TableCell>
                                    <img src={`http://localhost:8080/${doctor.image}`} alt="Doctor" style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
                                </TableCell>
                                <TableCell>
                                    <Button variant="outlined" color="primary" onClick={() => handleEditDoctor(doctor)}>Sửa</Button>
                                    <Button variant="outlined" color="secondary" onClick={() => {
                                        if (window.confirm('Bạn có chắc chắn muốn xóa người dùng này không?')) {
                                            handleDeleteDoctor(doctor.id);
                                        }
                                    }}>Xóa</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Form Sửa Bác sĩ */}
            {editingDoctor && (
                <Dialog open={true} onClose={() => setEditingDoctor(null)}>
                    <DialogTitle>Sửa Bác sĩ</DialogTitle>
                    <DialogContent>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleUpdateDoctor();
                        }}>
                            <TextField
                                fullWidth
                                label="Username"
                                name="username"
                                value={editingDoctor.username}
                                onChange={(e) => setEditingDoctor({ ...editingDoctor, username: e.target.value })}
                                required
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                fullWidth
                                label="Password"
                                type="password"
                                name="password"
                                value={editingDoctor.password}
                                onChange={(e) => setEditingDoctor({ ...editingDoctor, password: e.target.value })}
                                required
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                fullWidth
                                label="Họ và Tên"
                                name="fullname"
                                value={editingDoctor.fullname}
                                onChange={(e) => setEditingDoctor({ ...editingDoctor, fullname: e.target.value })}
                                required
                                sx={{ mb: 2 }}
                            />

                            <FormControl fullWidth required sx={{ mb: 2 }}>
                                <InputLabel>Dịch vụ</InputLabel>
                                <Select
                                    name="specialty"
                                    value={editingDoctor.specialty}
                                    onChange={(e) => setEditingDoctor({ ...editingDoctor, specialty: e.target.value })}
                                >
                                    <MenuItem value=""><em>Chọn Dịch vụ</em></MenuItem>
                                    {specialties.map(specialty => (
                                        <MenuItem key={specialty.id} value={specialty.id}>{specialty.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <TextField
                                fullWidth
                                label="Số Điện Thoại"
                                name="phone"
                                value={editingDoctor.phone}
                                onChange={(e) => setEditingDoctor({ ...editingDoctor, phone: e.target.value })}
                                required
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                fullWidth
                                label="Địa Chỉ"
                                name="address"
                                value={editingDoctor.address}
                                onChange={(e) => setEditingDoctor({ ...editingDoctor, address: e.target.value })}
                                required
                                sx={{ mb: 2 }}
                            />

                            <FormControl fullWidth required sx={{ mb: 2 }}>
                                <InputLabel>Giới Tính</InputLabel>
                                <Select
                                    name="gender"
                                    value={editingDoctor.gender}
                                    onChange={(e) => setEditingDoctor({ ...editingDoctor, gender: e.target.value })}
                                >
                                    <MenuItem value="0">Nam</MenuItem>
                                    <MenuItem value="1">Nữ</MenuItem>
                                </Select>
                            </FormControl>

                            <TextField
                                fullWidth
                                label="Năm Sinh"
                                type="number"
                                name="birth_year"
                                value={editingDoctor.birth_year}
                                onChange={(e) => setEditingDoctor({ ...editingDoctor, birth_year: e.target.value })}
                                required
                                sx={{ mb: 2 }}
                            />
                            <DialogActions>
                                <Button type="submit" color="primary">Lưu</Button>
                                <Button onClick={() => setEditingDoctor(null)} color="secondary">Hủy</Button>
                            </DialogActions>
                        </form>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
};

export default DoctorList;
