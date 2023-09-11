import { NextFunction } from "express";
import { z } from "zod";
import { Request, Response } from "express";

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return "Validator denied, formato invalid"; //error.message
  }
  return error;
}

export const ValidateSchema =
  (schema: z.ZodType) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      return next();
    } catch (e) {
      console.log(getErrorMessage(e));

      res.status(204).json(e);
      // message gets narrowed to strin
    }
  };
