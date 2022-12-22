import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function Adminlogin() {
  const [admin, setAdmin] = useState({
    name: '',
    password: ''
  })
  const [error,setError] = useState(false)
  const navigate = useNavigate()
  console.log(admin);
  const handleChange = e => {
    const { name, value } = e.target
    setAdmin({
      ...admin,
      [name]: value

    })
  }

  const register = (e) =>{
    const {name,password} = admin
    if(name && password){
        axios.post('http://localhost:4000/admin/adminlogin',admin)
        .then((response=>{
          console.log("sdesed");
            // console.log("admin",response);
            if(response.data.msg=="login"){
                navigate('/admin/application')
            }else{
              setError(true)
                e.preventDefault()
            }
            
        }))
    }else{
      
      e.preventDefault()
    }
}
  return (
    <div>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>

            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Admin Login
            </h2>
            {error && <h2 className='mt-6 text-center text-red-600'>Invalid Name or Password</h2>}
          </div>

          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="name"
                type="email"
                onChange={handleChange}
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <br />
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={register}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">

              </span>
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Adminlogin
