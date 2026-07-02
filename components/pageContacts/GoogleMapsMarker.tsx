"use client";

import { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { mapCenter, markerPosition } from "@/lib/content/site";
import { mobileDetect } from "@/utils/mobileDetect";

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const { isMobile } = mobileDetect();

const center = mapCenter();
const marker = markerPosition();

const mapOptions = {
  zoomControl: !isMobile,
  mapTypeControl: false,
  maxZoom: 18,
  minZoom: 13
};

export const GoogleMapsMarker = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAPS_API_KEY ?? ""
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds(marker);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName="w-full h-[440px] rounded-lg border border-input-light"
      center={center}
      onLoad={onLoad}
      onUnmount={() => setMap(null)}
      options={mapOptions}
    >
      <MarkerF position={marker} />
    </GoogleMap>
  ) : null;
};
