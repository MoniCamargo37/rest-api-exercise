const mongoose = require('mongoose');

const showSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        trim: true,
        required: [true, 'Title is required.'],
    },
   
    creator: {
        type: String,
        required: [true, 'Creator is required.'],
    },
    launched: {
        type: Number,
        required: [true, 'Launched is required.'],
        min:0
    },
    
    genre: {
        type: String,
        required: [true, 'Gender is required.'],
    },
    image: {
        type: String,
        required: [true, 'Image is required.'],
    },
    description: {
        type: String,
        required: [true, 'Description is required.'],
    }
});

const Show = mongoose.model('Show', showSchema);

module.exports = Show;
