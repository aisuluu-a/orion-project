import { ContactUs, Map } from "../../components";
import "./contact.scss";

function contact() {
  return (
    <div className="contact">
      <h2>Наши контакты</h2>
      <div className="contact__inner">
        <Map />
        <div className="contact__right">
          <h5 className="text-center"> Свяжитесь с нами</h5>
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default contact;
