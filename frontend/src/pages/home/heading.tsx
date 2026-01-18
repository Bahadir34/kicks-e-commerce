import React, { type FC } from "react";

const Heading: FC = () => {
  return (
    <div className="flex justify-between items-start my-[24px] md:my-[32px] xl:my-[40ppx] lg:mt-[50px] xl:mt-[70px]">
      <h1 className="font-semibold uppercase leading-[96%] text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] select-none">
        Yeni Ürünleri <br /> Kaçırma
      </h1>
      <button
        type="button"
        className="bg-my-blue text-white py-[8px] px-[12px] rounded-[8px] lg:py-[12px] lg:px-[28px] transition duration-300 hover:brightness-90 cursor-pointer select-none"
      >
        Alışverişe Başla
      </button>
    </div>
  );
};

export default Heading;
