import React from "react";
import { useFormik } from "formik";
import { registrationSchema } from "../../validation/loginAndRegistration";
import { useRegisterMutation } from "../../feature/authSlice";
import Button from "../../components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Registration() {
  const navigate = useNavigate();
  const [register] = useRegisterMutation();

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
      email: "",
      password: "",
      phone: "",
    },
    validationSchema: registrationSchema,
    onSubmit: async (values) => {
      try {
        const newUser = await register(values).unwrap();
        console.log("Registered:", newUser);

        resetForm();
        toast.success("Registration successful!");
        navigate("/login");
      } catch (err) {
        toast.error(err?.data?.message || "Something went wrong");
      }
    },
  });

  return (
    <div className="flex max-h-screen mt-[7%] items-center justify-center bg-primary-muted">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
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

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your email"
              className={`w-full border px-3 py-2 rounded-lg outline-none transition ${
                errors.email && touched.email
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {errors.email && touched.email && (
              <div className="text-red-500 text-sm mt-1">{errors.email}</div>
            )}
          </div>

          {/* phone number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="number"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Confirm your password"
              className={`w-full border px-3 py-2 rounded-lg outline-none transition ${
                errors.phone && touched.phone
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {errors.phone && touched.phone && (
              <div className="text-red-500 text-sm mt-1">{errors.phone}</div>
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
            <Button
              type="submit"
              label="Register"
              className="bg-accent w-full"
            />
          </div>
        </form>

        <p className="flex flex-col sm:flex-row pt-4 gap-1 text-secondary-muted">
          Already have an account ?
          <Link
            to="/login"
            className={"transition-colors hover:text-accent text-secondary"}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Registration;
