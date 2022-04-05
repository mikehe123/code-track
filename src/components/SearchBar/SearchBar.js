import React, { useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "./SearchIcons/search_icon.svg";

// import { ReactComponent as LightThemeIcon } from "./NavResources/light_theme_icon.svg";
import {
  Search,
  SearchInput,
  SearchContainer,
  IconWrap,
} from "./Searchbar.elements";
import SearchResult from "./SearchResult";

function SearchBar() {
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (value) {
      setFocus(true);
    } else {
      setFocus(false);
    }
  }, [value]);

  const onFocus = () => {
    if (value) {
      setFocus(true);
    }
  };

  const onBlur = () => {
    setFocus(false);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <SearchContainer id="search_container">
        <Search>
          <SearchInput
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          <IconWrap>
            <SearchIcon />
          </IconWrap>
        </Search>
        {focus && <SearchResult searchValue={value} />}
      </SearchContainer>
    </>
  );
}

export default SearchBar;
