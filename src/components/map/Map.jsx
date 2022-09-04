import './map.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useEffect } from 'react';

function Map(){
    const position = [30.1047182,31.3198379];

    useEffect(()=>{

                // get the current position
            window.navigator.geolocation.getCurrentPosition(onSuccess, onError);
        
            // handle success case
            function onSuccess(position) {
                const {
                    latitude,
                    longitude
                } = position.coords;

                console.log(`Your location: (${latitude},${longitude})`);
            }

            function onError(err){
                console.log(err);
            }
    },[])

  return (
    <div id='map'>
      <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
    </div>
  )
}

export default Map
