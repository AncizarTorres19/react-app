
import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

interface PropsHoock {
    name: string;
    email: string;
    password1: string;
    password2: string;
}
export const RegisterPage = () => {
    const { formData, onChange, resetForm, isValidEmail } = useForm<PropsHoock>({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });
    const { name, email, password1, password2 } = formData;
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    }
    return (
        <div>
            <h1>Register Page</h1>
            <form noValidate onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder="Name"
                    name='name'
                    value={name}
                    onChange={onChange}
                    className={`${name.trim().length <= 0 && 'has-error'}`}
                />
                {name.trim().length <= 0 && <span>Este campo es necesario</span>}
                <input
                    type='email'
                    placeholder="Email"
                    name='email'
                    value={email}
                    onChange={onChange}
                    className={`${!isValidEmail(email) && 'has-error'}`}
                />
                {!isValidEmail(email) && <span>Este campo es necesario</span>}
                <input
                    type='password'
                    placeholder="Password"
                    name='password1'
                    value={password1}
                    onChange={onChange}
                    className={`${password1.trim().length <= 0 || password1.trim().length < 6 && password1.trim().length > 0 && 'has-error'}`}
                />
                {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña tiene que tener 6 carecteres</span>}
                <input
                    type='password'
                    placeholder="Repaet Password"
                    name='password2'
                    value={password2}
                    onChange={onChange}
                    className={`${password2.trim().length <= 0 && 'has-error'}`}
                />
                {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password2.trim().length > 0 && password2 !== password1 && <span>Las Contraseñas deben ser iguales</span>}
                <button type="submit">
                    Create
                </button>
                <button type="button" onClick={resetForm}>
                    resetForm
                </button>
            </form>
        </div >
    )
}
