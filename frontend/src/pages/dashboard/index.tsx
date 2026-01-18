import { type FC } from "react";
import { useUser } from "../../service/auth-queries";
import { useDeleteShoe, useShoes } from "../../service/shoes-queries";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { Link } from "react-router-dom";

const Dashboard: FC = () => {
  const { data, isLoading, error, refetch } = useShoes();
  const { mutate, isPending } = useDeleteShoe();

  if (isLoading) return <Loader />;

  if (error) return <Error />;

  return (
    <div>
      <div className="flex justify-between mb-5 items-center">
        <h2 className="text-2xl md:text-2xl font-semibold">Ürünler</h2>
        <Link
          to={"/dashboard/create"}
          className="bg-my-blue px-4 py-1 md:px-6 md:py-2 rounded-md text-white hover:bg-my-blue/85 transition cursor-pointer duration-500"
        >
          Ürün Ekle
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3 min-w-26"></th>
              <th className="px-6 py-3">İsim</th>
              <th className="px-6 py-3">Fiyat</th>
              <th className="px-6 py-3 whitespace-nowrap">İndirim (%)</th>
              <th className="px-6 py-3">Eylemler</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((shoe) => (
              <tr
                key={shoe.id}
                className="bg-white border-b hover:gb-gray-50 font-semibold"
              >
                <td className="px-6 py-4">
                  <img
                    src={shoe.picture[0]}
                    alt={shoe.name}
                    className="size-16 md:size-28 max-w-full max-h-full rounded-xl"
                  />
                </td>
                <td className="px-6 py-4 text-gray-900 whitespace-nowrap">
                  {shoe.name}
                </td>

                <td className="px-6 py-4 text-gray-900 whitespace-nowrap">
                  ${shoe.price}
                </td>

                <td className="px-6 py-4 text-gray-900 whitespace-nowrap  ">
                  {shoe.discount > 0 ? shoe.discount + "%" : "Yok"}
                </td>

                <td className="px-6 py-3 space-x-2">
                  <Link
                    to={`/dashboard/edit/${shoe.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Düzenle
                  </Link>
                  <button
                    disabled={isPending}
                    onClick={() => mutate(shoe.id)}
                    className="cursor-pointer text-red-600 hover:underline"
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
