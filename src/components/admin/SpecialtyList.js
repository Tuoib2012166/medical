import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
    Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button,
    IconButton, Tooltip
} from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';

const SpecialtyList = () => {
    const [specialties, setSpecialties] = useState([]);
    const [formData, setFormData] = useState({ name: '', description: '', price: '', image: null });
    const [editingSpecialty, setEditingSpecialty] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        const fetchSpecialties = async () => {
            try {
                const response = await axios.get('http://localhost:8080/specialties');
                setSpecialties(response.data);
            } catch (error) {
                console.error('Error fetching specialties:', error);
            }
        };

        fetchSpecialties();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', formData.name);
        data.append('description', formData.description);
        data.append('price', formData.price);
        if (formData.image) {
            data.append('image', formData.image);
        }

        try {
            if (editingSpecialty) {
                // Update
                await axios.put(`http://localhost:8080/specialties/${editingSpecialty.id}`, data, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
            } else {
                // Create
                await axios.post('http://localhost:8080/specialties', data, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
            }
            setOpenDialog(false);
            setFormData({ name: '', description: '', price: '', image: null });
            setEditingSpecialty(null);
            const response = await axios.get('http://localhost:8080/specialties');
            setSpecialties(response.data);
        } catch (error) {
            console.error('Error saving specialty:', error);
        }
    };

    const handleEditClick = (specialty) => {
        setFormData({ name: specialty.name, description: specialty.description, price: specialty.price, image: null });
        setEditingSpecialty(specialty);
        setOpenDialog(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa dịch vụ này không?')) {
            try {
                await axios.delete(`http://localhost:8080/specialties/${id}`);
                setSpecialties(specialties.filter((specialty) => specialty.id !== id));
            } catch (error) {
                console.error('Error deleting specialty:', error);
            }
        }
    };

    return (
        <div>
            <h3>Quản lý Chuyên Khoa</h3>
            <Button
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => {
                    setFormData({ name: '', description: '', price: '', image: null });
                    setEditingSpecialty(null);
                    setOpenDialog(true);
                }}
            >
                Thêm Chuyên khoa
            </Button>
            <Button
                variant="contained"
                color="secondary"
                startIcon={<Add />}
                onClick={() => {
                    setFormData({ name: '', description: '', price: '', image: null });
                    setEditingSpecialty(null);
                    setOpenDialog(true);
                }}
                style={{ marginLeft: 10 }}
            >
                Thêm DV
            </Button>
            <TableContainer component={Paper} style={{ marginTop: 20 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Tên</TableCell>
                            <TableCell>Mô tả</TableCell>
                            <TableCell>Giá</TableCell>
                            <TableCell>Hình ảnh</TableCell>
                            <TableCell>Thao tác</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {specialties.map((specialty) => (
                            <TableRow key={specialty.id}>
                                <TableCell>{specialty.name}</TableCell>
                                <TableCell>{specialty.description}</TableCell>
                                <TableCell>{specialty.price}</TableCell>
                                <TableCell>
                                    <img
                                        src={`http://localhost:8080/${specialty.image}`}
                                        alt="Specialty"
                                        style={{ width: 50, height: 50, objectFit: 'cover' }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Tooltip title="Sửa">
                                        <IconButton
                                            color="primary"
                                            onClick={() => handleEditClick(specialty)}
                                        >
                                            <Edit />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Xóa">
                                        <IconButton
                                            color="error"
                                            onClick={() => handleDelete(specialty.id)}
                                        >
                                            <Delete />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Dialog for Creating/Editing */}
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>{editingSpecialty ? 'Chỉnh sửa dịch vụ' : 'Thêm dịch vụ'}</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Tên"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Mô tả"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Giá"
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={handleInputChange}
                        required
                    />
                    <input type="file" onChange={handleFileChange} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)}>Hủy</Button>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        {editingSpecialty ? 'Lưu' : 'Thêm'}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default SpecialtyList;
