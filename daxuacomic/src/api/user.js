import axios from "./axiosLaravel";
export const LoginComics = (user) => {
  const { email, password } = user
  return axios.post("/api/auth/login", {
    email,
    password
  })
}
export const RegisterComics = (data) => {

  return axios.post("/api/auth/register", {
      email: data.email,
      password: data.password,
      name: data.name,
      password_confirmation: data.password_confirmation

  })
}
