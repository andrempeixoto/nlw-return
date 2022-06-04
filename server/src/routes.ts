import express from "express";
import nodemailer from 'nodemailer'
import { prisma } from './prisma';

export const routes = express.Router();

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "500e704fa4785b",
    pass: "2a04427b3198d9"
  }
});

routes.post("/feedbacks", async (request, response) => {
  const { type, comment, screenshot } = request.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    }
  })

  transport.sendMail({
    from: "Feedback <feedback@andrepeixoto.dev>",
    to: "Andre Peixoto <hi@andrepeixoto.dev>",
    subject: "New Feedback",
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111;"`,
      `<p>Feedback type: ${type}`,
      `<p>Comment: ${comment}`, 
      `</div>`
    ].join('\n')
  })

  return response.status(201).json({ data: feedback });
});