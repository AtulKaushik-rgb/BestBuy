import React, { useEffect, useState } from "react";
import styles from "./sports.module.css";
import Sidebar from "../sidebar/sidebar";
import Content from "../content/content";
import { useLocation, Redirect } from "react-router-dom";

const sports = (props) => {
  let display = null;

  const location = useLocation();
  let currentPath = null;
  currentPath = location.pathname.substring(1);

  if (props.searchText) {

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
        <Content loadedFrom={currentPath} searchQuery={props.searchText} />
      </div>
    </>
  );

  return <>{display}</>;
};

export default sports;
