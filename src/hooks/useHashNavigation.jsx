import { useEffect, useState } from "react";

export function useHashNavigation() {
  const [hash, setHash] = useState(location.hash);

  const hashChange = () => {
    setHash(location.hash);
  };

  useEffect(() => {
    window.addEventListener("hashchange", hashChange);
    return () => window.removeEventListener("hashchange", hashChange);
  }, [hash]);

  const tmp = hash.replace("#", "").toLowerCase()?.split(":");

  return {
    page: tmp[0] || "home",
    param: tmp[1],
  };
}
