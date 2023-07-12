import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  const setOnline = () => {
    console.log("online");
    setIsOnline(true);
  };

  const setOffline = () => {
    console.log("offline");
    setIsOnline(false);
  };

  useEffect(() => {
    window.addEventListener("online", setOnline);
    window.addEventListener("offline", setOffline);

    return () => {
      window.removeEventListener("online", setOnline);
      window.removeEventListener("offline", setOffline);
    };
  }, []);
  return isOnline;
};

export default useOnline;
