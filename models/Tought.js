const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ToughtSchema = new Schema (
    {
        toughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true,
            ref: 'User'
        },
        reactions: [ReactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// get total count of reactions on retrieval
ToughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Tought = model('Tought', ToughtSchema);

module.exports = Tought;