import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>React Form Handling Example</h1>
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App;
s