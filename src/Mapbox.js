// import { useState, useEffect, useRef } from 'react';
// import mapboxgl from '!mapbox-gl';

// mapboxgl.accessToken = "pk.eyJ1IjoidmVkczIyIiwiYSI6ImNsNXJtaXlrdzAwNWkzZG1wOTc1NmprM28ifQ.mNvnY0v1GycahvvSIdCgCA";

// const Mapbox = ( ) => {

// const mapContainer = useRef(null);
// const map = useRef(null);
// const [lng, setLng] = useState(29.235600);
// const [lat, setLat] = useState(-1.683500);
// const  zoom = 13 ;

// useEffect(() => {
//     if (map.current) return;

//     //////////////// STORE THE MAP IN THE REF ////////////
//     map.current = new mapboxgl.Map({
//         container: mapContainer.current,
//         style: "mapbox://styles/mapbox/streets-v11",
//         center: [lng, lat],
//         zoom: zoom
//     });

//     ///////////// CREATE GEOLOCATION CONTROL TO GET THE CURRENT LOCATION ///////
//     const userLocation = new mapboxgl.GeolocateControl({
//         positionOptions: {
//             enableHighAccuracy: true
//         },
//         trackUserLocation: true,
//         showUserHeading: true
//     });

//     /////////////////////// GET CURRENT LOCATION COORDINATES //////////////////////////////////
//         userLocation.on('geolocate', (e) => {
//         const lng = e.coords.longitude;
//         const lat = e.coords.latitude
//         const position = [lng, lat];
//         setLat(lat);
//         setLng(lng);
//     });

//     ///////////////////////// ADD THE USER LOCATION CONTROL ON THE MAP ///////////////////
//     map.current.addControl(userLocation,"top-right");
// }, [lat,lng, zoom]);

// return  <div 
//             ref={mapContainer} 
//             style={{
//                             position: "absolute",
//                             top: 0,
//                             left: 0,
//                             bottom: 0,
//                             height: "100vh",
//                             width: "100%"
//                         }} 
//                 />
//     }

// export default Mapbox;