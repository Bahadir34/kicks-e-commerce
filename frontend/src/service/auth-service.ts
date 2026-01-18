import type {
  LoginValues,
  LogoutResponse,
  RefreshResponse,
  RegisterResponse,
  RegisterValues,
} from "../types";
import api from "./api";

export const authService = {
  register: (data: RegisterValues) =>
    api.post<RegisterResponse>("/auth/register", data),
  login: (data: LoginValues) => api.post<RegisterResponse>("/auth/login", data),
  refresh: () => api.post<RefreshResponse>("/auth/refresh"),
  logout: () => api.post<LogoutResponse>("/auth/logout"),
  me: () => api.get<RegisterResponse>("/auth/me"),
};
