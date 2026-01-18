import { Search, User } from "lucide-react";
import { useState, type FC } from "react";
import { Link } from "react-router-dom";
import { useLogout, useUser } from "../../service/auth-queries";

const USerInfo: FC = () => {
  const { data, isLoading, error } = useUser();
  const { mutate, isPending } = useLogout();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (!data || error) return null;

  return (
    <div className="flex items-center gap-6 xl:gap-10">
      <button type="button" className="cursor-pointer max-md:hidden">
        <Search />
      </button>
      {data && !error && (
        <button className="relative cursor-pointer user-info">
          <User
            onClick={() => setIsOpen(!isOpen)}
            className="hover:text-zinc-500 transition"
          />
        </button>
      )}

      {isOpen && (
        <div className="absolute top-25 md:top-29 xl:top-33 right-5 md:right-10 lg:right-15 xl:right-20 bg-white shadow-lg rounded-lg   w-48 z-10 flex flex-col   overflow-hidden border border-zinc-300">
          <button type="button" className="header-button font-bold">
            <span>
              {data?.firstName} {" " + data?.lastName}
            </span>
            <span></span>
          </button>

          {data?.role === "admin" && (
            <Link to={"/dashboard"} className="header-button text-center">
              <span className="">Admin Paneli</span>
            </Link>
          )}
          <button
            onClick={() => mutate()}
            type="button"
            className="header-button"
          >
            Çıkış Yap
          </button>
        </div>
      )}
    </div>
  );
};

export default USerInfo;
