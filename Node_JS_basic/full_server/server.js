import express from 'express';
import mapRoutes from './routes/index';

const app = express();
const PORT = 1245;

mapRoutes(app);

app.listen(PORT);

export default app;
