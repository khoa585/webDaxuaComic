import React, { useContext } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Button } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FaceIcon from "@material-ui/icons/Face";
import Header from '../Header/Header';
import { Formik, Form, FastField } from 'formik';
import * as Yup from "yup";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import './style.scss';
import { LoginComics } from '../../api/user'
import { AuthContext } from '../../context/AuthContext'
import { toast } from 'react-toastify';
export default function Login() {
    const { login } = React.useContext(AuthContext);
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Nhập địa chỉ Email hợp lệ '@gmail.com'")
            .required("Vui lòng điền đầy đủ thông tin"),
        password: Yup.string().required("Vui lòng điền đầy đủ thông tin")
            .min(6, "Mật khẩu phải có ít nhất 6 kí tự"),
    });
    return (
        <React.Fragment>
            <Header />
            <Container fluid className="content_login">
                <Container className="container_Login">
                    <Breadcrumbs aria-label="breadcrumb" className="breadcrumb_login">
                        <span>
                            <Link to="/">  <HomeIcon />&#160; Trang Chủ</Link>
                        </span>
                        <span>
                            <FaceIcon />&#160; Đăng Nhập
                        </span>
                    </Breadcrumbs>
                </Container>
                <Row className="justify-content-center" >
                    <Col lg={6} sm={12} xs={12}>
                        <div>
                            <Avatar>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Đăng Nhập
                        </Typography>
                            <Formik
                                initialValues={{ email: '', password: '' }}
                                validationSchema={validationSchema}
                                onSubmit={async (values) => {
                                    let user = {
                                        email: values.email,
                                        password: values.password,
                                    }
                                    let data = await LoginComics(user)
                            
                                    if (data?.data?.token_type === "bearer") {
                                        let token = data?.data?.access_token
                                        let userInfor = data?.data?.user
                                        login(token, userInfor)
                                        toast.success(`Xin chào ${userInfor.name}`,)
                                        values.email = ""
                                        values.password = ""
                                
                                    } else {
                                        toast.error("Vui Lòng kiểm tra Email hoặc Mật khẩu",)
                                    }
                                }}
                            >
                                {({
                                    values,
                                    errors,
                                    handleBlur,
                                    handleSubmit,
                                    touched
                                }) => (

                                    <Form noValidate onSubmit={handleSubmit}>
                                        <FastField
                                            error={errors.email && touched.email ? true : false}
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            label="Email Address"
                                            id="email"
                                            name="email"
                                            className={errors.email && touched.email ? "styleBoderSignUp" : ""}
                                            as={TextField}
                                            value={values.email}
                                            helperText={`${errors.email && touched.email ? errors.email : ""}`}
                                        >
                                        </FastField>
                                        <FastField
                                            error={errors.password && touched.password ? true : false}
                                            variant="outlined"
                                            margin="normal"
                                            autoComplete="current-password"
                                            label="Mật Khẩu"
                                            id="password"
                                            fullWidth
                                            className={errors.password && touched.password ? "styleBoderSignUp" : ""}
                                            name="password"
                                            as={TextField}
                                            value={values.password}
                                            helperText={`${errors.password && touched.password ? errors.password : ""}`}
                                        >
                                        </FastField>
                                        <FormControlLabel
                                            control={<Checkbox value="remember" color="primary" />}
                                            label="Ghi Nhớ"
                                        />
                                        <div className="options_login_form">

                                            <span>Quên Mật Khẩu</span>


                                            <Link to="/sign-up"><span>Đăng Ký </span></Link>

                                        </div>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            className="submit_login"
                                        >
                                            Đăng Nhập
                                            </Button>
                                    </Form>
                                )}
                            </Formik>
                            <span style={{ width: "100%" }}>

                            </span>

                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="distant_Comics"></div>
            <Footer></Footer>
        </React.Fragment >
    )
}
