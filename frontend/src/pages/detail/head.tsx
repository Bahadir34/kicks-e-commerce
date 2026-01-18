import React, { type FC } from "react";
import type { Shoe } from "../../types";
import Badge from "../../components/card/badge";
import Price from "../../components/card/price";

interface Props {
  shoe: Shoe;
}

const Head: FC<Props> = ({ shoe }) => {
  return (
    <div className="flex flex-col gap-4">
      <Badge shoe={shoe} />

      <h2 className="font-semibold text-[24px] md:text-[28px] lg:text-[32px] mt-[55px]">
        {shoe.name}
      </h2>
      <div className="text-2xl flex gap-1 items-center">
        <Price shoe={shoe} designs="text-my-blue!" />
        {shoe.discount > 0 && (
          <span className="ps-3 line-through text-[20px]">
            {`$${shoe.price.toFixed(2)}`}
          </span>
        )}
      </div>
    </div>
  );
};

export default Head;
