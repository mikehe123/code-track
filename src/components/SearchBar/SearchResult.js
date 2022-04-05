import { ResultContainer, ResultHr, ResultList } from "./Searchbar.elements";
import titlesData from "../../data/titlesArray.json";
import { ResultOptionItems } from "./ResultOptions";

function SearchResult({ searchValue }) {
  const regex_array = new RegExp(`.*${searchValue}.*`, "gi");
  console.log(
    titlesData.filter((string) => {
      return string.match(regex_array);
    })
  );

  return (
    <>
      <ResultContainer id="search_result">
        <ResultHr />
        <ResultList>
          <ResultOptionItems />
        </ResultList>
      </ResultContainer>
    </>
  );
}

export default SearchResult;
