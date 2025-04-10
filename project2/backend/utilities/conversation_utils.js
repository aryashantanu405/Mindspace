import consultationModel from "../models/consultation_model.js";

export const fetchConversations = async function (req, res) {
  try {
    const { consultationid } = req.params;

    const myConsultation = await consultationModel.findById(consultationid);

    if (!myConsultation) {
      return res
        .status(404)
        .send({ success: false, message: "Consultation not found" });
    }

    res
      .status(200)
      .send({
        success: true,
        message: "Conversation fetched successfully",
        conversation: myConsultation.conversation,
      });
  } catch (err) {
    res.status(500).send({ success: false, message: err.message });
  }
};
