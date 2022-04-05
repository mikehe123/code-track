import React from "react";

import { ResultItem, ResultOption, ResultIconWrap } from "./Searchbar.elements";
import { ReactComponent as AddIcon } from "./SearchIcons/add_icon.svg";
// import { ReactComponent as CloseIcon } from "./SearchIcons/close_icon.svg";
import { ReactComponent as GoLeetcodeIcon } from "./SearchIcons/go_leetcode_icon.svg";
// import { ReactComponent as RecordIcon } from "./SearchIcons/record_icon.svg";

export const ResultOptionItems = () => {
  return (
    <>
      <ResultItem>
        <ResultOption>
          Add to note
          <ResultIconWrap>
            <AddIcon />
          </ResultIconWrap>
        </ResultOption>
      </ResultItem>
      <ResultItem>
        <ResultOption>
          Search on LeetCode
          <ResultIconWrap>
            <GoLeetcodeIcon />
          </ResultIconWrap>
        </ResultOption>
      </ResultItem>
    </>
  );
};
