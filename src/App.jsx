import { useState, useEffect } from "react";
//Components
import Header from "./components/Header.jsx";
import Form from "./components/Form";
import PatientList from "./components/PatientList";

function App() {
  const [patients, setPatients] = useState(
    JSON.parse(localStorage.getItem("patients")) ?? []
  );
  const [patient, setPatient] = useState({});

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    const updatePatients = patients.filter((patient) => patient.id !== id);
    setPatients(updatePatients);
  };

  return (
    <>
      <header className="mt-10 mb-10">
        <Header />
      </header>
      <main className="mx-10 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </main>
    </>
  );
}

export default App;
