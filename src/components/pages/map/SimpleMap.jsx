import React from "react";
import GoogleMapReact from "google-map-react";
import "./map.scss";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "red",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
    }}
  >
    {text}
  </div>
);

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 42.870115,
      lng: 74.60574,
    },
    zoom: 11,
  };

  return (
    <div className="contacts">
      <h1>Contact</h1>
      <p>contact us</p>
      <div className="boxs">
        <div className="content">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={42.870115}
              lng={74.60574}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>

        <div className="content">
          <h5> Cjynfrn hjkh</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            reprehenderit fugiat, nulla quas ea repellendus ipsum minus quisquam
            eius voluptatem consequatur esse magnam veniam impedit eos! Impedit
            totam eius ullam.
          </p>
        </div>
      </div>
    </div>

    // Important! Always set the container height explicitly
  );
}
