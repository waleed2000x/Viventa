import * as Yup from 'yup'

export const UserSchema = Yup.object({
    name: Yup.string()
    .min(2, 'Atleast 2 charecters')
    .required('Name is required')
    .matches(/^[a-zA-Z]+ [a-zA-Z]+$/, 'Name must be two words separated by a space'),
    email: Yup.string()
    .required("Email is Required")
    .matches(/@/, "Invalid Email"),
    contact: Yup.string()
    .required("Number is required")
    .matches(/^\d{10}$/, "Must be 10 integers")
})
