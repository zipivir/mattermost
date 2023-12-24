const mongoose = require('mongoose');

// Create a mongoose schema
const sourceSchema = new mongoose.Schema({
    // _id: mongoose.$oid,
    page_content: String,
    metadata: {
        source: String
    },
    agent_loader: String,
    timestamp: { type: Date, default: Date.now },
    query: String,
    score: Number,
    message_id: String,
    "Data Source": String,
    Score: Number,
    Source: String,
});

// Create a mongoose model based on the schema
const Source = mongoose.model('Source', sourceSchema);

const uploadBulk = async (sources) => {
    try {
        const newSources = await Source.bulkSave(sources);
        return newSources;
    } catch (err) {
        throw new Error('Failed to upload sources' + err.message);
    }
};

module.exports = { Source, uploadBulk };