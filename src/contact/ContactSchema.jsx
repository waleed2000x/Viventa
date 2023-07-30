import * as Yup from "yup";

export const ContactSchema = Yup.object({
  fname: Yup.string()
    .required("First Name is Required")
    .min(2, "First Name must be at least 2 characters"),
  lname: Yup.string()
    .required("Last Name is Required")
    .min(2, "Last Name must be at least 2 characters"),
  email: Yup.string()
    .required("Email is Required")
    .matches(/@/, "Invalid Email"),
  contact: Yup.string()
    .required("Number is required")
    .matches(/^\d{10}$/, "Must be 10 integers"),
  message: Yup.string().required("Message is required"),
});
