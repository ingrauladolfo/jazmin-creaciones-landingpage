import styled from "styled-components";

export const LocateUsContainer = styled.section`
  background-color: #21bab5;
  margin: 0;
  text-align: center;
`;

export const LocateUsContent = styled.div`
  max-width: 1350px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media (max-width: 1400px) {
    padding: 0 5%;
    width: 90%;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const LocateUsText = styled.div`
  width: calc(100% - 400px);
  display: flex;
  flex-direction: column;
  margin: 30px 0;

  @media (max-width: 950px) {
    width: 100%;
    margin: 0;
    text-align: center;
    margin-top: 50px;
  }
`;

export const LocateUsHeaderText = styled.h2`
  display: block;
  font-size: 2em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-family: "Lato", cursive;
  color: #000000;
  font-weight: normal;
  text-transform: uppercase;
`;

export const LocateUsTextP = styled.p`
  display: block;
  margin: 1em auto;
  font-size: 1.5rem;
  color: #000000;
  text-align: center;
`;

export const LocateUsLogo = styled.img`
  display: block;
  width: 300px;
  margin: auto; /* Centra horizontal y verticalmente */
  @media (max-width: 650px) {
    width: 150px;
    margin-bottom: 50px;
  }
`;

export const LocateUsLogoAndText = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  @media (max-width: 1400px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
