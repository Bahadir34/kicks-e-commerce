import React, { useState, type FC } from "react";
interface Props {
  colors: string;
}

const Color: FC<Props> = ({ colors }) => {
  const [selected, setSelected] = useState<string>("");

  const colorArray = colors.split(",");
  return (
    <div>
      <h2 className="font-semibold mb-3">Renk Seçiniz</h2>
      <div className="flex gap-5">
        {colorArray.map((color) => {
          return (
            <div
              key={color}
              className={`ring-3 rounded-full transition duration-500 ${
                selected === color ? "ring-my-blue " : "ring-zinc-400"
              }`}
            >
              <div
                onClick={() => setSelected(color)}
                className={`size-9 rounded-full cursor-pointer m-1   `}
                style={{ backgroundColor: color }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Color;
