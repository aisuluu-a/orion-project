import { ServicesMain, ServiceItem, ContactUs } from "../../../../components";
import { servicesItem } from "../../../../dataBase";
import { automatServicesItem } from "../../../../dataBase";
import "./serviceAutomatisation.scss";

function ServiceAutomatisation() {
  return (
    <>
      <div>
        <ServicesMain
          serviceTitle={servicesItem[1].title}
          serviceSubTitle={servicesItem[1].subTitle}
          serviceText={servicesItem[1].text}
          serviceImgSrc={servicesItem[1].imgSrc}
        />
      </div>
      <div className="automatisation">
        <h2>Автоматизация бизнес-процессов с Orion</h2>
        <p>
          На основании целей и потребностей клиентов, мы предлагаем ряд мер для
          оптимизации как отдельных бизнес-процессов, так и всей инфраструктуры
          компании. Наши специалисты глубоко проанализируют деятельность
          организации и разработают эффективную стратегию улучшения процессов,
          уменьшения расходов и дальнейшего развития бизнеса:
        </p>
        <div className="service-list">
          {automatServicesItem.map((item, idx) => {
            return (
              <>
                <div className="service-item">
                  <ServiceItem
                    key={item + idx}
                    servicesItemTitle={item.servicesItemTitle}
                    servicesItemText={item.servicesItemText}
                    servicesItemImg={item.servicesItemImg}
                    servicesItemLi={item.servicesItemLi}
                  />
                </div>
              </>
            );
          })}
        </div>
        <div className="about-service">
          <div className="service-image">
            <img
              src="https://softvoya.ru/assets/img/automation/includes.svg"
              alt=""
            />
          </div>
          <div className="service-description">
            <h2>Что включает в себя автоматизация?</h2>
            <ul>
              <li>Управление ресурсами компании (ERP)</li>
              <li>Управление взаимоотношениями с клиентами (CRM)</li>
              <li>Налоги и бухгалтерский учет</li>
              <li>Бизнес-процессы и документооборот</li>
              <li>Сопровождение после внедрения</li>
            </ul>
          </div>
        </div>
      </div>
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
    </>
  );
}
export default ServiceAutomatisation;
