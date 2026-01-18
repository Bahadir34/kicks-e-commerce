import React, { type FC } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Input from "../../components/form/input";
import { REGISTER_INITIAL_VALUES } from "../../utils/contants";
import type { RegisterValues } from "../../types";
import { RegisterSchema } from "../../utils/validation-schemas";
import { useRegister } from "../../service/auth-queries";

const Register: FC = () => {
  const { mutate, isPending } = useRegister();

  const handleSubmit = (values: RegisterValues) => {
    console.log(values);

    mutate(values);
  };

  return (
    <div className="min-h-screen flex-1 flex flex-col justify-center">
      <div className="sm:mx-auto w-full sm:max-w-sm">
        <img src="/logo.svg" alt="Kicks Logo" className="mx-auto h-10 w-auto" />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Hesabınızı Oluşturun
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          initialValues={REGISTER_INITIAL_VALUES}
          onSubmit={handleSubmit}
          validationSchema={RegisterSchema}
        >
          <Form className="space-y-8">
            <Input label="Adınız" name="firstName" type="text" required />
            <Input label="Soyadınız" name="lastName" type="text" required />
            <Input label="E-posta" name="email" type="email" required />
            <Input label="Şifre" name="password" type="password" required />
            <div className="mt-3">
              <button
                disabled={isPending}
                type="submit"
                className="disabled:opacity-50 w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 cursor-pointer transition"
              >
                Hesap Oluştur
              </button>
            </div>
          </Form>
        </Formik>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Hesabınız var mı?{" "}
          <Link
            to={"/login"}
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Giriş Yap
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
