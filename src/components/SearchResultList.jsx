import "./SearchBar.css";
// import SearchList  from "./SearchList";

const SearchResultsList = ({ results,setSearched }) => {
  return (
    <div className="results-list">
      {results.map((result) => {
        const name = result.first_name + " " + result.last_name;
        if (!result.added) {
          return (
            <div
              className="search-result"
              key={result.id}
              onClick={() => {
                let temp = result;
                const ind = results.findIndex((x) => x.id === result.id);
                temp.added = true;
                setSearched((data) => [
                  ...data.slice(0, ind),
                  ...data.slice(ind + 1, data.length),
                  temp,
                ]);
                // console.log(searched);
              }}

              
            >
              {" "}
              {name }
              {" "}
              <div className="faded">{result.email}</div>
            </div>
          );
        } else return <></>;
      })}
    </div>
  );
};

export default SearchResultsList;
