import React from "react";
import Logo from "../../assets/logo";
import LogoFace from "../../assets/logoface";
import LogoFooter from "../../assets/logofooter";
import LogoI from "../../assets/logoInstagran";
import LogoT from "../../assets/logotwiiter";
import Button from "../button";
import Link from "../link";
import Paragraph from "../paragraph";
import Title from "../title";

import { Container } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <div className="left-title">
        <div className="left-top">
          <Title
            font={"40px"}
            Color={""}
            width={"640px"}
            text={"Try for Free"}
          />

          <Paragraph
            font={"18px"}
            width={""}
            Color={"#4B5D68"}
            text={"   Get limited 1 week free try out features!"}
          />
        </div>
        <div className="left-bottom">
          <div className="logo">
            <Logo />
            <div className="logo-text">
              <Link bold={"bold"} text={"DataWarehouse"} Color={"#212353"} />
            </div>
          </div>

          <div className="p-logo">
            <Paragraph
              font={"16px'"}
              width={""}
              Color={""}
              text={"   Warehouse Society, 234!"}
            />

            <Paragraph
              font={"16px'"}
              width={""}
              Color={""}
              text={"       Bahagia Ave Street         PRBW 29281"}
            />

            <Paragraph
              font={"16px'"}
              width={""}
              Color={"#4B5D68"}
              text={"   info@warehouse.project"}
            />

            <Paragraph
              font={"16px'"}
              width={""}
              Color={"#4B5D68"}
              text={"   1-234-5678 (Main)"}
            />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="botton-right-top">
          <Button
            backgroundColor={"#F063B8"}
            children={"Learn more"}
            Color={""}
            icon={false}
            shadow={false}
          />
          <Button
            backgroundColor={"#FFF"}
            children={"Request Demo"}
            Color={""}
            icon={true}
            shadow={true}
          />
        </div>
        <div className="right-bottom">
          <div className="about">
            <Link bold={"bold"} text={"About"} Color={"#212353"} />
            <div className="group">
              <Link bold={""} text={"Help"} Color={"#212353"} />
              <Link bold={""} text={"Features"} Color={"#212353"} />
              <Link bold={""} text={"Careers"} Color={"#212353"} />
              <Link bold={""} text={"DWNews"} Color={"#212353"} />
            </div>
          </div>

          <div className="help">
            <Link bold={"bold"} text={"Help"} Color={"#212353"} />
            <div className="group">
              <Link bold={""} text={"Support"} Color={"#212353"} />
              <Link bold={""} text={"Sign up"} Color={"#212353"} />
              <Link bold={""} text={"Guide"} Color={"#212353"} />
              <Link bold={""} text={"Reports"} Color={"#212353"} />
              <Link bold={""} text={"Q&A"} Color={"#212353"} />
            </div>
          </div>

          <div className="Social-media">
            <Link bold={"bold"} text={"SocialMedia"} Color={"#212353"} />

            <div className="medias">
              <LogoFace />
              <LogoT />
              <LogoI />
            </div>
          </div>
        </div>
        <div className="footer-direitos">
          <Paragraph
            font={"16px'"}
            width={""}
            Color={"#4B5D68"}
            text={"   © Datawarehouse™, 2020. All rights reserved."}
          />

          <Paragraph
            font={"16px'"}
            width={""}
            Color={"#4B5D68"}
            text={"   Company Registration Number: 21479524."}
          />
        </div>

        <div className="logo-footer">
          <LogoFooter />
        </div>
      </div>
    </Container>
  );
};

export default Footer;
