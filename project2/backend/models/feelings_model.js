import mongoose from "mongoose";

const feelingModel = new mongoose.Schema({
    date: {
        type: Number,
        default: Date.now
    },

    description: {
        type: String,
        required: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user_data",
    }
}, {timestamps: true});


const Feeling = mongoose.model("Feeling", feelingModel);
export default Feeling;