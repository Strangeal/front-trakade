import { Button, InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';
import { ErrorMessage, Field, FieldProps, Form, Formik } from 'formik';
import { MdEmail, MdPassword } from 'react-icons/md';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import styles from '../../styles/Register.module.css';

type RegisterUserProps = {
  email: string;
  password: string;
  confirm_password: string;
};


const Register = () => {
  const onSubmit = (values: RegisterUserProps) => {
    console.log(values);
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
            className='w-[18rem] m-auto'
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
          {(formik) => {
            return (
              <Form>
                <Field name="email">
                  {({ field, meta }: FieldProps) => {
                    return (
                      <div className="mb-5">
                        <TextField
                          id="name"
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
                <Button variant="contained" fullWidth color="success">
                  Register
                </Button>
              </Form>
            );
          }}
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
