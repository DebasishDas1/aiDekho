import aiToolModel from '../models/aiToolModel.js';

export const addNewTool = async (req, res) => {
    const tool = req.body;
    const newTool = new aiToolModel(tool);

    try {
        await newTool.save();

        res.status(201).json(newTool);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const getAITool = async (req, res) => {
    res.send(['yo']);

    try {
        const noteMessages = await noteMessage.find();
        console.log(noteMessages);

        res.status(200).json(noteMessages)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};