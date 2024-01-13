import React from "react";
import {
  BuyButton,
  CardCost,
  CardDescription,
  CardTitle,
  ServiceCard,
  ServiceCardContainer,
  ServicesContainer,
  ServicesDescription,
  ServicesHeader,
} from "../../components/LandingPage/ServicesSection/styles";

import servicesData from "../../data/servicesData";

const ServicesSection = () => {
  const phoneNumber = "+524434572570";
  const message = encodeURIComponent("Me interesa alguno de tus servicios ");
  return (
    <ServicesContainer id="services">
      <ServicesHeader>Servicios</ServicesHeader>
      <ServicesDescription>
        Estos son los servicios que le ofrecemos
      </ServicesDescription>

      <ServiceCardContainer>
        {servicesData.map((item, index) => (
          <ServiceCard key={index}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            {/* <CardCost>{item.cost}</CardCost> */}
            <BuyButton
              href={`https://wa.me/${phoneNumber}?text=${message}${item.title}`}
              target="_blank"
            >
              Cotizar
            </BuyButton>
          </ServiceCard>
        ))}
      </ServiceCardContainer>
    </ServicesContainer>
  );
};

export default ServicesSection;
