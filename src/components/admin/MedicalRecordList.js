import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


const MedicalRecordList = () => {
    const [records, setRecords] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [patients, setPatients] = useState([]);
    const [editingRecord, setEditingRecord] = useState(null);
    const [formData, setFormData] = useState({
        patient_id: '',
        doctor_id: '',
        diagnosis: '',
        treatment: '',
        record_date: ''
    });
    const [showForm, setShowForm] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState(null);

    useEffect(() => {
        fetchRecords();
        fetchDoctors();
        fetchPatients();
    }, []);

    const fetchRecords = async () => {
        try {
            const response = await axios.get('http://localhost:8080/medical-records');
            if (Array.isArray(response.data)) {
                setRecords(response.data);
            } else {
                setRecords([]);
                toast.error('Dữ liệu bệnh án không hợp lệ');
            }
        } catch (error) {
            toast.error('Không thể lấy dữ liệu bệnh án');
        }
    };

    const fetchDoctors = async () => {
        try {
            const response = await axios.get('http://localhost:8080/doctors');
            setDoctors(response.data);
        } catch (error) {
            toast.error('Không thể lấy dữ liệu bác sĩ');
        }
    };

    const fetchPatients = async () => {
        try {
            const response = await axios.get('http://localhost:8080/patients');
            setPatients(response.data);
        } catch (error) {
            toast.error('Không thể lấy dữ liệu bệnh nhân');
        }
    };

    const handleEdit = (record) => {
        setEditingRecord(record);
        setFormData({
            patient_id: record.patient_id,
            doctor_id: record.doctor_id,
            diagnosis: record.diagnosis,
            treatment: record.treatment,
            record_date: record.record_date
        });
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/medical-records/${id}`);
            toast.success('Xóa bệnh án thành công');
            fetchRecords();
        } catch (error) {
            toast.error('Không thể xóa bệnh án');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingRecord) {
                await axios.put(`http://localhost:8080/medical-records/${editingRecord.id}`, formData);
                toast.success('Cập nhật bệnh án thành công');
            } else {
                await axios.post('http://localhost:8080/medical-records', formData);
                toast.success('Thêm bệnh án thành công');
            }
            setEditingRecord(null);
            setFormData({
                patient_id: '',
                doctor_id: '',
                diagnosis: '',
                treatment: '',
                record_date: ''
            });
            setShowForm(false);
            fetchRecords();
        } catch (error) {
            toast.error('Không thể gửi biểu mẫu');
        }
    };

    const handlePrint = (record) => {
        const printContent = `
            <div style="font-family: Arial, sans-serif; padding: 20px;">
                <h4 style="text-align: center;">NHA KHOA DENTAL CARE</h4>
                <p style="text-align: center;">Địa chỉ: Xuân Khánh, Ninh Kiều, Cần Thơ</p>
                <p style="text-align: center;">Điện thoại: 0123456789</p>
                <hr />
                <p><strong>Họ và tên:</strong> ${record.patient_name}</p>
                <p><strong>Bác sĩ điều trị:</strong> ${record.doctor_name}</p>
                <p><strong>Ngày khám:</strong> ${new Date(record.record_date).toLocaleDateString()}</p>
                <p><strong>Chẩn đoán:</strong> ${record.diagnosis}</p>
                <p><strong>Điều trị:</strong> ${record.treatment}</p>
                <hr />
                <h6 class="text-center">PHIM CHỤP X-QUANG</h6>
                <div class="text-center">
                    <img
                        src="/path/to/xray-image.jpg" // Thay bằng đường dẫn ảnh chụp X-quang
                        alt="Phim chụp X-quang"
                        style="max-width: 100%;"
                    />
                </div>
            </div>
        `;
        
        const printWindow = window.open('', '', 'width=800,height=600');
        printWindow.document.write(printContent);
        printWindow.document.close();
        printWindow.print();
    };


    const handleViewDetail = (record) => {
        setSelectedRecord(record);
        setShowDetail(true);
    };

    const handleCloseDetail = () => {
        setShowDetail(false);
        setSelectedRecord(null);
    };

    return (
        <div>
            <h3>Quản lý Bệnh án</h3>
            <button className="btn btn-primary my-3" onClick={() => setShowForm(true)}>Thêm Bệnh án</button>
            {showForm && (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="patient_id">Bệnh nhân:</label>
                    <select
                        id="patient_id"
                        name="patient_id"
                        className="form-control"
                        value={formData.patient_id}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Chọn Bệnh nhân</option>
                        {patients.map(patient => (
                            <option key={patient.id} value={patient.id}>{patient.fullname}</option>
                        ))}
                    </select>
                    <label htmlFor="doctor_id">Bác sĩ:</label>
                    <select
                        id="doctor_id"
                        name="doctor_id"
                        className="form-control"
                        value={formData.doctor_id}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Chọn Bác sĩ</option>
                        {doctors.map(doctor => (
                            <option key={doctor.id} value={doctor.id}>{doctor.fullname}</option>
                        ))}
                    </select>
                    <label htmlFor="diagnosis">Chẩn đoán:</label>
                    <textarea
                        id="diagnosis"
                        name="diagnosis"
                        value={formData.diagnosis}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <label htmlFor="treatment">Điều trị:</label>
                    <textarea
                        id="treatment"
                        name="treatment"
                        value={formData.treatment}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <label htmlFor="record_date">Ngày ghi nhận:</label>
                    <input
                        type="date"
                        id="record_date"
                        name="record_date"
                        value={formData.record_date}
                        onChange={handleChange}
                        required
                    />
                    <div className="d-flex justify-content-center">
                        <button className="w-25 m-3" type="submit">{editingRecord ? 'Cập nhật' : 'Thêm'} Bệnh án</button>
                        <button className="w-25 m-3" type="button" onClick={() => setShowForm(false)}>Hủy</button>
                    </div>
                </form>
            )}
            <table className="table">
                <thead>
                <tr>
                    <th>Tên Bệnh nhân</th>
                    <th>Tên Bác sĩ</th>
                    <th>Chẩn đoán</th>
                    <th>Điều trị</th>
                    <th>Ngày ghi nhận</th>
                    <th>Hành động</th>
                </tr>
                </thead>
                <tbody>
                {records.map(record => (
                    <tr key={record.id}>
                        <td>{record.patient_name}</td>
                        <td>{record.doctor_name}</td>
                        <td>{record.diagnosis}</td>
                        <td>{record.treatment}</td>
                        <td>{new Date(record.record_date).toLocaleDateString()}</td>
                        <td>
                            <button className="btn-icon edit-icon m-2" onClick={() => handleEdit(record)} title="Sửa">
                                <i className="bi bi-pencil-fill"></i>
                            </button>
                            <button
                                className="btn-icon delete-icon"
                                onClick={() => {
                                    if (window.confirm('Bạn có chắc chắn muốn xóa bệnh án này không?')) {
                                        handleDelete(record.id);
                                    }
                                }}
                                title="Xóa"
                            >
                                <i className="bi bi-trash-fill"></i>
                            </button>
                            <button className="btn-icon view-icon" onClick={() => handleViewDetail(record)} title="Xem chi tiết">
                                <i className="bi bi-eye-fill"></i>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Modal xem chi tiết bệnh án */}
            {showDetail && selectedRecord && (
    <div className="modal show" style={{ display: 'block' }} onClick={handleCloseDetail}>
        <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-center w-100">HỒ SƠ ĐIỀU TRỊ RĂNG</h5>
                    <button type="button" className="close" onClick={handleCloseDetail}>
                        <span>&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="text-center mb-3">
                        <h6>NHA KHOA DENTAL CARE</h6>
                        <p>Địa chỉ: Xuân Khánh, Ninh Kiều, Cần Thơ</p>
                        <p>Điện thoại: 0123456789</p>
                    </div>
                    <p><strong>Họ và tên:</strong> {selectedRecord.patient_name}</p>
                    <p><strong>Bác sĩ điều trị:</strong> {selectedRecord.doctor_name}</p>
                    <p><strong>Ngày khám:</strong> {new Date(selectedRecord.record_date).toLocaleDateString()}</p>
                    <p><strong>Chẩn đoán:</strong> {selectedRecord.diagnosis}</p>
                    <p><strong>Điều trị:</strong> {selectedRecord.treatment}</p>
                    <hr />
                    <h6 className="text-center">PHIM CHỤP X-QUANG</h6>
                    <div className="text-center">
                        <img
                            src="/path/to/xray-image.jpg" // Thay bằng đường dẫn ảnh chụp X-quang
                            alt="Phim chụp X-quang"
                            style={{ maxWidth: '100%' }}
                        />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleCloseDetail}>Đóng</button>
                    <button type="button" className="btn btn-primary" onClick={() => handlePrint(selectedRecord)}>In</button>
                </div>
            </div>
        </div>
    </div>
)}

        </div>
    );
};

export default MedicalRecordList;
