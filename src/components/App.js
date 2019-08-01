import React from "react";
import Container from "react-bootstrap/Container";
import Navigation from './App/Navigation';
import Content from './App/Content';
import Footer from './App/Footer';

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
