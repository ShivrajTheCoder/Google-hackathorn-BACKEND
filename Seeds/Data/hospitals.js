let xlsx=require('xlsx');
const mongoose=require("mongoose");
const HospitalModels = require('../../models/User/HospitalModels');
let workbook=xlsx.readFile("D:/Coding/GOOGLE-HACKATHORN/BACKEND/Seeds/Data/HOSPITAL_LIST_SHIVRAJ.xlsx");
const express=require("express");
const app=express();
const cors=require("cors");
const bodyParser = require("body-parser");
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const DB_URL = process.env.DB_URL;

main().then(() => {
    console.log("Connected!!");
}).catch(err => {
    console.log(err)
});

async function main() {
    await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
}


let worksheet=workbook.Sheets[workbook.SheetNames[0]];

for(let index=3;index<30;index++){
  const id=worksheet[`A${index}`].v;
  const name=worksheet[`B${index}`].v;
  const address=worksheet[`C${index}`].v;
  const empanneled=worksheet[`D${index}`].v;
  const person=worksheet[`E${index}`].v;
  const phone=worksheet[`F${index}`].v;
  const email=worksheet[`G${index}`].v;
  const hospital= new HospitalModels({
    id,name,address,empanneled,person,phone,email,
  })
 hospital.save();
  console.log(hospital);
}