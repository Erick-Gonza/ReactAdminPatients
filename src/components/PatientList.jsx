import Patient from "./Patient";

const PatientList = ({ patients }) => {
  return (
    <section className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
      <p className="text-lg mt-5 mb-10 text-center">
        Administra tus {""}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>
      {patients.map((patient) => (
        <Patient patient={patient} key={patient.id} />
      ))}
    </section>
  );
};

export default PatientList;
