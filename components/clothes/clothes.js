import React, { useEffect, useState } from "react";
import styles from "./clothes.module.css";
import Sidebar from "../sidebar/sidebar";
import Content from "../content/content";
import { useLocation } from "react-router-dom";

const clothes = (props) => {
  let display = null;

  const location = useLocation();
  let currentPath = null;
  currentPath = location.pathname.substring(1);

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

export default clothes;
