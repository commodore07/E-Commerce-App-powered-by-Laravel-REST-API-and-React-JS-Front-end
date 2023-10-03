import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../layouts/admin/Navbar';
import Sidebar from '../../layouts/admin/Sidebar';
import Footer from '../../layouts/admin/Footer';
import Breadcrumb from '../../layouts/admin/Breadcrumb';

const Home = () => {
  return (
    <div>
      <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
        <Navbar />
        <Sidebar />

        <div class="page-wrapper">
          <Breadcrumb />
          <div class="container-fluid">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home