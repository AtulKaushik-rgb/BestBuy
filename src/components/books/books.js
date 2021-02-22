import React, { useEffect, useState } from "react";
import styles from "./books.module.css";
import Sidebar from "../sidebar/sidebar";
import Content from "../content/content";
import { useLocation, Redirect } from "react-router-dom";

const books = (props) => {
  let display = null;

  // const location = useLocation();
  // let currentPath = null;
  // currentPath = location.pathname.substring(1);


  display = (
    <>
      <div >
        {/* <Sidebar loadedFrom={currentPath} searchQuery={props.searchText} /> */}
        <Content/>
      </div>
    </>
  );

  return <>{display}</>;
};

export default books;
