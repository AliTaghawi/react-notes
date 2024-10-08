import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//graphql
import { useMutation } from "@apollo/client";
import { SEND_NEW_COMMENT_INFO } from "../../../graphql/mutations";

//MUI
import { Button, Grid, TextField, Typography } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

//MUI // Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

//formik preparation
const initialValues = {
  name: "",
  email: "",
  text: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("ضروری!"),
  email: Yup.string().email("ایمیل نامعتبر است!").required("ضروری!"),
  text: Yup.string().required("ضروری!"),
});

const CommentFrom = ({slug}) => {
  const [isSented, setIsSented] = useState(false);
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const [createComment, { loading, data, error }] = useMutation(
    SEND_NEW_COMMENT_INFO,
    {
      variables: {
        name: formik.values.name,
        email: formik.values.email,
        text: formik.values.text,
        slug: slug,
      },
    }
  );

  function onSubmit(values, { resetForm }) {
    createComment();
    setIsSented(true);
    resetForm();
  }

  if (data && isSented) {
    toast.success("کامنت شما با موفقیت ارسال شد", {
      position: "top-center",
      autoClose: 2000,
    });
    setIsSented(false);
  } else if (error && isSented) {
    toast.error("ارسال با مشکل روبه‌رو شد لطفا مجدداً تلاش کنید", {
      position: "top-center",
      autoClose: 2000,
    });
    setIsSented(false);
  }

  return (
    <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
      <Grid
        container
        sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}
        py={1}
      >
        <Grid item xs={12} m={2}>
          <Typography component="p" variant="h6" color="primary">
            فرم ارسال کامنت
          </Typography>
        </Grid>
        <CacheProvider value={cacheRtl}>
          <Grid item xs={12} m={2}>
            <TextField
              label="نام"
              name="name"
              fullWidth
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              {...(formik.errors.name && formik.touched.name
                ? { helperText: formik.errors.name, error: true }
                : null)}
            />
          </Grid>
          <Grid item xs={12} m={2}>
            <TextField
              label="ایمیل"
              name="email"
              type="email"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              {...(formik.errors.email && formik.touched.email
                ? { helperText: formik.errors.email, error: true }
                : null)}
            />
          </Grid>
          <Grid item xs={12} m={2}>
            <TextField
              label="متن کامنت"
              name="text"
              multiline
              minRows={4}
              fullWidth
              value={formik.values.text}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              {...(formik.errors.text && formik.touched.text
                ? { helperText: formik.errors.text, error: true }
                : null)}
            />
          </Grid>
          <Grid item xs={12} m={2}>
            {loading ? (
              <Button variant="contained" disabled>
                در حال ارسال
              </Button>
            ) : (
              <Button type="submit" variant="contained">
                ارسال
              </Button>
            )}
          </Grid>
        </CacheProvider>
      </Grid>
      <ToastContainer />
    </form>
  );
};

export default CommentFrom;
