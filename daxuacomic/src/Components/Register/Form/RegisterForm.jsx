import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Formik } from "formik";
import * as Yup from "yup";
import { RegisterComics } from '../../../api/user'
import { toast } from 'react-toastify';
const RegisterForm = () => {
  let [checkMail, setCheckMail] = useState(false);

  let validationSchemas = Yup.object({
    firstName: Yup.string().required("Vui lòng điền đầy đủ thông tin"),
    lastName: Yup.string().required("Vui lòng điền đầy đủ thông tin"),
    email: Yup.string()
      .email("Nhập địa chỉ Email hợp lệ '@gmail.com'")
      .required("Vui lòng điền đầy đủ thông tin"),
    password: Yup.string()
      .required("Vui lòng điền đầy đủ thông tin")
      .min(6, "Mật khẩu phải có ít nhất 6 kí tự"),
    repeatPassword: Yup.string()
      .required("Vui lòng điền đầy đủ thông tin")
      .oneOf([Yup.ref("password")], "Mật khẩu không trùng khớp"),
  });

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          repeatPassword: "",
        }}
        validationSchema={validationSchemas}
        onSubmit={async (values) => {
          const user = {
            email: values.email,
            password: values.password,
            name: values.firstName + values.lastName,
            password_confirmation: values.repeatPassword,

          };

          let data = await RegisterComics(user);
          console.log(data)
          if (data?.data?.message === "User successfully registered") {
            toast.success("Đăng Kí thành công");

            // Router.push(`/login?email=${values.email}`);
            values.email = "";
            values.password = "";
            values.repeatPassword = "";
            values.firstName = "";
            values.lastName = "";
          } else {
            if (data?.data?.message?.email[0] === "The email has already been taken.") {
              toast.error("Email đã tồn tại");
              setCheckMail(true);
              return;
            }
            toast.error("Đăng Kí thất bại");
          }


        }}
      >
        {({
          values,
          errors,
          handleBlur,
          handleSubmit,
          handleChange,
          touched
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <p className="label control-label">
                <span id="field-name-prefix-label">Title*</span>
              </p>

              <div className="FirstName_Register">
                <TextField
                  error={errors.firstName && touched.firstName ? true : false}
                  id="firstName"
                  label="Tên *"
                  value={values.firstName}
                  className={`${errors.firstName && touched.firstName ? "styleBoderSignUp" : ""}`}
                  name="firstName"
                  variant="outlined"
                  onChange={handleChange}
                  helperText={`${errors.firstName && touched.firstName ? errors.firstName : ""}`}
                />
              </div>
              <div className="LastName_Register">
                <TextField
                  error={errors.lastName && touched.lastName ? true : false}
                  id="lastName"
                  label="Họ *"
                  name="lastName"
                  value={values.lastName}
                  variant="outlined"
                  onChange={handleChange}
                  className={`${errors.lastName && touched.lastName ? "styleBoderSignUp" : ""}`}
                  helperText={`${errors.lastName && touched.lastName ? errors.lastName : ""}`}
                />
              </div>
              <div className="Email_Register">
                <TextField
                  error={errors.email && touched.email ? true : false}
                  id="email"
                  label="Email *"
                  name="email"
                  value={values.email}
                  variant="outlined"
                  onChange={handleChange}
                  className={!checkMail ? `${errors.email && touched.email ? "styleBoderSignUp" : ""}` : "styleBoderSignUp"}
                  onBlur={(e) => {
                    setCheckMail(false)
                  }}
                  helperText={`${errors.email && touched.email ? errors.email : checkMail ? "Email đã tồn tại" : ""}`}
                />
              </div>
              <div className="Password_Register">
                <TextField
                  error={errors.password && touched.password ? true : false}
                  id="outlined-password-input"
                  label="Mật khẩu"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                  variant="outlined"
                  className={`${errors.password && touched.password ? "styleBoderSignUp" : ""}`}
                  value={values.password}
                  helperText={`${errors.password && touched.password ? errors.password : ""}`}
                />
              </div>
              <div className="ResetPassword_Register">
                <TextField
                  error={errors.repeatPassword && touched.repeatPassword ? true : false}
                  id="outlined-password-input"
                  label="Xác nhận"
                  type="password"
                  className={`${errors.repeatPassword && touched.repeatPassword ? "styleBoderSignUp" : ""}`}
                  autoComplete="current-password"
                  variant="outlined"
                  name="repeatPassword"
                  onChange={handleChange}
                  value={values.repeatPassword}
                  helperText={`${errors.repeatPassword && touched.repeatPassword ? errors.repeatPassword : ""}`}
                />
              </div>
              <div className="submitForm">
                <button type="submit" className="btn btnSubmit" >
                  SUBMIT
                                      </button>
              </div>
            </div>
          </form>
        )}
      </Formik>

    </>
  );
};

export default RegisterForm;
