import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { shoesService } from "./shoes-service";
import type { ProductValues } from "../types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useShoes = () =>
  useQuery({
    queryKey: ["shoes"],
    queryFn: () => shoesService.getAll(),
    select: (res) => res.data,
  });

// ^ cache den kaynakli her veri cekisimde bir oncekinin verisini getiriyordu\
// ! koseli parante icine id verilmeli, id degistiginde istek yeniden atilmali
export const useShoe = (id: string) =>
  useQuery({
    queryKey: ["shoe", id],
    queryFn: () => shoesService.getShoe(id),
    select: (res) => res.data,
    enabled: !!id,
  });

export const useDeleteShoe = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delete"],
    mutationFn: (id: string) => shoesService.deleteShoe(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shoes"] });
      toast.success("Ürün başarıyla silindi");
    },
    onError: (error) => {
      toast.error("Ürün silinirken bir hata oluştu");
    },
  });
};

export const useCreateShoe = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["create"],
    mutationFn: (shoe: ProductValues) => shoesService.createShoe(shoe),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shoes"] });
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error("Ürün oluşturulurken bir hata oluştu");
    },
  });
};

export const useUpdateShoe = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["update"],
    mutationFn: ({ id, shoe }: { id: string; shoe: ProductValues }) =>
      shoesService.updateShoe(id, shoe),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shoes"] });
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error("Ürün oluşturulurken bir hata oluştu");
    },
  });
};
