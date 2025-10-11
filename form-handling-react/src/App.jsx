import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm"; // ✅ correct import

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>User Registration Forms</h1>

      {/* Controlled component form */}
      <RegistrationForm />

      <hr style={{ margin: "40px 0" }} />

      {/* Formik-based form */}
      <FormikForm />
    </div>
  );
}

export default App;
