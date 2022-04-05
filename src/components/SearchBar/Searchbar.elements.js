import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  height: 3.6rem;
  width: 54.6rem;

  background: #ffffff;
  border-radius: 2.2rem;
  &:focus-within {
    background: #e2f3f5;
    border-radius: 1.2rem;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 50rem;
  height: 3rem;
  margin-left: 0.8rem;

  border: none;
  font-size: large;
  :focus {
    background: #e2f3f5;
    border: none;
    outline-style: none;
  }
`;

export const IconWrap = styled.div`
  /* background-color: #e2f3f5; */
  background: none;
  border: none;
  cursor: pointer;
  &::-moz-focus-inner {
    border: 0;
  }
  svg {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0.6rem;

    color: #3d5af1;
    outline: none;
    transition: transform 0.15s linear;
  }
`;

export const ResultIconWrap = styled.div`
  /* background-color: #e2f3f5; */
  display: flex;
  background: none;
  border: none;
  cursor: pointer;
  &::-moz-focus-inner {
    border: 0;
  }
  svg {
    width: 1.8rem;
    height: 1.8rem;
    margin-left: 0.4rem;

    color: black;
    outline: none;
    transition: transform 0.15s linear;
  }
`;

export const ResultContainer = styled.div`
  position: absolute;
  top: 1.6em;
  z-index: -2;
  display: flex;
  flex-direction: column;
  width: 54.6rem;
  /* height: 30rem; */
  padding-top: 2.6rem;
  background: #e2f3f5;
  border-radius: 1.2rem;
`;

export const ResultHr = styled.hr`
  margin: 0 0.8rem 0 0.8rem;
`;

export const ResultItem = styled.li``;
export const ResultList = styled.ul`
  margin: 0.6rem 0.8rem 0.8rem 0.8rem;
  list-style: none;
`;

export const ResultOption = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 2.4rem;
  margin: 0.4rem 0 0 0 !important;
  background: white;
  border-radius: 0.6rem;
  border: 0.1rem solid #b6b6b6;
  /* border: 0.2rem solid black; */
`;
