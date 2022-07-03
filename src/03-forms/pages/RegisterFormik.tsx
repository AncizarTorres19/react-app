import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import { MyTextInput } from '../components';
import '../styles/styles.css';

export const RegisterFormik = () => {
    return (
        <div>
            <h1>Register Formik</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    repeat_password: ''
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        firstName:
                            Yup.string()
                                .min(2, 'Must be 2 characters or more')
                                .max(15, 'Must be 15 characters or less')
                                .required('Required'),
                        lastName:
                            Yup.string()
                                .min(2, 'Must be 2 characters or more')
                                .max(15, 'Must be 15 characters or less')
                                .required('Required'),
                        email:
                            Yup.string()
                                .required('Required')
                                .email('Invalid email address'),
                        password:
                            Yup.string()
                                .required('Required')
                                .min(6, 'Must be 6 characters or more'),
                        repeat_password:
                            Yup.string()
                                .oneOf([Yup.ref('password')], 'Passwords are not the same')
                                .required('Required')
                                .min(6, 'Must be 6 characters or more'),
                    })}
            >
                {({ handleReset }) => (
                    <Form>
                        <MyTextInput
                            label='First Name'
                            name='firstName'
                            placeholder='Ancizar'
                        />
                        <MyTextInput
                            label='Last Name'
                            name='lastName'
                            placeholder='Torres'
                        />
                        <MyTextInput
                            label='Last Name'
                            name='email'
                            placeholder='ancizar@gmail.com'
                            type='email'
                        />
                        <MyTextInput
                            label='Password'
                            name='password'
                            placeholder='******'
                            type='password'
                        />
                        <MyTextInput
                            label='Repeat Password'
                            name='repeat_password'
                            placeholder='******'
                            type='password'
                        />
                        <button type="submit">
                            Submit
                        </button>
                        <button type="button" onClick={handleReset}>
                            resetForm
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
