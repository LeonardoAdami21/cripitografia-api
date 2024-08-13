import prisma from "../../config/prisma.config.js";

const create = async (data) => {
  return await prisma.user.create({
    data,
  });
};

const findByDocument = async (document) => {
  return await prisma.user.findUnique({
    where: {
      document,
    },
  });
};

const findByCreditCard = async (creditCard) => {
  return await prisma.user.findUnique({
    where: {
      creditCard,
    },
  });
};

export const criptoRepository = {
  create,
  findByDocument,
  findByCreditCard,
};
