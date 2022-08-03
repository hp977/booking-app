import { NextPlan } from '@mui/icons-material';
import express from 'express'
import Hotel from '../models/Hotel.js'
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotel.js';
import { createError } from '../utils/error.js';


const router = express.Router()

// CREATE
router.post("/", createHotel)
// request or res is what we are taking from user;
// UPDATE
router.put("/:id", updateHotel
// request or res is what we are taking from user
    );
// DELETE
router.delete("/:id", deleteHotel);

// GET
router.get("/:id", getHotel);



// GET ALL

router.get("/", getHotels);






export default router