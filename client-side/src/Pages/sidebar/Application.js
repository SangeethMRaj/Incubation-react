import React,{useState,useEffect,useReducer} from 'react'
import axios from 'axios'
import '../../Pages/sidebar/Application.css'
import '../../Component/Header/header.css'


function Application() {
    const [app,setApp] = useState([])
    const [status,setStatus] = useReducer(x=>x+1,0)
    const [modal,setModal] = useState(false)
    console.log(app);
    useEffect(()=>{
        console.log('vcbvcbcvxbcvbcvb');
        async function viewData(){
            console.log('qwert');
            const appData = await axios.get("http://localhost:4000/admin/application")
            if(appData){
                setApp(appData.data)
            }
        }
        viewData()
    },[status])

    const Approve = (e,id)=>{
        
        axios.post("http://localhost:4000/admin/approve/"+id).then((response)=>{
            console.log('in axios');
            console.log(response);
        })
        setStatus()
    }

    const Decline = (e,id)=>{
        console.log('onclick approve');
        console.log(id);
        axios.post("http://localhost:4000/admin/decline/"+id).then((response)=>{
            console.log('back response');
            console.log(response);
        })
        setStatus()
    }
    
  return (
    <div>
      <div class="overflow-x-auto relative rounded-md mt-16">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 scroll-table">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" class="py-3 px-6">
                    Sl.No
                </th>
                <th scope="col" class="py-3 px-6">
                    Company name
                </th>
                <th scope="col" class="py-3 px-6">
                    Name
                </th>
                <th scope="col" class="py-3 px-6">
                    State
                </th>
                <th scope="col" class="py-3 px-6">
                    Status
                </th>
                <th scope="col" class="py-3 px-6">
                    View
                </th>
                <th scope="col" class="py-3 px-6">
                    Approve
                </th>
                <th scope="col" class="py-3 px-6">
                    Decline
                </th>
            </tr>
        </thead>
        <tbody>
            {
                app.map((item,index)=>(

                
            <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {index+1}
                </th>
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {item.companyname}
                </th>
                <td class="py-4 px-6">
                    {item.fname}
                </td>
                <td class="py-4 px-6">
                    {item.state}
                </td>
                <td style={{color:"orange"}} class="py-4 px-6">
                    {item.status}
                </td>
                <td  class="py-4 px-6">
                    <button onClick={()=>{
                        setModal(!modal)
                    }}  className='bg-blue-600 view'>View</button>
                </td>
               
                <td  class="py-4 px-6">
                    <button onClick={(e)=>{
                        Approve(e,item._id)
                    }} className='bg-green-600 approve'>Approve</button>
                </td>
                <td  class="py-4 px-6">
                    <button onClick={(e)=>{
                        Decline(e,item._id)
                    }} className='bg-red-600 approve'>Decline</button>
                </td>

                {
                    modal && <div id="popup-modal" tabindex="-1" class="overflow-y-auto ml-32  fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center" aria-hidden="true">
                    <div class="relative ml-96 mt-52 w-full max-w-md h-full md:h-auto">
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button onClick={()=>{
                                setModal(!modal)
                            }} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                            <div class="p-6 text-center">
                                <h1 class="mb-5 text-3xl font-normal underline text-gray-500 dark:text-gray-400">{item.companyname}</h1>
                                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Name: {item.fname}</h3>
                                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">State: {item.state}</h3>
                                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Phone No: {item.phone}</h3>
                                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Status: {item.status}</h3>
                                <button onClick={()=>{
                                    setModal(!modal)
                                }} data-modal-toggle="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                    OK
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                }
            </tr>
                ))
        }
            
        </tbody>
    </table>
</div>
    </div>
  )
}

export default Application
