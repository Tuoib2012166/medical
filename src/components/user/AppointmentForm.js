import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/braces.css';
import Footer from './footer';
import Header from './header';
import GetForm from './getForm';

const AppointmentForm = () => {
    return (
        <>
        <Header />
        <GetForm/> 
        <Footer />
        </>    
    );
};

export default AppointmentForm;
