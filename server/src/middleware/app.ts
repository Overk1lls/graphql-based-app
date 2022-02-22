import express from 'express';
import cors from 'cors';
import notFoundHandler from "./routes/not-found.route";
import { errorHandler } from './handlers/error.handler';
const expressPlayground = require('graphql-playground-middleware-express').default;

export const createApp = () => {
    const app = express();
    app.use(
        cors({
            origin: true
        })
    );
    app.get('/playground', expressPlayground({ endpoint: '/graphql' }));
    app.use(notFoundHandler);
    app.use(errorHandler);

    return app;
};