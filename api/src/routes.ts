import express from 'express';
import { userController } from './controlllers/UsuarioController';

const routes = express.Router();

routes.get('/users/', userController.userInfo);

routes.post('/users/create', userController.create);

export { routes };
