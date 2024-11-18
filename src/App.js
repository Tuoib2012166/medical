import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/user/homepage';
import Login from './components/user/login';
import Register from './components/user/register'; 
import Pricelist from './components/user/priceList';
import Braces from './components/user/braces';
import TopScroll from './components/user/topScroll';
import News from './components/user/news';
import NewsImplant from './components/user/newsImplant';
import Admin from './components/admin/admin';
import Doctor from './components/doctor/doctor';
import DoctorList from "./components/user/DoctorList";
import ServicePage from "./components/user/ServicePage";
import Appointments from "./components/user/appointments";
import AppointmentForm from './components/user/AppointmentForm';
import RangSu from './components/user/svNews/RangSu'; // Import component RangSu
import Implant from './components/user/svNews/Implant'; // Import component Implant
import NiengRang from './components/user/svNews/NiengRang'; // Import component Niềng Răng
import MatDanSuVeneer from './components/user/svNews/MatDanSuVeneer'; // Import component Mặt Dán Sứ Veneer
import TayTrangRang from './components/user/svNews/TayTrangRang'; // Import component Tẩy Trắng Răng
import NhoRangKhon from './components/user/svNews/NhoRangKhon'; // Import component Nhổ Răng Khôn
import BenhLyNhaChu from './components/user/svNews/BenhLyNhaChu'; // Import component Bệnh Lý Nha Chu
import DieuTriTuy from './components/user/svNews/DieuTriTuy'; // Import component Điều Trị Tủy
import HanTramRang from './components/user/svNews/HanTramRang'; // Import component Hàn Trám Răng
import ChamSocRangMieng from './components/user/svNews/ChamSocRangMieng'; // Import component Chăm Sóc Răng Miệng
import BS_Khanh from './components/user/doctors/BS_Khanh';
import DoctorDetail from './components/user/doctors/DoctorDetail';
import BS_Trang from './components/user/doctors/BS_Trang';
import BS_HoaiAnh from './components/user/doctors/BS_Anh';
import BS_Duc from './components/user/doctors/BS_Duc';
import BS_Quoc from './components/user/doctors/BS_Quoc';
import BS_BKhanh from './components/user/doctors/BS_BKhanh';
import BS_Xuyen from './components/user/doctors/BS_Xuyen';
import BS_Tan from './components/user/doctors/BS_Tan';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />   
          <Route path="/braces" element={<Braces />} />  
          <Route path="/priceList" element={<Pricelist />} />
          <Route path="/doctorList" element={<DoctorList />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/AppointmentForm" element={<AppointmentForm />} />
          <Route path="/news" element={<News />} />
          <Route path="/newsImplant" element={<NewsImplant />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/doctor/*" element={<Doctor />} />
          <Route path="/rangsu" element={<RangSu />} /> 
          <Route path="/implant" element={<Implant />} /> 
          <Route path="/niengrang" element={<NiengRang />} />
          <Route path="/MatDanSuVeneer" element={<MatDanSuVeneer />} />
          <Route path="/taytrangrang" element={<TayTrangRang />} />
          <Route path="/nhorangkhon" element={<NhoRangKhon />} />
          <Route path="/BenhLyNhaChu" element={<BenhLyNhaChu />} />
          <Route path="/dieutrituy" element={<DieuTriTuy />} />
          <Route path="/hantramrang" element={<HanTramRang />} />
          <Route path="/chamsocrangmieng" element={<ChamSocRangMieng />} />
          <Route path="/:doctorName" element={<DoctorDetail />} />
          <Route path="/bs.đinh-ngọc-khánh" element={<BS_Khanh />} /> 
          <Route path="/bs.mai-thị-trang" element={<BS_Trang />} /> 
          <Route path="/bs.lê-thị-hoài-anh" element={<BS_HoaiAnh />} />
          <Route path="/bs.đỗ-văn-đức" element={<BS_Duc />} />
          <Route path="/bs.phạm-ngọc-quốc" element={<BS_Quoc />} />
          <Route path="/bs.nguyễn-gia-bảo-khánh" element={<BS_BKhanh/>} />
          <Route path="/bs.đặng-thị-hà-xuyên" element={<BS_Xuyen />} />
          <Route path="/bs.nguyễn-hữu-tân" element={<BS_Tan />} />
          <Route path="/hantramrang" element={<HanTramRang />} />
          <Route path="/chamsocrangmieng" element={<ChamSocRangMieng />} />
        </Routes>
        <TopScroll />
      </div>
    </Router>
  );
}

export default App;
