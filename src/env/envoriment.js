import dotenv from "dotenv";
dotenv.config();

export const appPort = process.env.PORT || 3000;
export const seceretKey = process.env.SECRET_KEY;
