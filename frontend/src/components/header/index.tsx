import React, { type FC } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import USerInfo from "./user-info";

const Header: FC = () => {
  return (
    <header className="bg-white  flex items-center justify-between p-4 md:p-6 xl:p-8 rounded-4xl    mb-6 md:mb-7 xl:mb-8">
      <button className="md:hidden cursor-pointer text-xl">
        <Menu />
      </button>

      <nav className="hidden md:flex items-center gap-6 xl:gap-10 font-semibold">
        <Link to={"/"}>Yeni Gelenler</Link>
        <Link to={"/"}>Erkek</Link>
        <Link to={"/"}>Kadın</Link>
      </nav>

      <Link to={"/"} className="flex justify-center items-center">
        <img src="/logo.svg" alt="logo" className=" " />
      </Link>

      <div className="flex justify-end items-center">
        <USerInfo />
      </div>
    </header>
  );
};

export default Header;
