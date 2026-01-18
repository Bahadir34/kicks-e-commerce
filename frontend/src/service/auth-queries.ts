import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { LoginValues, RegisterValues } from "../types";
import { authService } from "./auth-service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["register"],
    mutationFn: (registerData: RegisterValues) =>
      authService.register(registerData),
    onSuccess: () => {
      navigate("/login");
      toast.success("Hesap Oluşturuldu.");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Hesap oluşturulurken bir hata oluştu.");
    },
  });
};

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (loginData: LoginValues) => authService.login(loginData),
    onSuccess: () => {
      navigate("/");
      toast.success("Başarıyla giriş yapıldı.");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Giriş yaparken hata oldu.");
    },
  });
};

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      navigate("/ ");
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      toast.success("Başarıyla çıkış yapıldı.");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Çıkış yaparken hata oldu.");
    },
  });
};

export const useUser = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["profile"],
    queryFn: () => authService.me(),
    select: (res) => res.data.data,
    retry: false,
  });

  return { isLoading, error, data };
};
