import React from "react";
import styles from "./body.module.css";
import Content from "../content/content";
import Home from "../../components/home/home1";
import { useLocation } from "react-router-dom";

const body = (props) => {
  let display = null;

  const location = useLocation();

  let currentPath = null;

  currentPath = location.pathname.substring(1);

  if (true) {
    display = (
      <>
        <div className={styles.body_containers}>
          {/* <Sidebar loadedFrom={currentPath} searchQuery={props.searchText} /> */}
          <Content loadedFrom={currentPath} searchQuery={props.searchText} />
        </div>
      </>
    );
  } else {
    display = (
      <>
        <Home />
      </>
    );
  }

  return <>{display}</>;
};

export default body;
