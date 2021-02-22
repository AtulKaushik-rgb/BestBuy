import React, { useEffect, useState } from "react";
import Content from "../content/content";

const furniture = (props) => {
  let display = null;

  display = (
    <>
      <div >
        <Content/>
      </div>
    </>
  );

  return <>{display}</>;
};

export default furniture;
