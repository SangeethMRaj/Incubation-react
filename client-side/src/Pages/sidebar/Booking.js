import axios from 'axios'
import React, { useEffect, useState,useReducer } from 'react'

function Booking() {
    // const [app, setApp] = useState([])
    const [confirm,setConfirm] = useReducer(x=>x+1,0)
    const [modal, setModal] = useState(false)
    const [booked,setBooked] = useState(false)
    const [slotbook, setSlotBook] = useState([])
    const [form, setForm] = useState([])
    const [slotId, setSlotId] = useState('')
    const [formId, setFormId] = useState()
    const [doSlotBook,setDoSlotBook] = useState([])
   
    useEffect(() => {

        async function show() {
            const approved = await axios.get("http://localhost:4000/admin/getslot")
            console.log('appproved slot');
            console.log(approved);
            if (approved) {
                setSlotBook(approved.data)
            }
        }
        show()
        // async function viewData() {
        //     console.log('qwert');
        //     const appData = await axios.get("http://localhost:4000/admin/application")
        //     if (appData) {
        //         setForm(appData.data)
        //     }
        // }
        // viewData()
        
    }, [confirm])

    useEffect((e)=>{
        async function FormBook(){
            const doform = await axios.get("http://localhost:4000/admin/doform")
            if(doform){
                setForm(doform.data)
            }
        }
        FormBook()

       

        
    })

    useEffect(()=>{
        async function Slotbook(){
            const doSlot = await axios.get("http://localhost:4000/admin/doslot")
            if(doSlot){
                setDoSlotBook(doSlot)
            }
        }
        Slotbook()
    },[confirm])
    
    const Bookslot = (e,status)=>{
        if(status==="booked"){
            setBooked(!booked)
        }else{
            setModal(!modal)
        }
        
    }

    const BookSlot = () => {
        console.log("formId in bookslot",formId);
        console.log("slotId in bookslot",slotId);
        const  id = {formId,slotId} 
        console.log("Id",id);
        if(id.formId!== undefined){

            axios.post("http://localhost:4000/admin/bookslot",id).then((res)=>{
                setConfirm()
                setFormId() 
            })
        }
         
       
    }

    // const changeFormId = (e)=>{
    //     const { name, value } = e.target
    //     setFormId({
    //         ...setForm,
    //         [name]: value
    //     })
    //     console.log("value and name",value,name);
    // }


    // const createSlots = () => {
    //     const { slot } = slotbook
    //     if (slot) {
    //         axios.post("http://localhost:4000/admin/createslots")

    //     }
    // }
    return (
        <div>

             <div class="grid ml-32 hover md:grid-cols-4 sm:grid-cols-2 xs-grid-cols-1 mt-16" >
                {
                    slotbook.map((slots, index) => ( 
                        <div key={index} onClick={(e) => {
                            Bookslot(e,slots.status)
                            setSlotId(slots._id)
                            // setModal(!modal)
                        }} className='w-32 h-32 p-12 mt-5 bg-green-600 hover:scale-110  cursor-pointer' style={{backgroundColor:slots.status === "booked" ? "rgba(220 ,38 ,38)" :  "rgba(0, 255, 0)"}}>
                            <h1>{slots.slot}</h1>
                        </div>
                    ))
                }

            </div>

            {modal && <div id="popup-modal" tabindex="-1" class="overflow-y-auto ml-32  fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center" aria-hidden="true">
                <div class="relative ml-96 mt-52 w-full max-w-md h-full md:h-auto">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button onClick={() => {
                            setModal(!modal)
                        }} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <div class="p-6 text-center">
                            <h1 class="mb-5 text-3xl font-normal underline text-gray-500 dark:text-blue-400">Book Slots</h1>




                            <div className="relative w-full lg:max-w-sm">
                                <select onChange={(e)=>{
                                    setFormId(e.target.value)
                                }} className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                                    <option selected>Choose</option>
                                    {
                                        form.map((formData,index)=>(
                                            <option value={formData._id}>{formData.companyname}</option>

                                        ))
                                    }

                                </select>
                            </div>

                            <button onClick={(e)=>{
                                BookSlot(e,formId,slotId)
                                setModal(!modal)
                            }} data-modal-toggle="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 mt-2 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                Book
                            </button>

                        </div>
                    </div>
                </div>
            </div>}

            {booked && <div id="popup-modal" tabindex="-1" class="overflow-y-auto ml-32  fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center" aria-hidden="true">
                <div class="relative ml-96 mt-52 w-full max-w-md h-full md:h-auto">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button onClick={() => {
                            setBooked(!booked)
                        }} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <div class="p-6 text-center">
                            <h1 class="mb-5 text-3xl font-normal  text-red-600 ">The Slot is already booked</h1>


                            <button onClick={()=>{
                                
                                setBooked(!booked)
                            }} data-modal-toggle="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 mt-2 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                Ok
                            </button>

                        </div>
                    </div>
                </div>
            </div>}

        </div>
    )
}

export default Booking
