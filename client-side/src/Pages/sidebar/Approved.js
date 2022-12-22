import axios from 'axios'
import React,{useEffect,useState} from 'react'

function Approved() {
    const [app,setApp] = useState([])
    console.log('app in approved');
    console.log(app);
    useEffect(()=>{
        async function show(){
            const Approved = await axios.get("http://localhost:4000/admin/approved")
            if(Approved){
                setApp(Approved.data)
            }
        }
        show()
    },[])
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
                app.map((item,index)=>(

               
            <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="py-4 px-6">
                    {index+1}
                </td>
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.companyname}
                </th>
                <td class="py-4 px-6">
                    {item.fname}
                </td>
                <td class="py-4 px-6">
                    {item.state}
                </td>
                <td style={{color:"green"}} class="py-4 px-6">
                    {item.status}
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

export default Approved
