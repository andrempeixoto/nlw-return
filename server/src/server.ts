import { prisma } from './prisma';
import express from "express";

const app = express();

app.use(express.json());

app.post("/feedbacks", async (request, response) => {
  const { type, comment, screenshot } = request.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    }
  })

  return response.status(201).json({ data: feedback });
});

app.listen(3333, () => {
  console.log("server running in port 3333")
});