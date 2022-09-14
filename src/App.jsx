import Header from "./components/Header.jsx";
import Form from "./components/Form";
import PatientList from "./components/PatientList";

function App() {
  return (
    <>
      <header className="mt-10 mb-10">
        <Header />
      </header>
      <main className="px-10 md:flex">
        <Form />
        <PatientList />
      </main>
    </>
  );
}

export default App;
