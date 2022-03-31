import express from 'express';
import cors from 'cors';
import expressPlayground from 'graphql-playground-middleware-express';
import { errorHandler } from './handlers/error.handler';

export const createApp = () => {
    const app = express();
    app.use(
        cors({
            origin: true
        })
    );
    app.get('/playground', expressPlayground({ endpoint: '/graphql' }));
    app.use(errorHandler);

    return app;
};
