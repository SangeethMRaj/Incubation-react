import axios from 'axios'
import React,{useState,useEffect} from 'react'

function Declined() {
    const [app,setApp] = useState([])
    useEffect(()=>{
        async function show(){
            const declined = await axios.get("http://localhost:4000/admin/declined")
            if(declined){
                setApp(declined.data)
            }
        }
        show()
    })
  return (
    <div>
      <div class="overflow-x-auto relative rounded-md mt-16">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" class="py-3 px-6">
                    Sl No:
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
            </tr>
        </thead>
        <tbody>
            {
                app.map((app,index)=>(

                
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="py-4 px-6">
                    {index+1}
                </td>
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {app.companyname}
                </th>
                <td class="py-4 px-6">
                    {app.fname}
                </td>
                <td class="py-4 px-6">
                    {app.state}
                </td>
                <td style={{color:"red"}} class="py-4 px-6">
                    {app.status}
                </td>
            </tr>
            ))
        }
            
        </tbody>
    </table>
</div>
    </div>
  )
}

export default Declined
