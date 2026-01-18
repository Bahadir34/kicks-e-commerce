import { object, string } from "yup";

export const RegisterSchema = object().shape({
  firstName: string().required("Adınızı Giriniz"),
  lastName: string().required("Adınızı Giriniz"),
  email: string()
    .email("Lütfen geçerli formatta bir email adresi giriniz")
    .required("Eposta adresinizi giriniz"),
  password: string()
    .required("Lütfen şifre giriniz")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Şifreniz güçlü değil"
    ),
});

export const LoginSchema = object().shape({
  email: string()
    .email("Lütfen geçerli formatta bir email adresi giriniz")
    .required("Eposta adresinizi giriniz"),
  password: string()
    .required("Lütfen şifre giriniz")
    ,
});
