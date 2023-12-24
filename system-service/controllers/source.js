const { Source, uploadBulk } = require("../models/source.js");

// GET all sources
const getSources = async (req, res) => {
    try {
        let sources = [];
        if (req.query.timestamp) {
            const requestedDate = new Date(req.query.timestamp); 
            sources = await Source.find({ timestampField: { $gte: requestedDate } });
        } 
        else
            sources = await Source.find();

        res.status(200).send(sources);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

// POST a new sources
const uploadSources = async (req, res) => {
    try {
        const newSources = await uploadBulk(req.body);
        res.status(201).send('Sources added successfully');
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = { getSources, uploadSources };