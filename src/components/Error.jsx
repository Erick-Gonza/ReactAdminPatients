const Error = ({ message }) => {
  return (
    <div className="bg-red-800 p-2 rounded-md mb-5">
      <p className="text-white font-bold text-center uppercase">{message}</p>
    </div>
  );
};

export default Error;
