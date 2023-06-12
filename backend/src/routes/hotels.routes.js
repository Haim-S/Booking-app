import express from "express";
import {
    countByCity,
    countByType,
    createHotel,
    deleteHotel,
    getHotel,
    getHotelRooms,
    getHotels,
    updateHotel,
} from "../controllers/hotel.controller";
import {tryCatchError} from "../utils/error";
const router = express.Router();

// CREATE
router.post("/",tryCatchError(createHotel));

// UPDATE
router.put("/:id", tryCatchError(updateHotel));

// DELETE
router.delete("/:id", tryCatchError(deleteHotel));

// GET
router.get("/find/:id", tryCatchError(getHotel));

// GET ALL
router.get("/", tryCatchError(getHotels));
router.get("/countByCity", tryCatchError(countByCity));
router.get("/countByType", tryCatchError(countByType));
router.get("/room/:id", tryCatchError(getHotelRooms));

export default router;