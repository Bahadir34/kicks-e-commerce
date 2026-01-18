import React, { type FC, type ReactNode } from "react";
import { useUser } from "../../service/auth-queries";
import Loader from "../loader";
import { Navigate } from "react-router-dom";
interface Props {
  children: ReactNode;
  allowedRoles?: string[];
}

const Protected: FC<Props> = ({ children, allowedRoles }) => {
  const { data, error, isLoading } = useUser();

  if (isLoading) return <Loader />;

  if (!data) return <Navigate to={"/"} replace />;

  if (allowedRoles && !allowedRoles.includes(data!.role))
    return <Navigate to={"/"} replace />;

  if (!data) return <Navigate to={"/login"} replace />;

  return <>{children}</>;
};

export default Protected;
