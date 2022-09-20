import { Document, model, Schema } from "mongoose";

export interface ITodo {
    name: string;
    description: string;
    status: boolean;
}

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

export default model<ITodo>("Todo", TodoSchema);