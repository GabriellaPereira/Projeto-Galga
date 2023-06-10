import { Request, Response } from 'express';
import { userService } from '../services/UsuarioService';

export const userController = {
  async userInfo(request: Request, response: Response) {
    try {
      const user = await userService.getUsers();
      return response.status(200).json(user);
    } catch (err: any) {
      return response.status(400).json(err.message);
    }
  },

  async create(request: Request, response: Response) {
    const { primeiroNome, sobrenome, nomeUsuario, cidade, estado, cep } =
      request.body;

    const userData = {
      primeiroNome,
      sobrenome,
      nomeUsuario,
      cidade,
      estado,
      cep,
    };

    const user = await userService.create(userData);
  },
};
