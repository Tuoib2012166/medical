import React from 'react';
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import Doctor from "./Doctor";

function DoctorList() {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="main-content">
        


                    <Doctor />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DoctorList;