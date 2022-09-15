import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({ patients, setPatients, patient, setPatient }) => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setName(patient.name);
      setOwner(patient.owner);
      setEmail(patient.email);
      setDate(patient.date);
      setSymptoms(patient.symptoms);
    }
  }, [patient]);

  const generateID = () => {
    const random = Math.random().toString(36).substr(2);
    const dateActual = Date.now().toString(36);
    return random + dateActual;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validation form
    if ([name, owner, email, date, symptoms].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    //Object patient
    const patientObject = {
      name,
      owner,
      email,
      date,
      symptoms,
    };

    if (patient.id) {
      //edit registrer
      patientObject.id = patient.id;
      const updatePatients = patients.map((state) =>
        state.id === patient.id ? patientObject : state
      );
      setPatients(updatePatients);
      setPatient({});
    } else {
      // add new register
      patientObject.id = generateID();
      setPatients([...patients, patientObject]);
    }
    //reset form
    setName("");
    setOwner("");
    setEmail("");
    setDate("");
    setSymptoms("");
  };

  return (
    <section className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Anade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos.</span>
      </p>

      <form
        className="bg-white shadow-md rounded-md py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {error && <Error message="Todos los campos son obligatorios." />}
        <section className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="mascota"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </section>

        <section className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </section>

        <section className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="mascota"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de contacto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </section>

        <section className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="alta"
          >
            Alta del registro
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </section>

        <section className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Sintomas
          </label>
          <textarea
            name="sintomas"
            id="commentario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            cols="30"
            rows="10"
            placeholder="Describe los sintomas"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </section>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-2 rounded-md text-white font-bold uppercase hover:bg-indigo-800 cursor-pointer transition-all"
          value={patient.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </section>
  );
};

export default Form;
