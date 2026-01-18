import React, { type FC } from "react";
import { useShoes } from "../../service/shoes-queries";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Card from "../../components/card";

const List: FC = () => {
  const { data, isError, error, isLoading, refetch } = useShoes();

  if (isLoading) return <Loader />;

  if (isError) return <Error />;

  if (data)
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
        {data.data.map((shoe) => (
          <Card shoe={shoe} key={shoe.id} />
        ))}
      </div>
    );
};

export default List;
