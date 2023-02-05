import openaiService from "../services/openai.service";
import { Request, Response, NextFunction } from "express";
import { validateRequest } from "../middlewares/validator";
import { completeSchema, retrieveSchema } from "../schemas/openai.schema";

const create = [
  validateRequest({ body: completeSchema }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { model, prompt } = req.body;

      const completion = await openaiService.createCompletion(model, prompt);

      const data = completion?.split("\n\n");

      return res.status(200).json(data);
    } catch (e) {
      next(e);
    }
  },
];

const list = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const models = await openaiService.getModels();

    return res.status(200).json(models);
  } catch (e) {
    next(e);
  }
};

const retrieve = [
  validateRequest({ query: retrieveSchema }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { model } = req.query;
      const modelInfo = await openaiService.retrieveModel(model as string);

      return res.status(200).json(modelInfo);
    } catch (e) {
      next(e);
    }
  },
];

export default {
  retrieve,
  create,
  list,
};
