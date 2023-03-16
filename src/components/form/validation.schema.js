import * as Yup from "yup";

export const signupValidationSchema = Yup.object().shape({
  fullname: Yup.string().required(),
  email: Yup.string().email().required(),
  regno: Yup.string().required(),
  password: Yup.string().min(8).max(20).required(),
  faculty: Yup.string().required(),
  department: Yup.string().required(),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(20).required(),
});
