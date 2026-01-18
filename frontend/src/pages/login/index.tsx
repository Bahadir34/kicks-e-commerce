import { Form, Formik, useFormikContext } from "formik";
import { type FC } from "react";
import Input from "../../components/form/input";
import { Link } from "react-router-dom";
import { LOGIN_INITIAL_VALUES } from "../../utils/contants";
import { LoginSchema } from "../../utils/validation-schemas";
import type { LoginValues } from "../../types";
import { useLogin } from "../../service/auth-queries";

const Login: FC = () => {
  const { mutate, isPending } = useLogin();

  const handleSubmit = (values: LoginValues) => {
    console.log(values);
    mutate(values);
  };

  return (
    <div className="min-h-screen flex-1 flex flex-col justify-center">
      <div className="sm:mx-auto w-full sm:max-w-sm">
        <img src="/logo.svg" alt="Kicks Logo" className="mx-auto h-10 w-auto" />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Giriş Yap
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          initialValues={LOGIN_INITIAL_VALUES}
          onSubmit={handleSubmit}
          validationSchema={LoginSchema}
        >
          {(formik) => {
            const isDirty = Object.values(formik.values).every((item) => item);

            return (
              <Form className="space-y-8">
                <Input label="E-posta" name="email" type="email" required />
                <Input label="Şifre" name="password" type="password" required />
                <div className="mt-3">
                  <button
                    disabled={isPending || !isDirty}
                    type="submit"
                    className="disabled:opacity-50 disabled:hover:bg-indigo-600 disabled:cursor-not-allowed w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 cursor-pointer transition"
                  >
                    Giriş Yap
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Hesabınız yok mu?{" "}
          <Link
            to={"/register"}
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Kayıt Ol
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
