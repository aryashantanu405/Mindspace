import mongoose from "mongoose"

const doctorModel = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },

    qualification: {
        type: String,
        default: ""
    },

    //Doctor's view on mental health
    view: {
        type: String,
        default: ""
    },

    avatar: {
        type: String,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        trim: true,
    },

    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    consultations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Consultation"
        }
    ]

}, {timestamps: true});


const Doctor = mongoose.model("Doctor", doctorModel);
export default Doctor;