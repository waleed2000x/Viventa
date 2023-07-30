/* eslint-disable react-hooks/exhaustive-deps */
import { createRef, useEffect } from "react";
import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { useFormik } from "formik";
import { ContactSchema } from "./ContactSchema";

const initialContact = {
  fname: "",
  lname: "",
  email: "",
  contact: "",
  message: "",
};

export default function Contact() {
  const {
    errors,
    touched,
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: initialContact,
    validationSchema: ContactSchema,
    onSubmit: (e, values) => {
      console.log(values.contact);
      e.preventDefault();
      resetForm();
    },
  });
  // console.log(errors.contact);
  const inputRef = createRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="contact-parent">
      <div className="contact-center">
        <div className="contact-form">
          <div className="contact-heading">
            <Typography variant="h3" color="#f3f6f9" gutterBottom>
              Contact Us
            </Typography>
          </div>
          <form noValidate>
            <div className="input-row">
              <TextField
                name="fname"
                value={values.fname}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
                style={{
                  width: "40%",
                }}
                required
                inputRef={inputRef}
                id="standard-basic"
                label="First Name"
                type="text"
                variant="standard"
                helperText={errors.fname && touched.fname ? errors.fname : null}
              />
              <TextField
                name="lname"
                value={values.lname}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
                style={{
                  width: "40%",
                }}
                required
                id="standard-basic"
                label="Last Name"
                type="text"
                variant="standard"
                helperText={errors.lname && touched.lname ? errors.lname : null}
              />
            </div>
            <div className="input-row">
              <TextField
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
                style={{
                  width: "40%",
                }}
                required
                id="standard-basic"
                type="email"
                label="Email"
                variant="standard"
                helperText={errors.email && touched.email ? errors.email : null}
              />
              <TextField
                name="contact"
                value={values.contact}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
                style={{
                  width: "40%",
                }}
                required
                // prefix="+"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">(+92)</InputAdornment>
                  ),
                }}
                type="tel"
                id="standard-basic"
                label="Contact No"
                variant="standard"
                helperText={
                  errors.contact && touched.contact ? errors.contact : null
                }
              />
            </div>
            <div className="input-row">
              <TextField
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
                required
                fullWidth
                label="Message"
                id="message"
                variant="standard"
                style={{ width: "90%" }}
                helperText={
                  errors.message && touched.message ? errors.message : null
                }
              />
            </div>
            <Button
              onSubmit={handleSubmit}
              endIcon={<SendRoundedIcon />}
              variant="contained"
              color="info"
              type="button"
              size="medium"
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
