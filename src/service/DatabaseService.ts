import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

export class DatabaseService {
  private databaseFilePath: string;
  private db?: Database;

  constructor ({ databaseFilePath }: { databaseFilePath: string }) {
    this.databaseFilePath = databaseFilePath;
  }

  connectToDatabase = async () => {
    try {
      console.log("Opening");
      this.db = await open({
        filename: '../../database.db',
        driver: sqlite3.Database,
      });
      console.log("Done");
    } catch (error: any) {
      console.log(
        "Error occured inside DatabaseService::connectToDatabase",
        error.message
      );
    }
  };

  getAllIdentifiers = async () => {
    try {
      const result = await this.db?.all("SELECT * FROM identifers");
      console.log(this.db, result);
    } catch (error: any) {
      console.log("Error occured inside DatabaseService::getAllIdentifiers",error.message);
    }
  };
}
