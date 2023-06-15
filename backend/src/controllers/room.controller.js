import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
// import {createError} from "../utils/error";

export const createRoom = async (req, res, next)=>{
    const hotelId = req.params.hotelid;
    const createRoom = await Room.create(req.body);
    await Hotel.findByIdAndUpdate(hotelId, {
        $push: {rooms: createRoom._id},
    });
    res.status(200).json(createRoom);
}

export const updateRoom = async (req, res, next) => {
    const updateRoom = await Room.findByIdAndUpdate(
        req.params.id,
        {$set: req.body},
        {new: true}
    );
    res.status(200).json(updateRoom);
}

export const updateRoomAvailability = async (req, res, next) => {
    await Room.updateOne(
        {"roomNumbers._id" : req.params.id},
        {
            $push: {
                "roomNumbers.$.unavailableDates": req.body.dates
            },
        }
    );
    res.status(200).json("Room status has been updated.");
}

export const deleteRoom = async (req, res, next) => {
const hotelId = req.params.hotelid;
await Room.findByIdAndDelete(req.params.id);
await Hotel.findByIdAndUpdate(hotelId, {
    $pull: {rooms: req.params.id},
});
res.status(200).json("Room has been deleted.");
};

export const getRoom = async (req, res, next) => {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
}

export const getRooms = async (req, res, next) => {
    const rooms = await Room.find();
    res.status(200).json(rooms);
}