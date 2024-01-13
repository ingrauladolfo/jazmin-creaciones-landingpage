import React from "react";
import {
  LocateUsContainer,
  LocateUsContent,
  LocateUsText,
  LocateUsHeaderText,
  LocateUsTextP,
  LocateUsLogoAndText,
} from "../../components/LandingPage/LocateusSection/styles";
const LocateUsSection = () => {
  return (
    <LocateUsContainer id="locateus">
      <LocateUsContent>
        <LocateUsText>
          <LocateUsHeaderText>Contáctanos</LocateUsHeaderText>
          <LocateUsLogoAndText>
            <LocateUsTextP>
              Nos puedes encontrar en La Casa de la Costura
            </LocateUsTextP>
            &nbsp;
          </LocateUsLogoAndText>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15027.601740247053!2d-101.187837!3d19.6742527!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaed8aedbd19c0143%3A0xf0dfb4b28ba0ce70!2sLa%20Casa%20de%20la%20Costura%20by%20Alica!5e0!3m2!1ses-419!2smx!4v1705109084230!5m2!1ses-419!2smx"
            width="100vw"
            height="450"
            style={{
              border: "0",
              display: "block",
              margin: "0 auto", // Centra en el eje x
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </LocateUsText>
      </LocateUsContent>
    </LocateUsContainer>
  );
};

export default LocateUsSection;
