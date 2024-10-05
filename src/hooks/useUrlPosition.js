import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  const [seatchParams] = useSearchParams();
  const lat = seatchParams.get("lat");
  const lng = seatchParams.get("lng");

  return [lat, lng];
}
