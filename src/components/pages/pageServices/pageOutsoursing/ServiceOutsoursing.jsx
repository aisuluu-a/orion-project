import { ServicesMain, ServiceItem, ContactUs } from "../../../components";
import { servicesItem } from "../../../dataBase";
import "./serviceOutsoursing.scss";

function ServiceOutsoursing() {
  return (
    <>
      <div>
        <ServicesMain
          serviceTitle={servicesItem[3].title}
          serviceSubTitle={servicesItem[3].subTitle}
          serviceText={servicesItem[3].text}
          serviceImgSrc={servicesItem[3].imgSrc}
        />
      </div>
      <div className="automatisation">
        <h2>Что такое IT-аутсорсинг?</h2>
        <p>
          IT-аутсорсинг - это прежде всего возможность для клиента
          сконцентрировать внимание на основной деятельности, передав
          IT-обслуживание профильной компании. Предприятия малого и среднего
          бизнеса предпочитают обычно комплексный IT-аутсорсинг. В этом случае
          обслуживание IT-инфраструктуры полностью передается провайдеру
          сервисных услуг.
        </p>
        <p>
          У нас много специалистов разных компетенций и мы готовы решать любые
          ИТ-задачи наших клиентов! Мы также можем не заменять, а дополнять
          имеющихся в штате ИТ-специалистов, по отсутствующим у них
          компетенциям. Например, мы можем выполнять сопровождение серверов,
          оргтехники, IP-телефонии, а специалист в штате - сопровождает рабочие
          места и программное обеспечение.
        </p>
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
    </>
  );
}
export default ServiceOutsoursing;
