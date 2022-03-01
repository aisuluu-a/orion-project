
import React from "react";
import GoogleMapReact from 'google-map-react';
import './map.scss'

/*const AnyReactComponent = ({ text }) => 
    <div style={{
        color: 'white', 
        background: 'red',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
    }}>
        {text}
    </div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 42.870115,
      lng: 74.605740
    },
    zoom: 11
  };

  
  return (
      <div className="contacts">  
          <h1>Contact</h1>
          <p>contact us</p>
            <div className="boxs">
                <div className="content" >
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                    lat={42.870115}
                    lng={74.605740}
                    text="My Marker"
                    />
                </GoogleMapReact>
                    </div>
                
                    <div className="content" >
                        <h5> Cjynfrn hjkh</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam reprehenderit fugiat, nulla quas ea repellendus ipsum minus quisquam eius voluptatem consequatur esse magnam veniam impedit eos! Impedit totam eius ullam.</p>
                </div>
            </div>
                    

        </div>

    
    // Important! Always set the container height explicitly

  );
}*/
  
  function Mape() {
    return (
        <div className="contacts">
                      <h1>Contact</h1>
          <p>contact us</p>
            <div className="boxs">
                <div className="content" >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.1701986668722!2d74.60482211533956!3d42.869251679156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7cf99d5d33d%3A0x36dff1646de6c45a!2zMjEg0L_RgNC-0YHQvy4g0K3RgNC60LjQvdC00LjQuiwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1640528893354!5m2!1sru!2skg" width="300" height="450" border= "0" allowfullscreen="" loading="lazy" title="map"></iframe>
                </div>
                
                <div className="content" >
                        <h5> Cjynfrn hjkh</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam reprehenderit fugiat, nulla quas ea repellendus ipsum minus quisquam eius voluptatem consequatur esse magnam veniam impedit eos! Impedit totam eius ullam.</p>
                </div>
            </div>
        </div>
    )
  }

  export default Mape;