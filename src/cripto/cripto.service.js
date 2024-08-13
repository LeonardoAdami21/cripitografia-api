import { seceretKey } from "../env/envoriment.js";
import { criptoRepository } from "./repositories/cripto.repository.js";
import CryptoJS from "crypto-js";

const create = async (document, creditCard, value) => {
  try {
    const userDocument = await criptoRepository.findByDocument(document);
    if (userDocument) {
      throw new Error("User already exists");
    }
    const userCreditCard = await criptoRepository.findByCreditCard(creditCard);
    if (userCreditCard) {
      throw new Error("Credit card already exists");
    }
    if (value < 0) {
      throw new Error("Value must be greater than 0");
    }
    if (creditCard.length < 16) {
      throw new Error("Credit card must have 16 digits");
    }
    if (document.length < 11 || document.length > 14) {
      throw new Error("Invalid document.");
    }
    const valueEncryptedCreditCard = CryptoJS.AES.encrypt(
      creditCard,
      seceretKey,
    ).toString();
    const valueEncryptedDocument = CryptoJS.AES.encrypt(
      document,
      seceretKey,
    ).toString();
    const result = await criptoRepository.create({
      document: valueEncryptedDocument,
      creditCard: valueEncryptedCreditCard,
      value,
    });
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findByDocument = async (document) => {
  try {
    if (document.length < 11 || document.length > 14) {
      throw new Error("Invalid document.");
    }
    const result = await criptoRepository.findByDocument(document);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findByCreditCard = async (creditCard) => {
  try {
    if (creditCard.length < 16) {
      throw new Error("Credit card must have 16 digits");
    }
    const result = await criptoRepository.findByCreditCard(creditCard);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const criptoService = {
  create,
  findByDocument,
  findByCreditCard,
};
