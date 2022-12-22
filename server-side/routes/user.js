const express = require('express')
const router = express.Router()
const multer = require('multer')
const signUpTemplateCopy = require('../models/signUpModels')
const application = require('../models/applicationFormData')

router.post('/signup',(request,response)=>{
    console.log(request.body);
    const signedUpUser = new signUpTemplateCopy({
        username:request.body.username,
        email:request.body.email,
        phone:request.body.phone,
        password:request.body.password
    })
    signedUpUser.save()
    .then(data=>{
        response.json(data)
    }).catch(err=>{
        response.json(err)
    })
})

router.post('/login',async(request,response)=>{
    console.log("rdgfsfdsdf");
    let Email = request.body.email;
    let password = request.body.password;
    console.log(Email);
    let user = await signUpTemplateCopy.findOne({email:Email})
    console.log('user',user);
    let error = "No User Exist"
    if(user){
        if(user.password === password){
            console.log('pass',password);
            response.json({msg:"login"})
        }else{
            response.json({msg:"Invalid password"})
        }
    }else{
        response.json({error})
    }
})

const fileStorageEngine=multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,'./public/images')
    },
    filename:(req,file,cb)=>{
      cb(null,Date.now() + '--'+ file.originalname);
    }
  }); 
  
  const upload=multer({storage:fileStorageEngine})

router.post('/home',upload.single('Images'),async(request,response)=>{
    console.log('fdsafgsagsfgdfsg,');
    console.log(request.body);
    
      request.body.file=request.file.originalname
      console.log(request.body.file);
    const applicationData = new application({
        fname:request.body.fname,
        lname:request.body.lname,
        email:request.body.email,
        phone:request.body.phone,
        city:request.body.city,
        state:request.body.state,
        companyname:request.body.companyname,
        Images:request.body.file,
        unique:request.body.unique,
        describe:request.body.describe,
        market:request.body.market,
        potential:request.body.potential

    })
    applicationData.save().then(data=>{
        console.log('response');
        console.log(data);
        response.json(data)
    }).catch(err=>{
        response.json(err)
    })

})

module.exports = router
