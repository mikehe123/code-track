import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sheet from "../../components/Sheet/Sheet";
import TitleDate from "../../components/TitleDate";
import { Container } from "../../globalStyles";
import SheetData from "../../data/SheetData";
function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <TitleDate>03/15/2022</TitleDate>
        <Sheet SheetData={SheetData} />
      </Container>
    </>
  );
}

export default Home;
