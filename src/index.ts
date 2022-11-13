import express from "express";

import { UniqueIdentiferService, EnvironmentService, PathService, DatabaseService } from "./service";

const app = express();
const environmentServiceInstance = new EnvironmentService();

app.get("/", async (req: any, res: any) => {
  try {
    // const uniqueIdentifer = new UniqueIdentiferService().generateUniqueIdentifier();
    const { databaseFileName } = environmentServiceInstance.getEnvironmentVariables();
    const databaseFilePath = new PathService().getDatabaseFilePath({ databaseFileName });
    const databaseServiceInstance = new DatabaseService({ databaseFilePath });
    await databaseServiceInstance.connectToDatabase();
    databaseServiceInstance.getAllIdentifiers();
    res.send("Hello World");
  } catch (error) {
    console.log("Error coccured insdide GET::/", error);
  }
});

app.listen(3001);

/*

unique idenifier

passcode

generate token

*/
