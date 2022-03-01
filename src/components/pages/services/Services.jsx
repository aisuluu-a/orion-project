import "./services.scss";
import ServiceCard from "./Card";
import { servicesData } from "../../dataBase";

function Services() {
  return (
    <div className="services" id="services">
      <h1>Наши услуги</h1>
      <div className="services-item">
        {servicesData.map((entry, index) => (
          <ServiceCard {...entry} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Services;
