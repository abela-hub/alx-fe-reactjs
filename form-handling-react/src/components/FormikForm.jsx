import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
    // ✅ Define validation rules with Yup
    const validationSchema = Yup.object({
        username: Yup.string().required("Username is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    });

    // ✅ Handle submission
    const handleSubmit = (values, { resetForm }) => {
        console.log("User Registered:", values);
        alert(`User ${values.username} registered successfully!`);
        resetForm();
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto" }}>
            <h2>Formik Registration Form</h2>

            <Formik
                initialValues={{ username: "", email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div>
                        <label>Username:</label><br />
                        <Field type="text" name="username" />
                        <ErrorMessage
                            name="username"
                            component="p"
                            style={{ color: "red" }}
                        />
                    </div>

                    <div>
                        <label>Email:</label><br />
                        <Field type="email" name="email" />
                        <ErrorMessage
                            name="email"
                            component="p"
                            style={{ color: "red" }}
                        />
                    </div>

                    <div>
                        <label>Password:</label><br />
                        <Field type="password" name="password" />
                        <ErrorMessage
                            name="password"
                            component="p"
                            style={{ color: "red" }}
                        />
                    </div>

                    <button type="submit">Register</button>
                </Form>
            </Formik>
        </div>
    );
};

export default FormikForm;
