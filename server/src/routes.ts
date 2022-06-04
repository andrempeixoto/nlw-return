import express from "express";
import { prisma } from './prisma';

export const routes = express.Router();

routes.post("/feedbacks", async (request, response) => {
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