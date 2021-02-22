import React, { useEffect, useState } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Menu from "./components/menu/menu";
import Main from "./components/main/main";
import Home from "./components/home/home1";

const App = (props) => {


  const [status, setStatus] = useState(true);

  const handleHomeClick = (text) => {
    if (text) setStatus(text);
    else setStatus(!status);
  };

  let display = null;

  if (status)
    display = (
      <>
        <Menu />
        <Main />
      </>
    );
  else
    display = (
      <>
        <Home />
      </>
    );

  return (
    <>
      <Header setHomeStatus={handleHomeClick} />
      {display}
      <Footer />
    </>
  );
};

export default App;
