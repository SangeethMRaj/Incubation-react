import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from '../../Component/Header/AdminHeader'
import SideBar from '../../Component/SideBar/SideBar'

function AdminLayout() {
  return (
    <div className='flex'>
        <div>
        <SideBar/>
        </div>
        <div className='w-full'>
            <AdminHeader/>
            <div className='p-16'>
            <Outlet/>
            </div>
       
        </div>
      
    </div>
  )
}

export default AdminLayout
