import mongoose from "mongoose";

const feedbackScema = mongoose.Schema({
    user: String,
    message: String,
    ratting: String,
    crtatedAt: {
        type: Date,
        default: new Date,
    }
})

const feedbackModel = mongoose.model('feedback', feedbackScema)

export default feedbackModel;