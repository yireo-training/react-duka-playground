import React from "react";
import Container from "react-bootstrap/Container";
import Navigation from "components/App/Navigation";
import Content from "components/App/Content";
import Footer from "components/App/Footer";

const App = () => {
  return (
    <Container>
      <Navigation />
      <Content />
      <Footer />
    </Container>
  );
};

export default App;
