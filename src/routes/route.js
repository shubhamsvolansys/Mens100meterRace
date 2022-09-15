const express = require("express");
const router = new express.Router();
const mensRanking = require("../modals/modal");
router.post("/mens",async(req,res)=>{
    try{

        const addingMens = new mensRanking(req.body);
        console.log(addingMens);
        console.log(req.body);
        const insertMen = await addingMens.save();
        res.status(201).send(insertMen) 
    }catch(e){
        console.log(e);
        res.status(400).send(e);
    }
})
router.get("/mens",async(req,res)=>{
    try{
        const getMens = await mensRanking.find({}).sort({"name":1});    
        res.status(201).send(getMens) 
    }catch(e){
        console.log(e);
        res.status(400).send(e);
    }
})

router.get("/mens/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const getMen = await mensRanking.findById({_id:_id});    
        res.status(201).send(getMen) 
    }catch(e){
        res.status(400).send(e);
    }
})

router.patch("/mens/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const UpdateMen = await mensRanking.findByIdAndUpdate(_id,req.body,{new: true});    
        res.status(201).send(UpdateMen) 
    }catch(e){
        res.status(400).send(e);
    }
});

router.delete("/mens/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const DeleteMen = await mensRanking.findByIdAndDelete(_id);    
        res.status(201).send(DeleteMen) 
    }catch(e){
        res.status(400).send(e);
    }
})

router.post("/register", async(req,res)=>{
    try{
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        if(password===cpassword){
            const logindetails = new mensRanking({
                name:req.body.name,
                email: req.body.email,
                password:password,
                confirmpassword:cpassword
            })
            console.log("the sucess part is", logindetails);
            const token = await logindetails.generateAuthToken();
            console.log("71",token);
            const registereds = await logindetails.save();
            res.status(201).send(registereds);
        }

    }catch(e){
        res.status(400).send(e);
    }

})

router.post("/login", async(req,res)=>{
    try{
        const password = req.body.password;
        const email = req.body.email;
        const userEmail = await mensRanking.findOne({email});
        const ismatch = await bcrypt.compare(password, userEmail.password);
        if(ismatch){
          console.log("login Succcessful");
            res.status(201).send(registered);
        }else{
            console.log("login unsuccessful");
        }

    }catch(e){
        res.status(400).send(e);
    }

})
module.exports= router;