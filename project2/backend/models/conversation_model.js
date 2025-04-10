import mongoose from "mongoose"

const conversationModel = mongoose.model({

    consultation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Consultation",
        required: true,
    },

    time: {
        type: Number,
        default: Date.now()
    },

    description: {
        type: String,
        default: "",
        required: true,
    }

}, {timestamps: true});

export const Conversation = mongoose.model("Conversation", conversationModel);