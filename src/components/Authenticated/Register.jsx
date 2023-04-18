import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Loading/Loading";

const Register = () => {
  const navigate = useNavigate();
  const { handleCreateUser, loading, user } = useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState("");

  if (loading) return <Loading></Loading>;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setErrorMsg("password didn't match to confirm password");
      return;
    } else if (password.length < 6) {
      setErrorMsg("Your password should have more than 6 charecters");
      return;
    }

    handleCreateUser(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className="login-form mx-auto pt-10 box-border min-h-[calc(100vh-121px)]  md:min-h-[calc(100vh-161px)] w-full md:w-3/6 lg:w-2/6">
      <form
        onSubmit={handleSubmit}
        className="rounded-lg bg-slate-50 px-5 py-3 dark:bg-slate-700 md:border lg:border lg:border-slate-200 dark:border-slate-600 lg:shadow-lg"
      >
        <h1 className="my-5 text-center text-3xl font-bold text-blue-700 dark:text-secondary lg:text-4xl">
          Please Register
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
        </div>
        <div className="input-box mt-[-15px]">
          <input
            className="w-full rounded-md border bg-transparent py-2 px-4 text-xl focus:border-2 focus:border-blue-700 focus:outline-none dark:focus:border-blue-300 "
            autoComplete="off"
            type="password"
            name="confirmPassword"
            required
          />

          <label
            htmlFor="password"
            className="input-label pointer-events-none bg-slate-50 dark:bg-slate-700 dark:text-white"
          >
            Confirm Password
          </label>
          {errorMsg && <p className="text-red-400">{errorMsg}</p>}
        </div>

        <div className="pt-1 pb-5">
          <p>
            <small>
              Already have an account?
              <NavLink
                to="/login"
                className="font-bold ml-1 text-blue-600 hover:text-blue-900 dark:text-secondary dark:hover:text-blue-400"
              >
                Login
              </NavLink>
            </small>
          </p>
          <input
            type="submit"
            className="hover:bg-blue-600 w-full mt-5 inline-block rounded bg-blue-500 py-1 px-3 text-white md:mr-10 lg:mr-10  lg:text-2xl"
            value="Register"
          />
        </div>
      </form>
      <div className="divider my-5 mx-5">OR</div>
    </div>
  );
};

export default Register;
