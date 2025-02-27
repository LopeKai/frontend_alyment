import axios, { AxiosInstance } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API;

export const api: AxiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    responseType: "json",
});