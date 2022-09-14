const Patient = () => {
  return (
    <section className="m-3 bg-white shadow-md px-5 py-10 rounded-md">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">Rocko</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">Erick Gzz</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">correo@correo.com</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha del alta: {""}
        <span className="font-normal normal-case">09/14/2022</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          earum aliquid esse a cupiditate nihil non recusandae, fuga nesciunt
          velit impedit minus ducimus culpa! Alias unde error quam? Officiis,
          ab.
        </span>
      </p>
    </section>
  );
};

export default Patient;
