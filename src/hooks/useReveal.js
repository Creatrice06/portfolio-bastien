import { useEffect, useRef, useState } from "react";

const hiddenByVariant = {
  "fade-up": "translate-y-7 opacity-0",
  "fade-in": "opacity-0",
  "slide-up": "translate-y-10 opacity-0 blur-[2px]",
};

export function useReveal(variant = "fade-up") {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || isVisible) return undefined;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.unobserve(entry.target);
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible]);

  return {
    ref,
    className: isVisible
      ? "translate-y-0 opacity-100 blur-0"
      : hiddenByVariant[variant] || hiddenByVariant["fade-up"],
  };
}
