import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const whatsAppNumber = "+524434572570";
const phoneNumber = "+524433460830";
const message = encodeURIComponent("Me interesa alguno de tus servicios");
// socialMediaData.js
const socialMediaData = [
  {
    link: `tel:${phoneNumber}`,
    icon: faPhone,
  },
  {
    link: `https://wa.me/${whatsAppNumber}?text=${message}`,
    icon: faWhatsapp,
  },
  {
    link: "https://www.instagram.com/jazmin_creaciones_by_ac/",
    icon: faInstagram,
  },
  {
    link: "https://www.facebook.com/jazmincreacionesbyac",
    icon: faFacebook,
  },
];
export default socialMediaData;
