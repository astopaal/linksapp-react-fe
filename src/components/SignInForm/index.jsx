import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const navigate = useNavigate();
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
  });
  return (
    <>
      <button
      className="border py-3 px-4 m-10"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-col items-center border w-3/12 h-full m-auto justify-center mt-40"
      >
        {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
        <Formik
          validationSchema={schema}
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            // Alert the input values of the form that we filled
            alert(JSON.stringify(values));
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <div className="login  p-10 backdrop-blur-lg shadow-lg font-mont">
              <div className="form flex flex-col justify-center items-center">
                {/* Passing handleSubmit parameter to html form onSubmit property */}
                <form noValidate onSubmit={handleSubmit}>
                  {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Enter email id / username"
                    className="form-control w-72 border-b inp_text mb-3  p-3 text-base font-mont bg-transparent focus:border focus:rounded transition duration-500 outline-none"
                    id="email"
                  />
                  {/* If validation is not passed show errors */}
                  <p className="error text-red-500 text-xs text-left mb-3">
                    {errors.email && touched.email && errors.email}
                  </p>
                  {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Enter password"
                    className="form-control w-72 border-b inp_text mb-3  p-3 text-base font-mont bg-transparent focus:border focus:rounded transition duration-500 outline-none"
                  />
                  {/*If validation is not passed show errors */}
                  <p className="error text-red-500 text-xs text-left mb-3">
                    {errors.password && touched.password && errors.password}
                  </p>
                  {/* Click on submit button to submit the form */}
                  <button
                    type="submit"
                    className="text-white uppercase border hover:bg-white hover:text-black py-3 px-4 text-base font-mont transition-all duration-1000 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          )}
        </Formik>
        <button className="border px-4 m-4 hover:bg-white hover:text-black transition ease-in-out duration-1000">
          password recovery.
        </button>
      </motion.div>
    </>
  );
};

export default SignInForm;
