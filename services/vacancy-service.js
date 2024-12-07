import {PostVacancy} from "../models/vacancies_schema.js";

export class VacancyService {

    static async createVacancy(vacancyInfo) {
        const vacancy = new PostVacancy(vacancyInfo);
        return await vacancy.save();
    }

    static async getAllVacancies() {
        try {
            return await PostVacancy.find();
        }catch(err) {
            console.error("Error in getAllVacancies: " + err);
            throw err;
        }
    }

    static async updateVacancy(id, vacancyInfo) {
        try {
            return await PostVacancy.findByIdAndUpdate(id, vacancyInfo, {new: true});
        } catch(err){
            console.error("Error in updateVacancy: " + err);
        }
    }

    static async deleteVacancy(id) {
        try {
            const vacancyIsDeleted = await PostVacancy.findByIdAndDelete(id);
            return !! vacancyIsDeleted;
        }catch(err){
            console.error("Error in deleteVacancy: " + err);
        }
    }

}