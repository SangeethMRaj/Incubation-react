const express = require('express')
const router = express.Router()
const adminLogin = require('../models/admin')
const application = require('../models/applicationFormData')
const slot = require('../models/slots')

router.post('/adminsignup',(request,response)=>{
    console.log(request.body);
    const adminlogin = new adminLogin({
        name:request.body.name,
        password:request.body.password
    })
    adminlogin.save()
    .then(data=>{
        response.json(data)
    }).catch(err=>{
        response.json(err)
    })
})

router.post('/adminlogin',async(req,res)=>{
    let Name = req.body.name;
    let password = req.body.password;
    console.log(Name,password);
    let user = await adminLogin.findOne({name:Name})
    console.log('user',user);
    let error = "No User Exist"
    if(user){
        if(user.password === password){
            console.log('pass',password);
            res.json({msg:"login"})
        }else{
            res.json({msg:"Invalid password"})
        }
    }else{
        res.json({error})
    }
})

router.get('/application',async(req,res)=>{
    const applications = await application.find({status:"pending"})
    if(applications){
        res.json(applications)
    }else{
        res.json({msg:"No applications left"})
    }
})

router.post('/approve/:id',async(req,res)=>{
    
    await application.findByIdAndUpdate(req.params.id,{status:"Approved"})
    res.json()
})

router.post('/decline/:id',async(req,res)=>{
    console.log('in route');
    console.log(req.params.id);
    await application.findByIdAndUpdate(req.params.id,{status:"Declined"})
    res.json()
})

router.get('/approved',async(req,res)=>{
    const approvedApplication = await application.find({status:"Approved"})
    if(approvedApplication){
        res.json(approvedApplication)
    }else{
        res.json({msg:"No Approved Application"})
    }
})

router.get('/declined',async(req,res)=>{
    const declinedapplication =  await application.find({status:"Declined"})
    if(declinedapplication){
        res.json(declinedapplication)
    }else{
        res.json({msg:"No Declined Application"})
    }
})

router.post('/createslots',(req,res)=>{
    const bookslot = new slot({
        slot:req.body.slot
    })
    bookslot.save().then(data=>{
        res.json(data)
    }).catch(err=>{ 
        response.json(err) 
    })
})

router.get('/getslot',async(req,res)=>{
    const bookedslots=await slot.find()
    if(bookedslots){
        res.json(bookedslots)
    }else{
        res.json({msg:"No Slots Available"})
    }
})

router.post('/bookslot',async(req,res)=>{
    console.log(req.body.formId); 
    console.log(req.body.slotId);
    const slots = req.body.slotId
    const form = req.body.formId
    console.log("slot form" ,slot,form);
    await slot.findByIdAndUpdate({_id:slots},{$set:{status:"booked"}})
    await application.findByIdAndUpdate({_id:form},{$set:{status:"booked"}})
    res.json()  
})

router.get('/doform',async(req,res)=>{
    const doform = await application.find({status:"Approved"}) 
    if(doform){
        res.json(doform)
    }
})

router.get('/doslot',async(req,res)=>{
    const doslot = await slot.find({status:"booked"})
    if(doslot){
        res.json(doslot)
    } 
}) 
module.exports = router  