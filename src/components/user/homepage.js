import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './header';
import Banner from './banner';
import MainContent from './mainContent';
import Footer from './footer';
import QuickActions from './quickActions';
import useUserStore from '../../store/userStore';

function Homepage() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <MainContent />
      <QuickActions />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default Homepage;
