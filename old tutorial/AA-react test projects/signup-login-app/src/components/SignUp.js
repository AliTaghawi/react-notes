import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from './styles/Signup-Login.module.scss';

const initialValues = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  isAccepted: false,
};

const onSubmit = (values, { resetForm }) => {
  console.log(values);
  resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  lastName: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid Email format!").required("Required!"),
  password: Yup.string()
    .min(7, "Password needs to be more then 7 characters!")
    .required("Required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords dos not match!")
    .required("Required!"),
  isAccepted: Yup.boolean().isTrue("the terms hasn't Accepted!"),
});

const SignUp = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className={styles.signup}>
      <form onSubmit={formik.handleSubmit}>
        <h2>Sign Up</h2>
        <div className={styles.inputField}>
          <label htmlFor="name">Name:</label>
          <input
            className={formik.errors.name && formik.touched.name && styles.error}
            type="text"
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name && (
            <span>{formik.errors.name}</span>
          )}
        </div>
        <div className={styles.inputField}>
          <label htmlFor="lastName">Last name:</label>
          <input
            className={formik.errors.lastName && formik.touched.lastName && styles.error}
            type="text"
            name="lastName"
            id="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.lastName && formik.touched.lastName && (
            <span>{formik.errors.lastName}</span>
          )}
        </div>
        <div className={styles.inputField}>
          <label htmlFor="email">Email:</label>
          <input
          className={formik.errors.email && formik.touched.email && styles.error}
            type="text"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <span>{formik.errors.email}</span>
          )}
        </div>
        <div className={styles.inputField}>
          <label htmlFor="password">Password:</label>
          <input
          className={formik.errors.password && formik.touched.password && styles.error}
            type="password"
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && (
            <span>{formik.errors.password}</span>
          )}
        </div>
        <div className={styles.inputField}>
          <label htmlFor="confirmPassword">Confirm password:</label>
          <input
          className={formik.errors.confirmPassword && formik.touched.confirmPassword && styles.error}
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <span>{formik.errors.confirmPassword}</span>
          )}
        </div>
        <div className={styles.checkboxInputField}>
          <label htmlFor="isAccepted">I accept the terms:</label>
          <input
            type="checkbox"
            name="isAccepted"
            id="isAccepted"
            value={formik.values.isAccepted}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.isAccepted && formik.touched.isAccepted && (
            <span>{formik.errors.isAccepted}</span>
          )}
        </div>
        <div className={styles.buttonField}>
          <Link to="/login">LogIn</Link>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
