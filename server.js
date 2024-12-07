import {config} from 'dotenv';
import express from "express";
import {connectToDB} from "./bd/bdConnection.js";
import vacanciesRouter from "./controllers/router.js";
import cors from "cors";
import {VacancyController} from "./controllers/vacancyController.js";

const app = express();

config();

const port = process.env.PORT;

const main = async () => {
    try {
        await connectToDB();

        app.use(express.json());

        app.use(cors(

        ));

        app.use('/vacancy', vacanciesRouter);

        app.listen(port, () => {
            console.log(`Server started on port ${port}`);
        });
    }catch(err){
        console.log(err);
    }
}

main();






