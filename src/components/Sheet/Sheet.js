import React from "react";

import {
  BulletPoint,
  CodeTag,
  RowContainer,
  RowFlexWrapper,
  TitleProblem,
  LineConnect,
} from "./Sheet.elements";
import CodeNote from "./CodeNote";

const RowElements = ({ RowData, LastRow }) => {
  return (
    <>
      <RowContainer>
        <RowFlexWrapper>
          <BulletPoint />
          <TitleProblem>
            {RowData.title}
            {RowData.tags.map((tag, index) => {
              return <CodeTag key={index}>{tag}</CodeTag>;
            })}
          </TitleProblem>
          {RowData.note && <CodeNote />}
        </RowFlexWrapper>
        {!LastRow && <LineConnect />}
      </RowContainer>
    </>
  );
};

function Sheet(props) {
  return (
    <>
      {props.SheetData.map((RowData, index, array) => {
        if (array.length - 1 === index) {
          return (
            <RowElements key={RowData.rowId} RowData={RowData} LastRow={true} />
          );
        }
        return <RowElements key={RowData.rowId} RowData={RowData} />;
      })}
    </>
  );
}

export default Sheet;
