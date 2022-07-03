
import formJson from '../data/custom-form.json';
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import { MySelect, MyTextInput } from '../components';


const initialValues: { [key: string]: any } = {}
const requiredFields: { [key: string]: any } = {}

for (const input of formJson) {

    initialValues[input.name] = input.value

    if (!input.validations) continue;
    console.log(!input.validations);

    let schema = Yup.string()

    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required('Este campo es requerido')
        }
        if (rule.type === 'minLength') {
            schema = schema.min((rule as any).value || 2, `Mínimo de caracteres ${(rule as any).value || 2}`)
        }
        if (rule.type === 'email') {
            schema = schema.email('Revise el formato del correo')
        }
    }
    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields })
export const DymanicForm = () => {
    return (
        <div>
            <h1>Dymanic Form</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={validationSchema}
            >
                {(formik) => (
                    <Form>
                        {formJson.map(({ type, label, name, placeholder, options }) => {
                            if (type === 'input' || type === 'email' || type === 'password') {
                                return <MyTextInput
                                    key={name}
                                    type={type as any}
                                    label={label}
                                    name={name}
                                    placeholder={placeholder}
                                />
                            } else if (type === 'select') {
                                return (
                                    <MySelect
                                        key={name}
                                        label={label}
                                        name={name}
                                    >
                                        <option value=''>Select an Option</option>
                                        {
                                            options?.map(({ id, label }) => (
                                                <option key={id} value={id}>{label}</option>
                                            ))
                                        }
                                    </MySelect>
                                )
                            }
                            // return <h1>Type: {type} not supported</h1>
                            throw new Error(`Type: ${type} not supported`)
                        })}
                        <button type="submit">
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div >
    )
}
