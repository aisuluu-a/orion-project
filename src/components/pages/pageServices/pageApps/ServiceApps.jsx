import { ServicesMain, ServiceItem } from "../../../components";
import { servicesItem } from "../../../dataBase";
import { appServicesItem } from "../../../dataBase";
import "./serviceApps.scss";

function ServiceApps() {
  return (
    <>
      <div>
        <ServicesMain
          serviceTitle={servicesItem[2].title}
          serviceSubTitle={servicesItem[2].subTitle}
          serviceText={servicesItem[2].text}
          serviceImgSrc={servicesItem[2].imgSrc}
        />
      </div>
      <div className="automatisation">
        <h2>Зачем компаниям мобильные и веб приложения</h2>
        <p>
          Разработку мобильного и веб приложения заказывают не для того, чтобы
          оно было. Приложение – это средство достижения конечной цели, будь то
          привлечение новой аудитории, создание нового канала коммуникации с
          клиентами или тестирование гипотезы для стартапа. Однако сделать
          мобильное приложение – не то же самое, что запустить работающий
          сервис. Именно поэтому мы выстроили рабочие процессы внутри студии
          так, что каждый специалист в команде стремится не просто к загрузке
          приложения в App Store или Google Play, а к проверке, хорошо ли сервис
          выполняет задачу, для которой создавался.
        </p>
        <div className="service-list">
          {appServicesItem.map((item, idx) => {
            return (
              <>
                <div className="service-item">
                  <ServiceItem
                    servicesItemTitle={item.servicesItemTitle}
                    servicesItemText={item.servicesItemText}
                    servicesItemText2={item.servicesItemText2}
                    servicesItemImg={item.servicesItemImg}
                    servicesItemLi={item.servicesItemLi}
                  />
                </div>
              </>
            );
          })}
          {/* console.log({AppServicesItem}); */}
        </div>
        <div className="about-service">
          <div className="service-description">
            <h2>Тренды в дизайне мобильных приложений от Orion</h2>
            <iframe
              width="1285"
              height="478"
              src="https://www.youtube.com/embed/Uq6DeHIUpsE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
export default ServiceApps;
