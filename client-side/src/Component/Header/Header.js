import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../Header/header.css'
import Swal from 'sweetalert2'


function Header() {
  const navigate = useNavigate()
  const logout = ()=>{
    Swal.fire({
      title: "Log out",
      text: "Are you sure you want to logout?",
      icon: "success",
      confirmButtonText: "OK",
      showCancelButton:true
    }).then((result)=>{
      if(result.isConfirmed){
        navigate('/')
      }
     
    })
  }
  return (
    <div>
      <nav class="bg-black sticky stickywidth">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
    <div class="relative flex h-16 items-center justify-between ">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
       
        
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            
          <h1 className='mt-1' style={{color:"white"}}>INQUB</h1>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        

        <div class="relative ml-3">
          <div>
            <button style={{color:"white"}} onClick={logout} type="button" class="flex" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
             Logout
              
            </button>
          </div>

          
        </div>
      </div>
    </div>
  </div>

 
  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pt-2 pb-3">
     
    <h1 style={{color:"white"}}>INQUB</h1>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
