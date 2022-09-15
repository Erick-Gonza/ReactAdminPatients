const Patient = ({ patient, setPatient, deletePatient }) => {
  const { name, owner, email, date, symptoms, id } = patient;

  const handleDelete = () => {
    const response = confirm("Desear eliminar este paciente?");
    if (response) {
      deletePatient(id);
    }
  };
  return (
    <section className="md:mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-md">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{name}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{owner}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha del alta: {""}
        <span className="font-normal normal-case">{date}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{symptoms}</span>
      </p>

      <section className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 font-bold uppercase rounded-md text-white"
          onClick={() => setPatient(patient)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-500 hover:bg-red-800 font-bold uppercase rounded-md text-white"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </section>
    </section>
  );
};

export default Patient;
