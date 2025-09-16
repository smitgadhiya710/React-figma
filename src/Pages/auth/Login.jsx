import React from "react";
import { useFormik } from "formik";
import { loginSchema } from "../../validation/loginAndRegistration";
import { useLoginMutation } from "../../feature/authSlice";
import Button from "../../components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        const userLogin = await login(values).unwrap();

        localStorage.setItem(
          "token",
          JSON.stringify(userLogin?.data?.accessToken)
        );

        resetForm();
        toast.success("Login successfully");
        navigate("/podcast");
      } catch (err) {
        toast.error(err?.data?.message || "Something went wrong");
      }
    },
  });

  return (
    <div className="flex max-h-screen mt-[10%] items-center justify-center bg-primary-muted">
      <div className="w-full justify-center items-center max-w-md bg-primary p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              name="userName"
              value={values.userName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your username"
              className={`w-full border px-3 py-2 rounded-lg outline-none transition ${
                errors.userName && touched.userName
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {errors.userName && touched.userName && (
              <div className="text-red-500 text-sm mt-1">{errors.userName}</div>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your password"
              className={`w-full border px-3 py-2 rounded-lg outline-none transition ${
                errors.password && touched.password
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {errors.password && touched.password && (
              <div className="text-red-500 text-sm mt-1">{errors.password}</div>
            )}
          </div>

          {/* Buttons */}
          <div className="items-center mt-6">
            <Button type="submit" label="Login" className="bg-accent w-full" />
          </div>
        </form>
        <p className="flex pt-4 gap-1 text-secondary-muted">
          Don't have an account ?
          <Link
            to="/registration"
            className={"transition-colors hover:text-accent text-secondary"}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
