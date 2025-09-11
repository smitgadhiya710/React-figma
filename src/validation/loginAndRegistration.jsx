import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  userName: Yup.string().required("userName is required"),
  password: Yup.string().required("Password is required"),
});

export const registrationSchema = Yup.object().shape({
  userName: Yup.string().required("userName is required"),
  password: Yup.string().required("Password is required"),
  email: Yup.string().required("Email is required"),
  phone: Yup.number().required("Phone number is required"),
});
