import {Router} from 'express';
import {VacancyController} from "./vacancyController.js";

const vacanciesRouter = new Router();


vacanciesRouter.post('/create', VacancyController.createVacancy);
vacanciesRouter.get('/', VacancyController.getAllVacancies);
vacanciesRouter.patch('/update-vacancy/:id', VacancyController.updateVacancy);
vacanciesRouter.delete('/delete-vacancy/:id', VacancyController.deleteVacancy);

export default vacanciesRouter;