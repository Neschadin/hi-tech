"use client";

import {
  AdvancedMarker,
  APIProvider,
  Map,
  useApiIsLoaded
} from "@vis.gl/react-google-maps";
import { markerPosition, site } from "@/lib/content/site";
import { cn } from "@/utils/cn";
import { mobileDetect } from "@/utils/mobileDetect";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";
const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID ?? "";

const center = markerPosition();
const marker = center;
const { isMobile } = mobileDetect();

const mapContainerClass =
  "w-full h-[440px] rounded-lg border border-input-light overflow-hidden";

const MapContent = () => {
  const isLoaded = useApiIsLoaded();

  if (!isLoaded) {
    return (
      <div
        className={cn(mapContainerClass, "animate-pulse bg-light-bg")}
        aria-hidden
      />
    );
  }

  return (
    <div className={mapContainerClass}>
      <Map
        mapId={mapId}
        defaultCenter={center}
        defaultZoom={17}
        style={{ width: "100%", height: "100%" }}
        gestureHandling="cooperative"
        mapTypeControl={false}
        zoomControl={!isMobile}
        minZoom={15}
        maxZoom={20}
        disableDefaultUI={false}
      >
        <AdvancedMarker position={marker} title={site.googleBusinessName} />
      </Map>
    </div>
  );
};

export const GoogleMapsMarker = () => {
  if (!apiKey || !mapId) return null;

  return (
    <APIProvider apiKey={apiKey} version="weekly">
      <MapContent />
    </APIProvider>
  );
};
