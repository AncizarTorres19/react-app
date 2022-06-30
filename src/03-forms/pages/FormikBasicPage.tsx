import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';

interface FormValus {
    firstName: string;
    lastName: string;
    email: string;
}
export const FormikBasicPage = () => {

    const validate = ({ firstName, lastName, email }: FormValus) => {

        const errors: FormikErrors<FormValus> = {};

        if (!firstName.trim()) {
            errors.firstName = 'Required';
        } else if (firstName.length >= 15) {
            errors.firstName = 'Must be 15 characters or less';
        }

        if (!lastName.trim()) {
            errors.lastName = 'Required';
        } else if (lastName.length >= 10) {
            errors.lastName = 'Must be 10 characters or less';
        }

        if (!email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }
        return errors;
    }
    const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate
    });
    const { firstName, lastName, email } = values;

    return (
        <div>
            <h1>Formik Basic Tutorial</h1>
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor='firstName'>First Name</label>
                <input
                    type='text'
                    placeholder="Name"
                    name='firstName'
                    onBlur={handleBlur}
                    value={firstName}
                    onChange={handleChange}
                />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor='lastName'>Last Name</label>
                <input
                    type='text'
                    placeholder="Name"
                    name='lastName'
                    value={lastName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor='emailAddress'>Email Address</label>
                <input
                    type='email'
                    placeholder="Name"
                    name='email'
                    value={email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}
