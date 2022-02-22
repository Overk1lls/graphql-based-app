import { RequestHandler } from "express";

const notFoundHandler: RequestHandler = (req, res) => {
    res.status(404).json({ error: `Route ${req.url} is not found` });
};

export default notFoundHandler;