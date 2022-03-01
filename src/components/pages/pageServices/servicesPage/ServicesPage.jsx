import {
  ServicesMain,
  Services,
  ContactUs,
  ServiceAutomatisation,
} from "../../../components";
import { servicesItem } from "../../../dataBase";
import "./servicesPage.scss";

function ServicesPage() {
  return (
    <div>
      <ServicesMain
        serviceTitle={servicesItem[0].title}
        serviceSubTitle={servicesItem[0].subTitle}
        serviceText={servicesItem[0].text}
        serviceImgSrc={servicesItem[0].imgSrc}
      />
      <Services />
      <div className="consultation__inner">
        <div className="consultation-img">
          <img
            src="https://softvoya.ru/assets/img/services/page/related-post.png"
            alt=""
          />
        </div>
        <div className="consultation-contacts">
          <h2>Получить консультацию</h2>
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
