import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./styles/Signup-Login.module.scss";
import { Link } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = (value, { resetForm }) => {
  console.log(value);
  resetForm();
};

const validationSchema = Yup.object({
  email: Yup.string().email("invalid userName!").required("Required!"),
  password: Yup.string()
    .min(7, "password needs to be more than 7 character!")
    .required("Required!"),
});

const LogIn = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className={styles.login}>
      <form onSubmit={formik.handleSubmit}>
        <h2>Login</h2>
        <div className={styles.inputField}>
          <label htmlFor="email">Email:</label>
          <input className={formik.errors.email && formik.touched.email && styles.error} type='email' name='email' id='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.email && formik.touched.email && <span>{formik.errors.email}</span>}
        </div>
        <div className={styles.inputField}>
          <label htmlFor="password">Password:</label>
          <input className={formik.errors.password && formik.touched.password && styles.error} type='password' name='password' id='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.password && formik.touched.password && <span>{formik.errors.password}</span>}
        </div>
        <div className={styles.buttonField}>
          <Link to='/signup'>SignUp</Link>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
