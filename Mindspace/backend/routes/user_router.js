import express from "express";

import {
  getAllDoctors,
  getConsultations,
  createConsultation,
  addQuestion,
  getConversations,
  addFeeling,
  getFeelings
} from "../controllers/user_controller.js";

const router = express.Router();

router.post("/createconsultation", createConsultation);
router.post("/addquestion", addQuestion);
router.get("/getconsultations/:userid", getConsultations);
router.get("/getalldoctors", getAllDoctors);
router.get("/getconversations/:consultationid", getConversations);
router.post("/addfeeling", addFeeling);
router.get("/getfeelings/:user", getFeelings);
// router.post("/createuser", createUser);

export default router;
