import "./App.css";
import SearchBar from "./Components/SearchBar";
function App() {
  return (
    <div className="bg-image flex h-screen flex-col items-center justify-center bg-dark-blue">
      <h1 className="mb-6 text-6xl text-golden">Github Personal</h1>
      <h2 className="mb-6 text-2xl text-gray-400">
        Get all your github data in one place in beautiful UI.
      </h2>
      <SearchBar />
    </div>
  );
}

export default App;
