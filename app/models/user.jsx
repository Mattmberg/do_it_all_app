import mongoose from "mongoose";

export const TodoSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
},
    { timestamps: true }
);

export default model Todo <>("Todo", TodoSchema);
