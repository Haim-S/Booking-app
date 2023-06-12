import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/room.controller.js";
const router = express.Router();
import {tryCatchError} from "../utils/error.js";

// CREATE
router.post("/:hotelid", tryCatchError(createRoom));

// UPDATE
router.put("/availability/:id", tryCatchError(updateRoomAvailability));
router.put("/:id", tryCatchError(updateRoom));

// DELETE
router.delete("/:id/:hotelid", deleteRoom);

// GET
router.get("/:id", tryCatchError(getRoom));

// GET ALL
router.post("/", tryCatchError(getRooms));

export default router;

