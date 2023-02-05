import { AnyZodObject, ZodError } from "zod";
import { Request, Response, NextFunction } from "express";

interface RequestValidators {
  params?: AnyZodObject;
  body?: AnyZodObject;
  query?: AnyZodObject;
}

export function validateRequest(validators: RequestValidators) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (validators.params) {
        req.params = await validators.params.parseAsync(req.params);
      }
      if (validators.body) {
        req.body = await validators.body.parseAsync(req.body);
      }
      if (validators.query) {
        req.query = await validators.query.parseAsync(req.query);
      }
      next();
    } catch (err) {
      console.log(err);
      if (err instanceof ZodError) {
        res.status(400);
        return res.json(err);
      }
      next(err);
    }
  };
}
