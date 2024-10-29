// require('dotenv').config({path: './env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js";



dotenv.config({
	path : './env'
})

connectDB();






















/*
import express from "express";
const app = express()

//if he function 
;( async ()=> {
	try{
		await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
		
		//listener from app 
		app.on("error", (err)=> {
			console.log("ERROR: ", err);
			throw err;
		})

		app.listen(process.env.PORT, ()=> {
			cosnole.log(`App is listining on port ${process.env.PORT}`);
		})
	}
	catch(err){
		console.error("ERROR: ", err)
		throw err
	}
})()
*/