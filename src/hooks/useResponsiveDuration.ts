import { useEffect, useState } from "react";

const useResponsiveDuration = () => {
  const [duration, setDuration] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 1024 ? 40 : 15;
    }
    return 25; // Default value for server-side rendering
  });

  useEffect(() => {
    const updateDuration = () => {
      if (window.innerWidth >= 1024) {
        setDuration(30); // lg and xl
      } else {
        setDuration(15); // sm and md
      }
    };

    window.addEventListener("resize", updateDuration);
    return () => window.removeEventListener("resize", updateDuration);
  }, []);

  return duration;
};

export default useResponsiveDuration;
