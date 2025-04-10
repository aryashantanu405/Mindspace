import doctorModel from "../models/doctor_model.js";
import consultationModel from "../models/consultation_model.js";
import {fetchConversations}  from "../utilities/conversation_utils.js"




//Single method to get doctor profile as well as his consultation list
export const getDoctor = async function (req, res) {
  try {
    const { email } = req.params;
    const doctor = await doctorModel.findOne({ email: email }).lean().populate({
      path: "consultations",
      select: "-conversation",
      populate: {
        path: "user",
        model: "user_data",
        select: "-consultations"
      },
    });

    if (!doctor) {
      return res
        .status(404)
        .send({ success: false, message: "Doctor not found" });
    }

    if(!doctor.consultations || doctor.consultations.length === 0)
    {
      return res
        .status(404)
        .send({ success: false, message: "No consultations found" });
    }

    res
      .status(200)
      .send({ success: true, consultations: doctor.consultations });
  } catch (err) {
    res.status(500).send({ success: false, message: err.message });
  }
};

export const addReply = async function (req, res) {
  try {
    const { description, consultation } = req.body;

    const myConsultation = await consultationModel.findById(consultation);

    if (!myConsultation) {
      return res
        .status(404)
        .send({ success: false, message: "Consultation not found" });
    }

    const type = "REPLY";

    const newReply = {
      description,
      type,
    };

    myConsultation.conversation.push(newReply);

    await myConsultation.save();

    res.status(201).send({
      success: true,
      message: "Reply added successfully",
      consultation: myConsultation,
    });
  } catch (err) {
    res.status(500).send({ success: false, message: err.message });
  }
};

export const getStats = async function (req, res) {
  try {
    const { doctorid } = req.params;

    const now = new Date();

    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - now.getDay());
    weekStart.setHours(0, 0, 0, 0);

    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

    const weekCount = await consultationModel.countDocuments({
      doctor: doctorid,
      createdAt: { $gte: weekStart },
    });

    const monthCount = await consultationModel.countDocuments({
      doctor: doctorid,
      createdAt: { $gte: monthStart },
    });

    res
      .status(200)
      .send({
        success: true,
        message: "Stats fetched successfully",
        weekCount: weekCount,
        monthCount: monthCount,
      });
  } catch (err) {
    res.status(500).send({ success: false, message: err.message });
  }
};

export const getConversations = fetchConversations;

// export const createDoctor = async (req, res) => {
//   try {
//     const { username, email, password, fullname } = req.body;

//     // Basic validation
//     if (!username || !email || !password || !fullname) {
//       return res.status(400).send({
//         success: false,
//         message: "Username, email, and password are required.",
//       });
//     }

//     // Optional: Check for existing doctor with same email or username
//     const existingDoctor = await doctorModel.findOne({ $or: [{ email }, { username }] });
//     if (existingDoctor) {
//       return res.status(409).send({
//         success: false,
//         message: "Doctor with this email or username already exists.",
//       });
//     }

//     // Create doctor
//     const newDoctor = await doctorModel.create({
//       username,
//       email,
//       fullname,
//       password,
//     });

//     res.status(201).send({
//       success: true,
//       message: "Doctor created successfully.",
//       doctor: newDoctor,
//     });

//   } catch (error) {
//     res.status(500).send({
//       success: false,
//       message: error.message,
//     });
//   }
// };




