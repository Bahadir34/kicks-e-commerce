import React, { type FC } from "react";
import type { ProductValues, Shoe } from "../../types";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { INPUT_ARRAY } from "../../utils/contants";
import Input from "./input";
import DomPurify from "dompurify";
import { useShoe } from "../../service/shoes-queries";
import Error from "../error";

interface Props {
  onSubmit: (shoe: ProductValues) => void;
  isPending: boolean;
  id?: string;
}

const Form: FC<Props> = ({ onSubmit, isPending, id }) => {
  const { data, isLoading, error, refetch } = useShoe(id as string);
  const handleSubmit = (values: ProductValues) => {
    onSubmit(values);
  };

  const initialValues: ProductValues = {
    name: data?.data.name || "",
    price: data?.data.price || 0,
    discount: data?.data.discount || 0,
    color: data?.data.color || "",
    size: data?.data.size || "",
    description: DomPurify.sanitize(data?.data.description as string) || "",
    isNew: data?.data.isNew || false,
    gender: data?.data.gender || "men",
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormikForm className="flex flex-col gap-5">
        {INPUT_ARRAY.map((input) => (
          <Input key={input.name} {...input} />
        ))}

        <div className="flex items-center gap-5 ">
          <div className="flex items-center gap-2 ">
            <Field type={"radio"} name="gender" value="men" id="men" />
            <label htmlFor="men">Erkek</label>
          </div>

          <div className="flex items-center gap-2">
            <Field type={"radio"} name="gender" value="women" id="women" />
            <label htmlFor="women">Kadın</label>
          </div>
        </div>
        <button
          disabled={isPending}
          type="submit"
          className="bg-my-blue py-2 px-4 rounded-md text-white transition hover:bg-my-blue/80 cursor-pointer"
        >
          Gönder
        </button>
      </FormikForm>
    </Formik>
  );
};

export default Form;
