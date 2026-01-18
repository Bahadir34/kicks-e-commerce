import { type FC } from "react";

const Hero: FC = () => {
  return (
    <div className="relative mt-6 md:mt-12 xl:mt-20  ">
      <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-col px-4 py-2 sm:p-5 md:p-10 md:p-10">
        <p className="select-none text-grey text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px] xl:text-[24px]">
          Sadece geçerli süre ile
        </p>
        <h2 className="select-none text-white  text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-semibold">
          %30 indirim
        </h2>
        <p className="select-none text-grey md:max-w-[70%]">
          Rahatınız düşünülerek tasarlanan spor ayabbakılar, bir sonraki
          seansınıza tüm odağınızı verebilmenizi sağlar
        </p>
      </div>
      <img src="/banner.png" alt="banner" className="w-full object-cover" />
    </div>
  );
};

export default Hero;
