import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function Form() {
  const navigate = useNavigate()
  const { register, formState: { errors }, handleSubmit } = useForm()
  const [form, setform] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    companyname: '',
    Images: '',
    unique: '',
    describe: '',
    market: '',
    potential: ''
  })
  console.log(form);

  const handleChange = e => {
    const { name, value } = e.target
    setform({
      ...form,
      [name]: value
    })
    console.log('werrtttyy');
  }

  const fileUpload = (e) => {
    const image = e.target.files[0]
    setform({
      ...form,
      Images: image
    })
    console.log('file upload');
  }

  const submit = async (e) => {
    console.log('yes done');
    const Data = new FormData();
    for (let key in form) {
      Data.append(key, form[key])
      console.log('abcdefgh');
    }
    console.log('sdfsdafasfasdfsadf');
    const { fname, lname, email, phone, city, state, companyname, Images, unique, describe, market, potential } = form
    
    if (fname && lname && email && phone && city && state && companyname && Images && unique && describe && market && potential) {
      
      axios.post("http://localhost:4000/home", Data)
        .then(response => {
          setform({
            fname: '',
    lname: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    companyname: '',
    Images: '',
    unique: '',
    describe: '',
    market: '',
    potential: ''
          })
          navigate('/confirm')
        })
    } else {
      console.log('failed');
      e.preventDefault()
    }
  }


  return (
    <div>
      <div class="flex min-h-full items-center justify-center py-12 bg-white px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w bg-slate-300 border-4 border-gray-800/100 space-y-8 rounded-lg">
          <div>

            <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Application Form</h2>

          </div>
          <form class="mt-8 space-y-6" >
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px grid grid-cols-2  shadow-sm ml-20">
              <div>
                <label for="email-address" class="sr-only">First Name</label>
                <input {...register("fname", { required: 'First name is required' })}
                  id="email-address" name="fname" onChange={handleChange} type="text" autocomplete="email" placeholder='First Name' required class=" w-5/6 h-10 rounded-xl relative block w-full appearance-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                <error className="text-red-600">
                  {errors.fname && (<small className='text-red-500'>{errors.fname.message}</small>)}
                </error>
              </div>
              <div>
                <label for="password" class="sr-only">Last Name</label>
                <input {...register("lname", { required: 'Last name is required' })}
                  id="password" name="lname" type="text" onChange={handleChange} value={form.lname} autocomplete="current-password" placeholder='Last Name' required class="w-5/6 h-10 rounded-xl relative block w-full appearance-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                  <error className="text-red-600">
                  {errors.lname && (<small className='text-red-500'>{errors.lname.message}</small>)}
                </error>
              </div>
            </div>


            <div className="-space-y-px grid grid-cols-2 shadow-sm ml-20">
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input {...register("email", { required: 'Email is required' })}
                  id="email-address" name="email" type="email" onChange={handleChange} value={form.email} placeholder="Email" autocomplete="email" required class=" w-5/6 h-10 rounded-xl  relative block w-full appearance-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                  <error className="text-red-600">
                  {errors.email && (<small className='text-red-500'>{errors.email.message}</small>)}
                </error>
              </div>
              <div>
                <label for="password" class="sr-only">Phone</label>
                <input {...register("phone", { required: 'Phone No: is required' })}
                  id="password" name="phone" type="number" onChange={handleChange} value={form.phone} placeholder="Phone" autocomplete="current-password" required class="w-5/6 h-10 rounded-xl relative block w-full appearance-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                  <error className="text-red-600">
                  {errors.phone && (<small className='text-red-500'>{errors.phone.message}</small>)}
                </error>
              </div>
            </div>

            <div className="-space-y-px grid grid-cols-2 shadow-sm ml-20">
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input {...register("city", { required: 'City is required' })}
                  id="email-address" name="city" type="text" onChange={handleChange} value={form.city} placeholder="City" autocomplete="email" required class=" w-5/6 h-10 relative rounded-xl block w-full appearance-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                  <error className="text-red-600">
                  {errors.city && (<small className='text-red-500'>{errors.city.message}</small>)}
                </error>
              </div>
              <div>
                <label for="password" class="sr-only">Phone</label>
                <input {...register("state", { required: 'State is required' })}
                  id="password" name="state" type="text" onChange={handleChange} value={form.state} placeholder="State" autocomplete="current-password" required class="w-5/6 h-10 rounded-xl relative block w-full appearance-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                  <error className="text-red-600">
                  {errors.state && (<small className='text-red-500'>{errors.state.message}</small>)}
                </error>
              </div>
            </div>

            <div className="-space-y-px grid grid-cols-2 shadow-sm ml-20">
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input {...register("companyname", { required: 'Company name is required' })}
                  id="email-address" name="companyname" onChange={handleChange} value={form.companyname} type="text" placeholder="Company Name" autocomplete="email" required class=" w-5/6 h-10 relative rounded-xl block w-full appearance-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                  <error className="text-red-600">
                  {errors.companyname && (<small className='text-red-500'>{errors.companyname.message}</small>)}
                </error>
              </div>
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input {...register("Images", { required: 'Images is required' })}
                id="email-address" name="Images" type="file" onChange={(e) => fileUpload(e)} placeholder="Company Name" autocomplete="email" required class=" w-5/6 h-10 bg-white relative rounded-xl block w-full appearance-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                <error className="text-red-600">
                  {errors.Images && (<small className='text-red-500'>{errors.Images.message}</small>)}
                </error>
              </div>

            </div>

            <div className="-space-y-px grid grid-cols-2 shadow-sm ml-20">
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <textarea {...register("unique", { required: 'Answer is required' })}
                id="email-address" name="unique" onChange={handleChange} type="text" value={form.unique} placeholder="What is unique about your solution" autocomplete="email" required class=" w-5/6 h-20 relative rounded-xl block w-full appearance-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                <error className="text-red-600">
                  {errors.unique && (<small className='text-red-500'>{errors.unique.message}</small>)}
                </error>
              </div>
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <textarea {...register("describe", { required: 'Answer is required' })}
                id="email-address" name="describe" onChange={handleChange} type="text" value={form.describe} placeholder="Describe your company and products" autocomplete="email" required class=" w-5/6 h-20 relative rounded-xl block w-full appearance-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                <error className="text-red-600">
                  {errors.describe && (<small className='text-red-500'>{errors.describe.message}</small>)}
                </error>
              </div>

            </div>

            <div className="-space-y-px grid grid-cols-2 shadow-sm ml-20">
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <textarea {...register("market", { required: 'Answer is required' })}
                id="email-address" name="market" onChange={handleChange} value={form.market} type="text" placeholder="How do you market your products" autocomplete="email" required class=" w-5/6 h-20 relative rounded-xl block w-full appearance-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                <error className="text-red-600">
                  {errors.market && (<small className='text-red-500'>{errors.market.message}</small>)}
                </error>
              </div>
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <textarea {...register("potential", { required: 'Answer is required' })}
                id="email-address" name="potential" onChange={handleChange} value={form.potential} type="text" placeholder="What is your potential market size of the product" autocomplete="email" required class=" w-5/6 h-20 relative rounded-xl block w-full appearance-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                <error className="text-red-600">
                  {errors.potential && (<small className='text-red-500'>{errors.potential.message}</small>)}
                </error>
              </div>

            </div>

            <div>
              <button type="submit" onClick={handleSubmit(submit)} class="group w-1/4 relative flex w-full mx-auto mb-5 justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">

                  <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />

                </span>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
