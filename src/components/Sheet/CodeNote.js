import React from "react";
import styled from "styled-components";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.bubble.css";

const quillConfig = {
  theme: "bubble",
  modules: {
    toolbar: false,
  },
  placeholder: "Write your note...",
};

function CodeNote(props) {
  const { quillRef } = useQuill(quillConfig);

  return (
    <>
      <CodeNodeContainer>
        <div style={{ width: "72.6rem" }}>
          <div ref={quillRef} />
        </div>
      </CodeNodeContainer>
    </>
  );
}

export default CodeNote;

const CodeNodeContainer = styled.div`
  margin: 1rem 0 0 3.2rem;
  max-width: 72.6rem;
  width: 100%;

  background: #e2f3f5;
  border-radius: 0.7rem;
`;
