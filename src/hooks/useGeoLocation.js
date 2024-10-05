import { useState, useEffect } from "react";

export function useGeolocation(autoFetch = false) {
  const [isLoadingPosition, setIsLoading] = useState(false);
  const [geoLocationPosition, setPosition] = useState(null); // initialized with `null`
  const [error, setError] = useState(null);

  function getPosition() {
    if (!navigator.geolocation) {
      setError("Your browser does not support geolocation");
      return;
    }

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        console.log(error.message);
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  useEffect(() => {
    if (autoFetch) {
      getPosition();
    }
  }, [autoFetch]);

  return { isLoadingPosition, geoLocationPosition, error, getPosition };
}
