import React from 'react'
import AdminNavbar from '../Navbar/AdminNavbar';
import { Outlet } from 'react-router-dom';

const Admin = () => {
  return (
    <>
      
      <AdminNavbar/>
      <Outlet />
    </>
  );
}

export default Admin
