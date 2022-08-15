import mapboxGl from 'mapbox-gl';
import Mapbox from './Mapbox';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; 

mapboxgl.accessToken = 'pk.eyJ1IjoidmVkczIyIiwiYSI6ImNsNXJtaXlrdzAwNWkzZG1wOTc1NmprM28ifQ.mNvnY0v1GycahvvSIdCgCA';

export default function App() {
    // useEffect(() => {
  //   mapboxGl.FullscreenControl
  // }, [])
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  const nav = new mapboxgl.NavigationControl();

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    const userLocation = new mapboxgl.GeolocateControl({
      positionOptions: {
          enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true
    });

    var directions = new mapboxgl.MapboxDirections({
      accessToken: 'pk.eyJ1IjoidmVkczIyIiwiYSI6ImNsNXJtaXlrdzAwNWkzZG1wOTc1NmprM28ifQ.mNvnY0v1GycahvvSIdCgCA',
      // unit: 'metric',
      // profile: 'mapbox/cycling'
    });

    userLocation.on('geolocate', (e) => {
      const lng = e.coords.longitude;
      const lat = e.coords.latitude
      const position = [lng, lat];
      setLat(lat);
      setLng(lng);
    });

    map.current.addControl(userLocation, 'top-right');
    map.current.addControl(directions, 'top-right');
    // map.addControl(
    //   new MapboxDirections({
    //   accessToken: 'pk.eyJ1IjoidmVkczIyIiwiYSI6ImNsNXJtaXlrdzAwNWkzZG1wOTc1NmprM28ifQ.mNvnY0v1GycahvvSIdCgCA',
    //   }),
    //   'top-left'
    //   );
    // map.current.addControl(directions, 'bottom-right');
  }, [lat,lng, zoom]);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  // map.addControl(nav);
  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}