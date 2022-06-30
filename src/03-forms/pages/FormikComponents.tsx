import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup'
import '../styles/styles.css';

export const FormikComponents = () => {
    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: ''
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        firstName:
                            Yup.string()
                                .max(15, 'Must be 15 characters or less')
                                .required('Required'),
                        lastName:
                            Yup.string()
                                .max(10, 'Must be 10 characters or less')
                                .required('Required'),
                        email:
                            Yup.string()
                                .required('Required')
                                .email('Invalid email address')
                    })}
            >
                {(formik) => (
                    <Form>
                        <label htmlFor='firstName'>First Name</label>
                        <Field name='firstName' type='text' />
                        <ErrorMessage name='firstName' />
                        <label htmlFor='lastName'>Last Name</label>
                        <Field name='lastName' type='text' />
                        <ErrorMessage name='lastName' />
                        <label htmlFor='email'>Email Address</label>
                        <Field name='email' type='text' />
                        <ErrorMessage name='email' />

                        <button type="submit">
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
