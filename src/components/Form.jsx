const Form = () => {
  return (
    <section className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Anade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos.</span>
      </p>

      <form className="bg-white shadow-md rounded-md py-10 px-5 mb-10">
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
            required
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
            required
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
          />
        </section>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-2 rounded-md text-white font-bold uppercase hover:bg-indigo-800 cursor-pointer transition-all"
          value="Agregar Paciente"
        />
      </form>
    </section>
  );
};

export default Form;
