import React, { useState, type FC } from "react";
import { SIZES } from "../../utils/contants";
interface Props {
  size: string;
}

const Size: FC<Props> = ({ size }) => {
  const [selected, setSelected] = useState<string>("");

  return (
    <div className="font-semibold mb-3">
      <h2 className="font-semibold mb-3">Ölçü Seçiniz</h2>
      <div className="grid grid-cols-5 gap-2">
        {SIZES.map((item) => {
          return (
            <button
              key={item}
              onClick={() => {
                if (!size.includes(item)) setSelected(item);
              }}
              className={`py-2 px-4 lg:px-0 rounded-md cursor-pointer transition hover:bg-zinc-400 disabled:bg-[#d2d1d3] disabled:text-[#8f8c91] bg-white text-black ${
                selected === item && "bg-black! text-white!"
              } ${
                size.includes(item) &&
                "bg-main-grey/20! text-black/20! cursor-not-allowed!"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Size;
