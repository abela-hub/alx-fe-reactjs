import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
});

function FormikForm() {
    return (
        <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
            <h2>User Registration (Formik)</h2>

            <Formik
                initialValues={{ username: "", email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log("Form submitted:", values);
                    alert("User registered successfully!");
                    resetForm();
                }}
            >
                {() => (
                    <Form>
                        <div>
                            <label>Username:</label>
                            <Field type="text" name="username" />
                            <ErrorMessage name="username" component="div" style={{ color: "red" }} />
                        </div>

                        <div>
                            <label>Email:</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" style={{ color: "red" }} />
                        </div>

                        <div>
                            <label>Password:</label>
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" component="div" style={{ color: "red" }} />
                        </div>

                        <button type="submit">Register</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default FormikForm;
