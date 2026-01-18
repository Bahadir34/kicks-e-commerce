export type LoginValues = {
  email: string;
  password: string;
};

export type RegisterValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "user" | "admin";
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type RegisterResponse = {
  message: string;
  data: User;
};

export type RefreshResponse = {
  accessToken: string;
};

export type LogoutResponse = {
  message: string;
};

export type Shoe = {
  id: string;
  name: string;
  picture: string[];
  description: string;
  isNew: boolean;
  discount: number;
  size: string;
  color: string;
  gender: "women" | "men";
  price: number;
  __v: number;
  createdAt: string;
  updatedAt: string;
};

export interface ProductValues {
  name: string;
  price: number;
  discount: number;
  color: string;
  size: string;
  description: string;
  isNew: boolean;
  gender: "men" | "women" | "unisex";
}

export type ShoeResponse = {
  message: string;
  data: Shoe[];
};

export type SingleShoeResponse = {
  message: string;
  data: Shoe;
};
