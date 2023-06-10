import { prisma } from '../lib/prisma';

interface User {
  primeiroNome: string;
  profissao: string | null;
  descricao: string | null;
  avatar_url: string | null;
}

interface UserData {
  primeiroNome: string;
  sobrenome: string;
  nomeUsuario: string | null;
  cidade: string | null;
  estado: string | null;
  cep: string | null;
}

export const userService = {
  async getUsers(): Promise<User[]> {
    const users = await prisma.user.findMany({
      select: {
        primeiroNome: true,
        profissao: true,
        descricao: true,
        avatar_url: true,
      },
    });

    return users;
  },

  async create(userData: UserData): Promise<User> {
    const user = await prisma.user.create({
      data: {
        primeiroNome: userData.primeiroNome,
        sobrenome: userData.sobrenome,
        nomeUsuario: userData.nomeUsuario,
        cidade: userData.cidade,
        estado: userData.estado,
        cep: userData.cep,
      },
    });

    return user;
  },
};
