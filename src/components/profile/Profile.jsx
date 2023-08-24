import { useContext, useState } from "react";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { UserContext } from "../../context/userContext";
import { Alert, Button, FormHelperText, TextField } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useFormik } from "formik";
import { UserSchema } from "../signupModal/UserSchema";
import { Helmet } from "react-helmet";

export default function Profile() {
  const [updateProfile, setUpdateProfile] = useState(false);
  const [showSnack, setShowSnack] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const initialValues = {
    name: "",
    email: "",
    contact: "",
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: UserSchema,
    onSubmit: () => {
      resetForm();
    },
  });
  const handleUpdate = () => {
    setShowSnack(true);
    setTimeout(() => {
      setShowSnack(false);
    }, 3000);
    setUser(values);
    handleSubmit;
  };
  // console.log(user);
  // console.log("user");
  // console.log(values);
  // console.log("values");

  return (
    <div className="profile-parent">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      {showSnack ? (
        <Snackbar open={showSnack} autoHideDuration={3000}>
          <Alert severity="success">Profile Credidentials Updated</Alert>
        </Snackbar>
      ) : null}
      <div
        className="profile-title"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60" />
        <h1>
          Your Viventa&apos;s <span>Profile</span>
        </h1>
      </div>
      <div
        className="profile-details"
        data-aos="zoom-in"
        data-aos-duration="2500"
      >
        <h1>
          Your <span>Profile Details</span>
        </h1>
        {updateProfile ? (
          <div className="profile-inputs-enabled">
            <label style={{ fontWeight: "600" }}>
              NAME
              <TextField
                variant="filled"
                color="success"
                name="name"
                label={user.name}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                autoComplete="off"
              />
              <FormHelperText style={{ color: "#fff" }}>
                {touched.name && errors.name ? errors.name : null}
              </FormHelperText>
            </label>
            <label style={{ fontWeight: "600" }}>
              EMAIL
              <TextField
                variant="filled"
                color="success"
                name="email"
                label={user.email}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                autoComplete="off"
              />
              <FormHelperText style={{ color: "#fff" }}>
                {touched.email && errors.email ? errors.email : null}
              </FormHelperText>
            </label>
            <label style={{ fontWeight: "600" }}>
              CONTACT
              <TextField
                variant="filled"
                color="success"
                name="contact"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contact}
                label={user.contact}
                autoComplete="off"
              />
              <FormHelperText style={{ color: "#fff" }}>
                {touched.contact && errors.contact ? errors.contact : null}
              </FormHelperText>
            </label>
          </div>
        ) : (
          <div className="profile-inputs-disabled">
            <label style={{ fontWeight: "600" }}>
              <TextField
                variant="outlined"
                label={user.name}
                InputProps={{
                  readOnly: true,
                }}
              />
            </label>
            <label style={{ fontWeight: "600" }}>
              <TextField
                variant="outlined"
                label={user.email}
                InputProps={{
                  readOnly: true,
                }}
              />
            </label>
            <label style={{ fontWeight: "600" }}>
              <TextField
                variant="outlined"
                label={user.contact}
                InputProps={{
                  readOnly: true,
                }}
              />
            </label>
          </div>
        )}
        <div className="profile-buttons">
          <Button
            variant="outlined"
            size="large"
            color="secondary"
            onClick={() => setUpdateProfile(false)}
          >
            Go Back
          </Button>
          {updateProfile ? (
            <Button
              variant="outlined"
              size="large"
              color="success"
              onClick={handleUpdate}
            >
              Update
            </Button>
          ) : (
            <Button
              variant="outlined"
              size="large"
              color="success"
              onClick={() => setUpdateProfile(!updateProfile)}
            >
              Click to Update
            </Button>
          )}
          <Button
            variant="outlined"
            size="large"
            color="error"
            onClick={() => window.location.reload(true)} // HARD REFRESHES THE PAGE
          >
            <LogoutRoundedIcon />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
