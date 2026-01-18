import { type FC } from "react";
import Form from "../../components/form";
import { useShoe, useUpdateShoe } from "../../service/shoes-queries";
import { useNavigate, useParams } from "react-router-dom";
import type { ProductValues, Shoe } from "../../types";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { ArrowLeftIcon } from "lucide-react";

const Edit: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data, isLoading, error, refetch } = useShoe(id as string);
  const { mutate, isPending } = useUpdateShoe();

  const handleSubmit = (values: ProductValues) => {
    mutate({ id: id!, shoe: values });
  };

  if (isLoading) return <Loader />;

  if (error) return <Error />;

  return (
    data && (
      <div className="max-w-250 mx-auto">
        <button
          onClick={() => navigate(-1)}
          type="button"
          className="flex items-center gap-2 mb-3 bg-white/60 px-4 py-2 rounded-xl hover:bg-white/90 cursor-pointer transition duration-500"
        >
          <ArrowLeftIcon className="size-5" />
          <span>Geri</span>
        </button>

        <h2 className="text-2xl font-semibold mb-5">Ürün Düzenle</h2>
        <Form onSubmit={handleSubmit} isPending={isPending} id={id} />
      </div>
    )
  );
};

export default Edit;
