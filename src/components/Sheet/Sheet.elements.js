import styled from "styled-components";

export const RowContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 79rem;
  padding-bottom: 2rem;
  margin: 0 auto 0 auto;

  background-color: #e3ece9;
`;

export const RowFlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const LineConnect = styled.div`
  position: absolute;
  top: 0.8rem;
  left: 0.55rem;
  z-index: 5;

  width: 0.3rem;
  height: 100%;

  background: black;
`;

export const BulletPoint = styled.div`
  z-index: 10;

  align-self: start;
  width: 1.4rem;
  height: 1.4rem;
  margin-top: 0.7rem;

  background: #3d5af1;
  border-radius: 1.4rem;
`;

export const TitleProblem = styled.h2`
  overflow-wrap: break-word;
  align-self: start;
  max-width: 75rem;
  margin-left: 0.8rem;

  font-family: url("https://fonts.googleapis.com/css?family=Work Sans");
  font-style: normal;
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 2.6rem;
`;

export const CodeTag = styled.i`
  vertical-align: middle;
  padding: 0.1rem 0.6rem 0.1rem 0.6rem;
  margin-left: 1.2rem;

  background: #e1c2dd;
  border-radius: 1.5rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.6rem;
  filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.25));
`;
