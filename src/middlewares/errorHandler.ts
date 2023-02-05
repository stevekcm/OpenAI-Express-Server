import { Request, Response, NextFunction } from "express";

interface Error {
  message: string;
  stack?: string;
}

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404);
  next(new Error(`${req.originalUrl} not found.`));
};

export const globalError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);
  res.json({
    status: res.statusCode === 200 ? 500 : res.statusCode,
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
