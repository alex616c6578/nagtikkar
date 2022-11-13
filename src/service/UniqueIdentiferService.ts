import { v4 as uuidv4 } from "uuid";

export class UniqueIdentiferService {
  generateUniqueIdentifier = () => {
    try {
      return uuidv4();
    } catch (error: any) {
      console.log(
        "Error occured inside UniqueIdentiferService::generateUniqueIdentifier",
        error.message
      );
      throw error;
    }
  };
}
