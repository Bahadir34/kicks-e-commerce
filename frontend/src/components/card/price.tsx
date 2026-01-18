import React, { type FC } from "react";
import type { Shoe } from "../../types";

interface Props {
  shoe: Shoe;
  designs?: string;
}

const Price: FC<Props> = ({ shoe, designs }) => {
  let price: number = shoe.price;

  price = price - (price * shoe.discount) / 100;

  return (
    <div
      className={`${designs} font-semibold ${
        shoe.discount > 0 ? "text-my-yellow" : "text-white"
      }`}
    >
      ${price.toFixed(2)}
    </div>
  );
};

export default Price;
