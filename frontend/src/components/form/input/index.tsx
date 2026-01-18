import { ErrorMessage, Field } from "formik";
import React, { type FC } from "react";

interface Props {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}

const Input: FC<Props> = ({ label, name, type, required }) => {
  return (
    <div className="relative flex flex-col gap-1">
      <label htmlFor={name} className="text-sm/6 font-semibold text-gray-900">
        {label}
        {required && <span className="text-red-500 ms-1">*</span>}
      </label>
      <div className="relative">
        <Field
          name={name}
          type={type}
          required={required}
          autoComplete={name}
          className={`rounded-md bg-white  px-3 py-1.5 text-base text-gray-900 ${type !== "checkbox" && "w-full  outline-1"} ${type === "checkbox" && "size-5 ms-1"} outline-offset-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm/6 transition`}
        />
        <ErrorMessage
          name={name}
          component={"span"}
          className="text-red-400 absolute left-0 -bottom-6"
        />
      </div>
    </div>
  );
};

export default Input;
