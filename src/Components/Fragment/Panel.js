import React, { useState, useEffect } from "react";
import dchannel from "./../../img/dchannel.png";
import { Height } from "@material-ui/icons";

const Panel = () => {
  const images = dchannel;
  return (
    <div>
      {/* <p> Welcome..</p> */}

      <div className="header">
        <img src={images} />
        {/* <img
          src={dchannel}
          style={{ width: "150px", height: "150px", padding: "20px" }}
        />
        <img
          src={dchannel}
          style={{ width: "150px", height: "150px", padding: "20px" }}
        />
        <img
          src={dchannel}
          style={{ width: "150px", height: "150px", padding: "20px" }}
        /> */}
      </div>
    </div>
  );
};

export default Panel;
