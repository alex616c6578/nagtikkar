import express from "express";
import { UniqueIdentiferService } from "./service";
const app = express();

app.get("/", function (req: any, res: any) {
  try {
    const uniqueIdentifer =
      new UniqueIdentiferService().generateUniqueIdentifier();
    res.send("Hello World" + uniqueIdentifer);
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
