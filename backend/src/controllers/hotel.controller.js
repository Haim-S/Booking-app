import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

export const createHotel = async (req, res, next)=> {
    const newHotel = Hotel.create(req.body);
    res.status(200).json(newHotel);
}

export const updateHotel = async (req, res, next) => {
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
    res.status(200).json(updatedHotel);
}

export const deleteHotel = async (req, res, next) => {
await Hotel.findByIdAndDelete(req.params.id);
res.status(200).json("Hotel has been deleted.");
}

export const getHotel = async (req, res, next) => {
const hotel = await Hotel.findById(req.params.id);
res.status(200).json(hotel);
}

export const getHotels = async (req, res, next) => {
const {min, max, ...others} = req.query;
const hotels = await Hotel.find({
    ...others,
    cheapestPrice: {$gt: min | 1, $lt: max || 999},
}).limit(req.query.limit);
res.status(200).json(hotels)
}

export const countBtCity = async (req, res, next)=> {
    const cities = req.query.cities.split(",");
    const list = await Promise.all(cities.map((city)=>{
        return Hotel.countDocuments({city: city});
    }));
    res.status(200).json(list);
}

export const countByType = async (req, res, next)=> {
    const hotelCount = await Hotel.countDocuments({type: "hotel"});
    const apartmentCount = await Hotel.countDocuments({type: "apartment"});
    const resortCount = await Hotel.countDocuments({type: "resort"});
    const villaCount = await Hotel.countDocuments({type: "villa"});
    const cabinCount = await Hotel.countDocuments({type: "cabin"});
    res.status(200).json([
        { type: "hotel", count: hotelCount },
        { type: "apartments", count: apartmentCount },
        { type: "resorts", count: resortCount },
        { type: "villas", count: villaCount },
        { type: "cabins", count: cabinCount },
    ])
}

export const getHotelRooms = async (req, res, next) => {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
        hotel.rooms.map((room)=>{
            return Room.findById(room);
        })
    );
    res.status(200).json(list)
}