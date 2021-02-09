import React, { useEffect, useState } from "react";
import styles from "./books.module.css";
import Sidebar from "../sidebar/sidebar";
import Content from "../content/content";
import { useLocation, Redirect } from "react-router-dom";

const books = (props) => {
  let display = null;

  const location = useLocation();
  let currentPath = null;
  currentPath = location.pathname.substring(1);

  if (props.searchText) {
    console.log("redirected to /");

    display = (
      <Redirect
        to={{
          pathname: "/",
          state: { query: props.searchText },
        }}
      />
    );
  }

  display = (
    <>
      <div className={styles.body_containers}>
        <Sidebar loadedFrom={currentPath} searchQuery={props.searchText} />
        <Content loadedFrom={currentPath} searchQuery={props.searchText} />
      </div>
    </>
  );

  return <>{display}</>;
};

export default books;
