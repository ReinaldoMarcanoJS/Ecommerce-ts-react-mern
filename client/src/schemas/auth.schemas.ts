import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Short!")
      .max(20, "Long!")
      .required("Required"),
    lastname: Yup.string()
      .min(2, "Short!")
      .max(20, "Long!")
      .required("Required"),
    email: Yup.string().email("Invalided").required("Required"),
    password: Yup.string()
      .min(6, "Short!")
      .max(20, "Long!")
      .required("Required"),
    confirmpassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Error.')
  });

  const SigninSchema = Yup.object().shape({
    email: Yup.string().email("Invalided").required("Required"),
    password: Yup.string().min(6, "Short!").max(20, "Long!").required("Required"),
  });
  

  export {SignupSchema, SigninSchema}
  