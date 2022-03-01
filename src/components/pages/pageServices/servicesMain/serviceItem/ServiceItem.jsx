// import { ServicesMain, Services } from "../../../../components";

import "./serviceItem.scss";

function ServiceItem(props) {
  return (
    <>
      <div className="service-item">
        <img src={props.servicesItemImg} alt="" />
        <h4>{props.servicesItemTitle}</h4>
        <p>{props.servicesItemText}</p>
        <p>{props.servicesItemText2}</p>
        <ul>
          {props.servicesItemLi.map((item, idx) => {
            return <li key={idx}>{item}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
export default ServiceItem;
