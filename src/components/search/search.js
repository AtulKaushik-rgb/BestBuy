import React from "react";
import Content from "../content/content";

const search = (props) => {
  let display = null;

  display = (
    <>
      <div>
        <Content />
      </div>
    </>
  );

  return <>{display}</>;
};

export default search;
