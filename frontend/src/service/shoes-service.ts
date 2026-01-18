import type {
  ProductValues,
  Shoe,
  ShoeResponse,
  SingleShoeResponse,
} from "../types";
import api from "./api";

export const shoesService = {
  getAll: () => api.get<ShoeResponse>("/shoes"),
  getShoe: (id: string) => api.get<SingleShoeResponse>(`/shoes/${id}`),
  createShoe: (shoe: ProductValues) => api.post<Shoe>("/shoes", shoe),
  updateShoe: (id: string, shoe: ProductValues) =>
    api.put<Shoe>(`/shoes/${id}`, shoe),

  deleteShoe: (id: string) => api.delete(`/shoes/${id}`),
};
