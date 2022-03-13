
const SearchResults = ({results}) => {
    
  function convertCurrency(money) {
    const converted = (money / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    return converted;
  }
  
    return ( 
        <div className="searchResults">
        <div className="arrayContainer">
          <table className="arrayTable">
            <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {results.map((result) => (
              <tr key={result.id}>
                <td>{result.name}</td>
                <td>{result.description}</td>
                <td>{convertCurrency(`${result.price}`)}</td>
              </tr>
            ))}
            </tbody>
          </table>
          </div>
        </div>
     );
}
 
export default SearchResults;