import React, { useContext, useState } from "react";
import "./Login.css";
import {
  Link,
  NavLink,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Loading/Loading";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(location);

  const { handleLoginUser, loading } = useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState("");

  if (loading) return <Loading></Loading>;

  const handleLogIn = (e) => {
    e.preventDefault();
    setErrorMsg("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    handleLoginUser(email, password)
      .then((result) => {
        form.reset();
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMsg(error.message);
      });
  };

  return (
    <div className="login-form mx-auto pt-10 box-border min-h-[calc(100vh-121px)]  md:min-h-[calc(100vh-161px)] w-full md:w-3/6 lg:w-2/6">
      <form
        onSubmit={handleLogIn}
        className="rounded-lg shadow-lg bg-slate-50 px-5 py-1 dark:bg-slate-700 md:border lg:border lg:border-slate-200 dark:border-slate-600 lg:shadow-lg"
      >
        <h1 className="my-5 text-center text-3xl font-bold text-blue-700 dark:text-secondary lg:text-4xl">
          Please LogIn
        </h1>
        <div className="input-box pt-5">
          <input
            className="w-full rounded-md border bg-transparent py-2 px-4 text-xl focus:border-2 focus:border-blue-700 focus:outline-none dark:focus:border-blue-300 "
            autoComplete="off"
            type="email"
            required
            name="email"
          />
          <label
            htmlFor="text"
            className="input-label pointer-events-none bg-slate-50 dark:bg-slate-700 dark:text-white"
          >
            Email
          </label>
        </div>
        <div className="input-box mt-[-15px]">
          <input
            className="w-full rounded-md border bg-transparent py-2 px-4 text-xl focus:border-2 focus:border-blue-700 focus:outline-none dark:focus:border-blue-300 "
            autoComplete="off"
            type="password"
            name="password"
            required
          />

          <label
            htmlFor="password"
            className="input-label pointer-events-none bg-slate-50 dark:bg-slate-700 dark:text-white"
          >
            Password
          </label>

          {errorMsg && (
            <Link
              className="mt-[-20px] mb-3 block w-32 text-blue-700 hover:underline dark:text-blue-400 "
              to="forgotPassword"
            >
              forgot password?
            </Link>
          )}
        </div>

        <div className="pt-1 pb-5">
          <p>
            <small>
              Don't have an account?
              <NavLink
                to="/register"
                className="font-bold ml-1 cursor-pointer text-blue-600 hover:text-blue-900 dark:text-secondary dark:hover:text-blue-400"
              >
                Create account
              </NavLink>
            </small>
          </p>
          <input
            type="submit"
            className="hover:bg-blue-600 w-full mt-5 inline-block rounded bg-blue-500 py-1 px-3 text-white md:mr-10 lg:mr-10  lg:text-2xl"
            value="LogIn"
          />
        </div>
      </form>
      <div className="divider my-5 mx-5">OR</div>
    </div>
  );
};

export default Login;
