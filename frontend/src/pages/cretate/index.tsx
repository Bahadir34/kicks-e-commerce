import { type FC } from "react";
import Form from "../../components/form";
import { useCreateShoe } from "../../service/shoes-queries";
import type { ProductValues } from "../../types";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";

const Create: FC = () => {
  const { mutate, isPending } = useCreateShoe();
  const navigate = useNavigate();

  const handleSubmit = (values: ProductValues) => {
    mutate(values);
  };

  return (
    <div className="max-w-250 mx-auto">
      <button
        onClick={() => navigate(-1)}
        type="button"
        className="flex items-center gap-2 mb-3 bg-white/60 px-4 py-2 rounded-xl hover:bg-white/90 cursor-pointer transition duration-500"
      >
        <ArrowLeftIcon className="size-5" />
        <span>Geri</span>
      </button>

      <h2 className="text-2xl font-semibold mb-5">Ürün Ekle</h2>
      <Form onSubmit={handleSubmit} isPending={isPending} />
    </div>
  );
};

export default Create;
