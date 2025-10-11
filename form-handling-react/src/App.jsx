import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <RegistrationForm />
      <hr style={{ margin: "40px 0" }} />
      <FormikForm />
    </div>
  );
}

export default App;
