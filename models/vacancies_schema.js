import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const vacancySchema = new Schema({
    company:{
        type: String,
        required: true,
    },
    vacancy:{
        type: String,
        required: true,
    },
    minSalaryFork: {
        type: Number,
    },
    maxSalaryFork: {
        type: Number,
    },
    status:{
        type: String,
        required: true,
    },
    note: {
        type: String,
    }
});

export const PostVacancy = mongoose.model('PostVacancy', vacancySchema);

