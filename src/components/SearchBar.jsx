import { useState } from "react";
import { data } from "../data";
import "./SearchBar.css";

const SearchBar = ({ searched, setResults, setSearched }) => {
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    const results = data.filter((user) => {
      const name = user.first_name + user.last_name;
      return value && user && name && name.toLowerCase().includes(value);
    });
    //   console.log(results);
    setResults(results);
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  console.log(searched);
  return (
    <div className="wrapper">
      <div className="searched-list">
        {searched && (
          <div className="searched">
            {searched.map((result) => {
              const name = result.first_name + " " + result.last_name;
              return (
                <div className="items" key={result.id}>
                  {name}
                  <div
                    className="cross"
                    onClick={() => {
                      const ind = searched.findIndex((x) => x.id === result.id);
                      setSearched((data) => [
                        ...data.slice(0, ind),
                        ...data.slice(ind + 1, data.length),
                      ]);
                    }}
                  >
                    X
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
