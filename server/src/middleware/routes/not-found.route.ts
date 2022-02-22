import { Handler } from "express";

const notFoundHandler: Handler = (req, res) => {
    res.status(404).json({ error: `Route ${req.url} is not found` });
};

export default notFoundHandler;