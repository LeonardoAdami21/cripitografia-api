import { criptoService } from "./cripto.service.js";

const create = async (req, res) => {
  try {
    const { document, creditCard, value } = req.body;
    const userDocument = await criptoService.findByDocument(document);
    if (userDocument) {
      throw new Error("User already exists");
    }
    const userCreditCard = await criptoService.findByCreditCard(creditCard);
    if (userCreditCard) {
      throw new Error("Credit card already exists");
    }
    const cripto = await criptoService.create(document, creditCard, value);
    return res.status(201).json(cripto);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const findByDocument = async (req, res) => {
  try {
    const { document } = req.params;
    const cripto = await criptoService.findByDocument(document);
    return res.status(200).json(cripto);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const findByCreditCard = async (req, res) => {
  try {
    const { creditCard } = req.params;
    const cripto = await criptoService.findByCreditCard(creditCard);
    return res.status(200).json(cripto);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const criptoController = {
  create,
};
