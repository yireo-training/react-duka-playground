import React from "react";
import Navigation from "components/App/Navigation";
import Content from "components/App/Content";
import Footer from "components/App/Footer";
import Theme from "components/App/Theme"

const App = () => {
  return (
    <>
      <Theme />
      <Navigation />
      <Content />
      <Footer />
    </>
  );
};

export default App;
