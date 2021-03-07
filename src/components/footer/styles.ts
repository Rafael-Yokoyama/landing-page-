import styled from "styled-components";

export const Container = styled.div`
  width: 100vh;
  height: 100vh;
  margin: 0 auto;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 200px;
  .left-title {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .logo {
      margin-top: 100px;
    }

    .logo-text {
      margin-top: -30px;
    }

    .kicSTn {
      margin-top: 90px;
    }
    .fNFciE {
      margin-top: -15px;
    }
  }

  .p-logo {
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    justify-content: space-around;
  }

  /*buttons*/

  .khOluH {
    margin-right: 40px;
  }

  /*texto-left */
  .gKpviT {
    color: #212353;
    margin-top: -70px;
    margin-bottom: 60px;
  }

  .jvQHGT{
       margin-top: -60px;
       margin-bottom: 30px;
    
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .botton-right-top {
      padding-top: 180px;
      display: flex;
    }
    .right-bottom {
      margin-top: 190px;

      display: flex;

      .group {
        display: flex;
        flex-direction: column;

        padding-top: 40px;
      }

      .medias {
        display: flex;
        flex-direction: row;

        padding-left: 60px;
        padding-top: 40px;
      }

      .GwtDb {
        margin-top: -30px;
      }
      .hMvRyG {
        padding-top: 20px;
      }
    }
  }

  .footer-direitos {
    display: flex;
    flex-direction: column;
    position: relative;
    right: 640px;
    top: 100px;
    padding-bottom: 80px;
    font-size: 12px;
    color: #212353;
  }

  .logo-footer {
    margin-top: -40px;
    padding-left: 450px;
  }
`;
