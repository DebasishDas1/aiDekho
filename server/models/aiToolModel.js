import mongoose from "mongoose";

const toolScema = mongoose.Schema({
    toolName: String,
    toolDescription: String,
    toolUrl: String,
    creater: String,
    toolLogo: String,
    tags: [String],
    crtatedAt: {
        type: Date,
        default: new Date,
    }
})

const aiToolModel = mongoose.model('tool', toolScema)

export default aiToolModel;