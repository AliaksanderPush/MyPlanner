import * as yup from 'yup';

const emailField = yup.string().required().email();
const passwordField = yup.string().required().min(3).max(20);

export const loginSchema = yup
  .object({
    email: emailField,
    password: passwordField,
  })
  .required();

export const registrationSchema = yup
  .object({
    name: yup.string().required().min(3).max(20),
    password: passwordField,
    confirmPassword: passwordField,
    email: emailField,
  })
  .required();

export const forgotPassSchema = yup
  .object({
    email: emailField,
  })
  .required();

export const changePasswordSchema = yup
  .object({
    password: passwordField,
    confirmPassword: passwordField,
  })
  .required();
