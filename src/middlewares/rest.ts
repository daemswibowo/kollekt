import {NextFunction, Request, Response} from "express";
import {filtersToSQL} from "../utils";

export default function restMiddleware(req: Request, _res: Response, next: NextFunction) {
  const {filters} = req.query;

  // handle filters
  if (filters && typeof filters === 'string') {
    req.query.filters = filtersToSQL(filters);
  }

  next();
}
