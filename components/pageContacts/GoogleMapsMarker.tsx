"use client";

import { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { mobileDetect } from "@/utils/mobileDetect";

const { isMobile } = mobileDetect();

const mapPosition = {
  lat: 49.43218,
  lng: 32.0115852355957,
};

const markerPosition = {
  lat: 49.432116,
  lng: 32.0115885,
};

const mapOptions = {
  zoomControl: !isMobile,
  mapTypeControl: false,
  maxZoom: 18,
  minZoom: 13,
};

export const GoogleMapsMarker = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY! ,
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds(mapPosition);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName="w-full h-[440px] rounded-lg border border-input-light"
      center={mapPosition}
      onLoad={onLoad}
      onUnmount={() => setMap(null)}
      options={mapOptions}
    >
      <MarkerF position={markerPosition} />
    </GoogleMap>
  ) : null;
};
