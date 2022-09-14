import { useState, useEffect } from "react";
//Components
import Header from "./components/Header.jsx";
import Form from "./components/Form";
import PatientList from "./components/PatientList";

function App() {
  const [patients, setPatients] = useState([]);

  return (
    <>
      <header className="mt-10 mb-10">
        <Header />
      </header>
      <main className="mx-10 md:flex">
        <Form patients={patients} setPatients={setPatients} />
        <PatientList patients={patients} />
      </main>
    </>
  );
}

export default App;
