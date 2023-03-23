const express=require("express");
const router=express.Router();
const Hospital=require("../Controllers/HospitalController");

router.route("/allhospitals")
    .get(Hospital.Allhospitals)

router.route("/hospitalbyid/:id")
    .get(Hospital.HospitalById)
module.exports=router;