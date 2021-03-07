import React from "react";
import SegundaMulher from "../../assets/segundaMulher";
import Paragraph from "../paragraph";
import Title from "../title";

import "./styles.css";

const Container2 = () => {
  return (
    <div className="container2">
      <div className="container-image">
        <SegundaMulher />
      </div>

      <div className="container-c">
        <Title
          font={"40px"}
          width={"475px"}
          text={"We are a high-level data   storage bank"}
          Color={"#212353"}
        />
      </div>

      <Paragraph
        font={"18px"}
        width={"475px"}
        Color={"#4B5D68"}
        text={
          "The place to store various data that you can access at any time through the internet and where you can carry it. This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse."
        }
      />
    </div>
  );
};

export default Container2;
