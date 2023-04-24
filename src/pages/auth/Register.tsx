import { Button, InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';
import { ErrorMessage, Field, FieldProps, Form, Formik } from 'formik';
import { MdEmail, MdPassword } from 'react-icons/md';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import handleToastr from '../../helpers/handleToastr';
import { useAppDispatch } from '../../helpers/useRedux';
import { registerUser } from '../../redux/authen/authSlice';
import styles from '../../styles/Register.module.css';

type RegisterUserProps = {
  email: string;
  password: string;
  confirm_password: string;
};

const initialValues: RegisterUserProps = {
  // name: '',
  email: '',
  password: '',
  confirm_password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Passwords must match')
    .required('Confirmation is required'),
});

const Register = () => {
  const dispatch = useAppDispatch();

  const onSubmit = (values: RegisterUserProps) => {
    const user = {
      email: values.email,
      password: values.password,
    };

    dispatch(registerUser(user)).then((res: any) => {
      console.log(res);
      if (res.meta.requestStatus === 'fulfilled') {
        const message = 'Signed up successfully😊';
        const icon = 'success';
        handleToastr(message, icon);
      }
      if (res.meta.requestStatus === 'rejected') {
        const message = 'Sign up unsuccessful🥺';
        const text = res.payload ? res.payload.error_description[0] : '';
        const icon = 'error';
        handleToastr(message, icon, text);
      }
    });
  };

  return (
    <section className={styles.register}>
      <div className={styles['register-banner']}>
        <h1 className="text-2xl font-bold">
          Streamline your logistics operations more effectively with Trakade
        </h1>
        <div>
          <img
            src="https://res.cloudinary.com/dskl0qde4/image/upload/v1682045366/Mobile-login_cropped_via_10015_io_bw8prl.png"
            alt=""
            className="w-[18rem] m-auto"
          />
        </div>
      </div>

      <div className={styles['register-form']}>
        {/* <h1>Register form</h1> */}

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <Field name="email">
              {({ field, meta }: FieldProps) => {
                return (
                  <div className="mb-5">
                    <TextField
                      id="email"
                      type="email"
                      fullWidth
                      label="Email"
                      color="success"
                      variant="outlined"
                      required
                      {...field}
                      error={meta.touched && meta.error ? true : false}
                      helperText={<ErrorMessage name="email" />}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <MdEmail />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                );
              }}
            </Field>
            <Field name="password">
              {({ field, meta }: FieldProps) => {
                return (
                  <div className="mb-5">
                    <TextField
                      id="password"
                      type="password"
                      fullWidth
                      label="Password"
                      color="success"
                      variant="outlined"
                      required
                      {...field}
                      error={meta.touched && meta.error ? true : false}
                      helperText={<ErrorMessage name="password" />}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <MdPassword />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                );
              }}
            </Field>
            <Field name="confirm_password">
              {({ field, meta }: FieldProps) => {
                return (
                  <div className="mb-5">
                    <TextField
                      id="confirm_password"
                      type="password"
                      fullWidth
                      label="Confirm Password"
                      color="success"
                      variant="outlined"
                      required
                      {...field}
                      error={meta.touched && meta.error ? true : false}
                      helperText={<ErrorMessage name="confirm_password" />}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <MdPassword />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                );
              }}
            </Field>
            <Button type="submit" variant="contained" fullWidth color="success">
              Register
            </Button>
          </Form>
        </Formik>

        <div className="text-center text-sm">
          <p className="my-3">
            By signing up, I agree to Trakade{' '}
            <Link to="/" className="underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to={'/'} className="underline">
              Privacy Policy
            </Link>
          </p>
          <p>
            Already have an account?{' '}
            <Link
              to={'/login'}
              className="text-green-600 font-bold hover:underline transition-all duration-300 ease-in-out"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
