import express from "express";
import UserModel from "./user-model";
const router = express.Router();

router.post("/articles", async (request, response) => {
  const article = new UserModel(request.body);

  try {
    await article.save();
    response.send(article);
  } catch (error) {
    response.status(500).send(error);
  }
});

export default router;
