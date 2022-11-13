require('dot-env');

export interface EnvironmentVariables {
    databaseFileName: string; 
};

export class EnvironmentService {

    private environemntVariables?: EnvironmentVariables;

    constructor () {
        this.parseEnvironmentVariables();
    };

    private parseEnvironmentVariables = () => {
        this.environemntVariables = {
            databaseFileName: process.env?.DATABASE_FILE_NAME ?? '',
        }
    };

    getEnvironmentVariables = () => {
        try {
            if (this.environemntVariables == undefined) {
                throw new Error("Environment variables not initialized");
            }
            return this.environemntVariables;
        } catch (error: any) {
            console.log("Error occured inside EnvironmentService::getEnvironmentVariables", error.message);
            throw error;
        }
    };
};