import React, { type FC } from "react";
import Images from "./images";
import Head from "./head";
import Color from "./color";
import Size from "./size";
import Foot from "./foot";
import { useShoe } from "../../service/shoes-queries";
import { useParams } from "react-router-dom";
import Error from "../../components/error";
import Loader from "../../components/loader";

const Detail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError, refetch } = useShoe(id!);
  2;
  if (isLoading) return <Loader />;

  if (!data || isError) return <Error />;

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-4">
      <div className="xl:col-span-2">
        <Images images={data.data.picture} />
      </div>
      <div className="flex flex-col gap-8">
        <Head shoe={data.data} />
        <Color colors={data.data.color} />
        <Size size={data.data.size} />
        <Foot description={data.data.description} />
      </div>
    </div>
  );
};

export default Detail;
