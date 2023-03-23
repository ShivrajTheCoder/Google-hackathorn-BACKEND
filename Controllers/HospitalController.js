const exp=module.exports;
const Hospital=require("../models/Hospital/HospitalModels");

exp.Allhospitals=async(req,res,next)=>{
    await Hospital.find({})
        .then(resp=>{
            if(resp.length >0){
                return res.status(200).json({
                    data:resp,
                    message:"data found"
                })
            }
            return res.status(200).json({
                data:resp,
                message:"no data found"
            })
        })
        .catch(err => {
            return res.status(500).json({
                message: "error finding hospitals",
                error: err
            })
        })
}

exp.HospitalById=async(req,res,next)=>{
    const {id}=req.params;
    await Hospital.findById(id)
        .then(resp=>{
            console.log(resp);
            if(resp){
                return res.status(200).json({
                    data:resp,
                    message:"Hospital found",
                })
            }
            return res.status(200).json({
                data:[],
                message:"No hospital found"
            })
        }).catch(err=>{
            return res.status(500).json({
                error:err,
                message:"No Hospital found, some error occured"
            })
        })
}