import feedbackModel from '../models/feedbackModel.js';

export const addfeedback = async (req, res) => {
    const feedback = req.body;
    const newFeedback = new feedbackModel(feedback);

    try {
        await newFeedback.save();

        res.status(201).json(newFeedback);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}