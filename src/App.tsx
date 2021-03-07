import React from "react";

import "./App.css";
import MulherTop from "./assets/mulhertop";
import Button from "./components/button";
import Container2 from "./components/Container2";
import Container3 from "./components/Container3";



import Header from "./components/header";
import Paragraph from "./components/paragraph";
import Title from "./components/title";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-text container">
      <div className="container-conteudo">
      <Title
          font={"80px"}
          width={"640px"}
          Color= {'#212353'}
          text={"Save your data storage here."}
        />

        <Paragraph
          font={"18px"}
          width={"380px"}
          Color ={'#4B5D68'}
        
          text={
            "SData Warehouse is a data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others.."
          }
        />

        <div className="btn-roxo">
          <Button
            children={"Request Demo"}
            backgroundColor={"#9C69E2"}
            Color={"#fff"}
            icon={false}
            shadow={false}
          />
        </div>
      </div>
      <div className="container-img">
<MulherTop/>
</div>
     
      </div>

      <Container2/>
      <Container3/>


    </div>
     

  );
}

export default App;
