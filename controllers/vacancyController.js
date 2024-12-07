import {VacancyService} from "../services/vacancy-service.js";

export class VacancyController {

    static async createVacancy(req, res) {

        const vacancyInformation = {
            company: req.body.company,
            vacancy: req.body.vacancy,
            minSalaryFork: req.body.minSalaryFork,
            maxSalaryFork: req.body.maxSalaryFork,
            status: req.body.status,
            note: req.body.note,
        };

        try {
            const vacancy = await VacancyService.createVacancy(vacancyInformation);
            res.status(201).send(vacancy);
        } catch (err) {
            res.status(500).send({message: "Error creating vacancy: ", error: err});
        }
    }

    static async getAllVacancies(req, res) {
        try {
            const allVacancies = await VacancyService.getAllVacancies();
            res.status(201).send(allVacancies);
        } catch(err){
            res.status(500).send({message: "Error getting all vacancies: ", error: err});
        }
    }

    static async updateVacancy(req, res) {
        const {id} = req.params;
        const newUpdateVacancy = req.body;

        try {

            const updateResultVacancy = await VacancyService.updateVacancy(id, newUpdateVacancy);

            if (!updateResultVacancy){
                res.status(404).send({message: "No Vacancy with id: " + id});
            } else {
                res.status(201).send(updateResultVacancy);
            }

        } catch(err){
            res.status(500).send({message: "Error updating vacancy: ", error: err});
        }
    }

    static async deleteVacancy(req, res) {
        const {id} = req.params;

        try {

            const isDeleted = await VacancyService.deleteVacancy(id);

            if (!isDeleted) {
                res.status(404).send({message: "No Vacancy with id: " + id});
            } else {
                res.status(201).send({message: "Vacancy is deleted"});
            }

        } catch(err){
            res.status(500).send("Error deleting vacancies: ", err);
        }
    }
}