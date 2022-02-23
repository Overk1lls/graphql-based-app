import { APIError } from "../../errors/api.error";
import { ErrorRequestHandler } from "express";
import { ErrorCode } from "../../interfaces/error.interface";

export const errorHandler: ErrorRequestHandler =
    (err, req, res, next) => {
        if (err instanceof APIError) {
            switch (err.code) {
                case ErrorCode.SERVER:
                    res.status(500);
                    break;

                case ErrorCode.NOT_FOUND:
                    res.status(404);
                    break;

                case ErrorCode.UNAUTHORIZED:
                    res.status(401);
                    break;

                case ErrorCode.FORBIDDEN:
                    res.status(403);
                    break;

                default:
                    res.status(400);
                    break;
            }
        } else {
            if (err instanceof SyntaxError && err.message.includes('JSON')) {
                res.status(400).json(
                    new APIError(ErrorCode.JSON_BAD, err.message, err)
                );
            } else {
                res.status(500).json(
                    new APIError(ErrorCode.SERVER, err.message, err)
                );
            }
        }
    };