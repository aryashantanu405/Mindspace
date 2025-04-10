import mongoose from "mongoose";

const conversationModel = mongoose.Schema({
    description: {
        type: String,
        default: ""
    },

    time: {
        type: Number,
        default: () => Date.now()
    },
    //Whether the message is a question from patient or reply from doctor
    type: {
        type: String,
        enum: ["QUESTION", "REPLY"],
        required: true
    }
}, {timestamps: true})

const consultationModel = mongoose.Schema({

    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user_data",
        required: true
    },

    conversation: [conversationModel],

    // createdAt: {
    //     type: Number,
    //     default: Date.now,
    // },

    // status: {
    //     type: String,
    //     enum: ["ONGOING", "COMPLETED"],
    //     required: true
    // }


}, {timestamps: true});


const Consultation = mongoose.model("Consultation", consultationModel);
export default  Consultation;