const mongoose = require('mongoose');

const ContentsSchema = new mongoose.Schema({
    contentType: {type: String, required: true, max: 50},
    contentBody: {type: String, required: true},
    contentId: {type: String, required: true}
},
{
    timestamps: true
});



module.exports = mongoose.model('Contents', ContentsSchema);; 