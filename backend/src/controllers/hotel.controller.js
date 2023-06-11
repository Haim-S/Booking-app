import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next)=> {
    const newHotel = Hotel.create(req.body);
    res.status(200).json(newHotel);
}

export const updateHotel = async (req, res, next) => {
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
    res.status(200).json(updatedHotel);
}

export const deleteHotel = async (req, res, next) => {

}

export const getHotel = async (req, res, next) => {

}

export const getAllHotels = async (req, res, next) => {

}