import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchResultsList from "./components/SearchResultList";
import { useState } from "react";

function App() {
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState([]);

  return (
    <div className="container">
      <SearchBar
        searched={searched}
        setResults={setResults}
        setSearched={setSearched}
      />
      {results && results.length > 0 && (
        <SearchResultsList results={results} setSearched={setSearched} />
      )}
    </div>
  );
}

export default App;
