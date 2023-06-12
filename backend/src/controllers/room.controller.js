import Room from "../models/Room";
import Hotel from "../models/Hotel";
import {createError} from "../utils/error";

export const createRoom = async (req, res, next)=>{
    const hotelId = req.params.hotelid;
    const createRoom = await Room.create(req.body);
    await Hotel.findByIdAndUpdate(hotelId, {
        $push: {rooms: createRoom._id},
    });
    res.status(200).json(createRoom);
}