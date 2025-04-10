import consultationModel from "../models/consultation_model.js";
import userModel from "../models/user_model.js";
import doctorModel from "../models/doctor_model.js";
import feelingModel from "../models/feelings_model.js";
import { fetchConversations } from "../utilities/conversation_utils.js";


export const createConsultation = async function (req, res) {
  try {
    const { doctor, user } = req.body;

    const newConsultation = await consultationModel.create({
      doctor,
      user,
    });

    const currUser = await userModel.findOne({ _id: user });
    if (!currUser) {
      return res
        .status(400)
        .send({ success: false, message: "User not found" });
    }

    const currDoctor = await doctorModel.findOne({ _id: doctor });
    if (!currDoctor) {
      return res
        .status(400)
        .send({ success: false, message: "Doctor not found" });
    }

    currUser.consultations.push(newConsultation._id);
    currUser.consulteddoctors.push(doctor);
    await currUser.save();

    currDoctor.consultations.push(newConsultation._id);
    await currDoctor.save();

    res.status(201).send({
      success: true,
      message: "Consultation Created",
      consultation: newConsultation,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

export const addQuestion = async function (req, res) {
  try {
    const { description, consultation } = req.body;

    const myConsultation = await consultationModel.findOne({
      _id: consultation,
    });
    if (!myConsultation) {
      return res
        .status(404)
        .send({ success: false, message: "Consultation not found" });
    }

    const type = "QUESTION";

    const question = {
      description,
      type,
    };

    myConsultation.conversation.push(question);

    await myConsultation.save();

    res.status(201).send({
      success: true,
      message: "Question successfully added",
      conversation: myConsultation.conversation,
    });
  } catch (err) {
    res.status(500).send({ success: false, message: err.message });
  }
};

export const getConsultations = async function (req, res) {
  try {
    const { userid } = req.params;

    const currUser = await userModel
      .findById({ _id: userid })
      .populate({path: "consultations", select: "-conversation", populate: {
        path: "doctor",
        model: "Doctor",
        select: "-consultations"
      }});

    if (
      !currUser ||
      !currUser.consultations ||
      currUser.consultations.length === 0
    ) {
      return res
        .status(404)
        .send({ success: false, message: "No consultations found" });
    }

    res.status(200).send({
      success: true,
      message: "Fetched successfully!",
      consultations: currUser.consultations,
    });
  } catch (err) {
    res.status(500).send({ success: false, message: err.message });
  }
};

export const getAllDoctors = async function (req, res) {
  try {


    const allDoctors = await doctorModel.find().select("-password");

    if (!allDoctors || allDoctors.length === 0) {
      return res
        .status(404)
        .send({ success: false, message: "Doctors not found" });
    }

    res.status(200).send({
      success: true,
      message: "Doctors fetched successfully",
      doctors: allDoctors,
    });
  } catch (err) {
    res.status(500).send({ success: false, message: err.message });
  }
};

export const getConversations = fetchConversations;

export const addFeeling = async function (req, res) {
  try {
    const { description, user } = req.body;

    if (!description || description.length === 0) {
      return res
        .status(400)
        .send({ success: false, message: "Description can't be empty" });
    }

    const newFeeling = await feelingModel.create({
      description,
      user,
    });

    const myUser = await userModel.findById(user);

    if (!myUser) {
      return res
        .status(404)
        .send({ success: false, message: "User not found" });
    }

    myUser.feelings.push(newFeeling._id);

    await myUser.save();

    res.status(201).send({
      success: true,
      message: "Feeling created",
      feelings: newFeeling,
    });
  } catch (err) {
    res.status(500).send({ success: false, message: err.message });
  }
};

export const getFeelings = async function (req, res) {
  try {
    const { user } = req.params;

    const myFeelings = await feelingModel
      .find({ user: user })
      .select("description date")
      .sort({ createdAt: -1 });

    if (!myFeelings || myFeelings.length === 0) {
      return res
        .status(404)
        .send({ success: false, message: "Feelings not found" });
    }

    res
      .status(200)
      .send({
        success: true,
        message: "Feelings fetched successfully",
        feelings: myFeelings,
      });
  } catch (err) {
    res.status(500).send({ success: false, message: err.message });
  }
};

//To be removed.....
// export const createUser = async (req, res) => {
//   try {
//     const { email, username } = req.body;

//     if (!email || !username) {
//       return res.status(400).send({
//         success: false,
//         message: "Email and username are required",
//       });
//     }

//     const newUser = await userModel.create({
//       email,
//       username,
//       created_at: new Date(),  // optional
//       last_sign_at: new Date(), // optional
//     });

//     res.status(201).send({
//       success: true,
//       message: "User created successfully",
//       user: newUser,
//     });
//   } catch (err) {
//     res.status(500).send({
//       success: false,
//       message: err.message,
//     });
//   }
// };
