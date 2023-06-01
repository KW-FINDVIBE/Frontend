/* eslint-disable react-hooks/exhaustive-deps */
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  MarkerClustererF,
  StreetViewPanorama,
} from "@react-google-maps/api";
import { useState, useEffect } from "react";
import cursor from "../../assets/Svg/Cursor.svg";
import camera from "../../assets/Svg/Camera.svg";
import RotateIcon, { getAngle } from "./RotateIcon";
import CustomMarker from "./CustomMarker";

interface GoogleMapApiProps {
  coordinate: { lat: number; lng: number }[][];
}

const GoogleMapApi: React.FunctionComponent<GoogleMapApiProps> = ({
  coordinate,
}) => {
  const [selectedLocationIndex, setSelectedLocationIndex] = useState(-1);
  const [selectedLocationId, setSelectedLocationId] = useState<number | null>(
    null
  );
  const [isLoadViewVisible, setIsLoadViewVisible] = useState(false);
  const [map, setMap] = useState<google.maps.Map>();
  const [rotatedMarkers, setRotatedMarkers] = useState<string[][]>([]);
  const koreaUniverSity = {
    lat: 37.588556,
    lng: 127.019981,
  };

  useEffect(() => {
    const newMarkerList: string[][] = [];

    let rotateIcon = new RotateIcon();
    coordinate.forEach((selected) => {
      const markerList: string[] = [];
      selected.forEach((location) => {
        markerList.push(
          rotateIcon.setRotation(getAngle(koreaUniverSity, location)).getUrl()
        );
      });
      newMarkerList.push(markerList);
    });

    setRotatedMarkers(newMarkerList);
    setSelectedLocationId(null);
    setSelectedLocationIndex(newMarkerList.length - 1);

    console.log("RERENDER");
  }, [map, coordinate]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY as string,
  });

  useEffect(() => {
    if (map && isLoaded) {
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(koreaUniverSity);
      coordinate[selectedLocationIndex]?.forEach((item) => {
        bounds.extend(item);
      });
      map.fitBounds(bounds);
    }
  }, [isLoaded, map, coordinate, selectedLocationIndex]);

  if (!isLoaded) {
    return <div className="col-start-1 col-end-13">Loading...</div>;
  }
  return (
    <>
      <div className=" col-span-6 tablet:col-start-1 tablet:col-span-1 flex flex-row tablet:flex-col items-center justify-center">
        {coordinate.map((_, idx) => {
          return (
            <button
              className="w-full font-pretendardBold border border-white my-[0.5em] p-2 rounded-md hover:bg-deeporange bg-shalloworange"
              key={idx}
              onClick={() => {
                setSelectedLocationId(null);
                setSelectedLocationIndex(idx);
                setIsLoadViewVisible(false);
              }}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>
      <div className=" border border-shalloworange p-2 col-span-6 tablet:col-start-2 tablet:col-end-12">
        <GoogleMap
          onLoad={(map) => {
            setMap(map);
          }}
          onClick={() => setSelectedLocationId(null)}
          center={{
            lat:
              coordinate[selectedLocationIndex]?.reduce(
                (acc, cur) => acc + cur.lat,
                0
              ) / coordinate[selectedLocationIndex]?.length || 37.551399,
            lng:
              coordinate[selectedLocationIndex]?.reduce(
                (acc, cur) => acc + cur.lng,
                0
              ) / coordinate[selectedLocationIndex]?.length || 126.988259,
          }}
          mapContainerStyle={{
            height: "50vh",
          }}

        >
          {coordinate.length > 0 &&
            coordinate[selectedLocationIndex]?.length && (
              <StreetViewPanorama
                options={{
                  position:
                    coordinate[selectedLocationIndex][selectedLocationId ?? 0],
                  visible: isLoadViewVisible,
                }}
                onCloseclick={() => setIsLoadViewVisible(false)}
              />
            )}
          <div className="invisible">
            <MarkerF
              position={{ lat: 0, lng: 0 }}
              icon={{
                url: cursor,
              }}
            />
          </div>

          <MarkerF
            position={koreaUniverSity}
            icon={{
              url: camera,
            }}
          />

          <MarkerClustererF>
            {(clusterer) => (
              <>
                {coordinate[selectedLocationIndex]?.map((location, idx) => (
                  <CustomMarker
                    key={location.lat + location.lng}
                    location={location}
                    clusterer={clusterer}
                    uri={rotatedMarkers[selectedLocationIndex][idx] ?? cursor}
                    onClick={() => {
                      setSelectedLocationId(idx);
                      setIsLoadViewVisible(true);
                    }}
                  />
                ))}
              </>
            )}
          </MarkerClustererF>
        </GoogleMap>
      </div>
    </>
  );
};
export default GoogleMapApi;
