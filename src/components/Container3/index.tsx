import React from "react";
import Imagem1 from "../../assets/imagem1";
import Imagem2 from "../../assets/imagem2";
import Imagem3 from "../../assets/imagem3";
import Imagem4 from "../../assets/imagem4";
import Button from "../button";

import Paragraph from "../paragraph";
import Title from "../title";
import { ContainerTerceiro } from "./styles";

const Container3 = () => {
  return (
    <ContainerTerceiro>
      <Title
        font={"40px"}
        width={"475px"}
        text={"Features"}
        Color={"#212353"}
      />
      <Paragraph
        font={"18px"}
        width={"584px"}
        Color={"#4B5D68"}
        text={
          "Some of the features and advantages that we provide for those of you who store data in this Data Warehouse"
        }
      />

      <div className="content">
        <div className="first">
          <div className="">
            <Imagem1 />
            <div className="title">
              <Title
                font={"24px"}
                width={"475px"}
                text={"Print Out"}
                Color={"#212353"}
              />
            </div>
            <div className="texto">
              <Paragraph
                font={"16px"}
                width={"220px"}
                Color={"#4B5D68"}
                text={
                  "Print out service gives you convenience if someday  you need print data, just edit it all and just print it."
                }
              />
            </div>

            <div className="btn">
              <Button
                children={"Request Demo"}
                backgroundColor={"none"}
                Color={"#212353"}
                icon={true}
                shadow={false}
              />
            </div>
          </div>

          <div className="second1">
            <Imagem3 />
            <div className="title2">
              <Title
                font={"24px"}
                width={"475px"}
                text={"Search Data"}
                Color={"#212353"}
              />
            </div>
            <div className="texto2">
              <Paragraph
                font={"16px"}
                width={"200px"}
                Color={"#4B5D68"}
                text={
                  "Don’t worry if your data is very large, the Data Warehoue pfor making it easier to find data effectively saving time."
                }
              />
            </div>

            <div className="btn2">
              <Button
                children={"Request Demo"}
                backgroundColor={"none"}
                Color={"#212353"}
                icon={true}
                shadow={false}
              />
            </div>
          </div>
        </div>

        <div className="">
          <div className="">
            <div className="title3">
              <Title
                font={"24px"}
                width={"475px"}
                text={"24 Hours Access"}
                Color={"#212353"}
              />
            </div>
            <div className="texto3">
              <Paragraph
                font={"16px"}
                width={"200px"}
                Color={"#4B5D68"}
                text={
                  "Access is given 24 hours a full morning to night and  meet again in the morning, giving you comfort when you need data when urgent.."
                }
              />
            </div>
            <Imagem2 />

            <div className="btn3">
              <Button
                children={"Request Demo"}
                backgroundColor={"none"}
                Color={"#212353"}
                icon={true}
                shadow={false}
              />
            </div>
          </div>

          <div className="">
            <div className="title4">
              <Title
                font={"24px"}
                width={"475px"}
                text={"Security Code"}
                Color={"#212353"}
              />
            </div>
            <Imagem4 />
            <div className="texto4">
              <Paragraph
                font={"16px"}
                width={"200px"}
                Color={"#4B5D68"}
                text={
                  "Data Security is one of our best facilities. Allows for your files   to be safer. The file can be secured with a code or password that you created, so only you can open the file."
                }
              />
            </div>
          </div>
        </div>

        <div className="btn4">
          <Button
            children={"Request Demo"}
            backgroundColor={"none"}
            Color={"#212353"}
            icon={true}
            shadow={false}
          />
        </div>
      </div>
    </ContainerTerceiro>
  );
};

export default Container3;
