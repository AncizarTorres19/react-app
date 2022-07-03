import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
    Navigate
} from "react-router-dom";
import { DymanicForm, FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage, RegisterFormik, RegisterPage } from "../03-forms/pages";

import logo from '../logo.svg'

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/register" className={({ isActive }) => isActive ? 'nav-active' : ''}>Register Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Basic</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-components" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Components</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-abstraction" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Abstraction</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-page" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dymanic-form" className={({ isActive }) => isActive ? 'nav-active' : ''}>Dymanic Form</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/formik-basic" element={<FormikBasicPage />} />
                    <Route path="/formik-yup" element={<FormikYupPage />} />
                    <Route path="/formik-components" element={<FormikComponents />} />
                    <Route path="/formik-abstraction" element={<FormikAbstraction />} />
                    <Route path="/formik-page" element={<RegisterFormik />} />
                    <Route path="/dymanic-form" element={<DymanicForm />} />
                    <Route path="/*" element={<Navigate to="/register" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
