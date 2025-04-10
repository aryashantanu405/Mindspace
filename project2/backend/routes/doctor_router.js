import express from "express";

import {getDoctor, getStats, getConversations, addReply, createDoctor} from "../controllers/doctor_controller.js";

const router = express.Router();

router.get("/getdoctor/:email", getDoctor);
router.get("/getstats/:doctorid", getStats);
router.get("/getconversations/:consultationid", getConversations);
router.post("/addreply", addReply);
router.post("/createdoctor", createDoctor);

export default router;